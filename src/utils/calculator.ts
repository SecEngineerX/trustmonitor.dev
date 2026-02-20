// Calculator Logic for TrustMonitor Payout Estimations

export interface CalculatorInput {
  missedIncidents: number;
  avgLossPerIncident: number;
  tier?: 'standard' | 'professional' | 'enterprise';
}

export interface CalculatorOutput {
  totalLosses: number;
  vendorPaid: number;
  trustmonitorPays: number;
  perIncidentCap: number;
  numberOfPayouts: number;
}

// Tier configuration matching pricing
const TIER_CAPS = {
  standard: 200,
  professional: 500,
  enterprise: 1000,
} as const;

/**
 * Calculate estimated TrustMonitor payouts vs. current vendor
 * @param input - Incident data and tier selection
 * @returns Calculated exposure and payout estimates
 */
export function calculatePayout(input: CalculatorInput): CalculatorOutput {
  const { missedIncidents, avgLossPerIncident, tier = 'professional' } = input;
  
  // Total losses absorbed by customer
  const totalLosses = missedIncidents * avgLossPerIncident;
  
  // Current vendor pays $0 (or negligible service credits)
  const vendorPaid = 0;
  
  // TrustMonitor payout per tier
  const perIncidentCap = TIER_CAPS[tier];
  const trustmonitorPays = Math.min(
    missedIncidents * perIncidentCap,
    totalLosses // Never pay more than actual loss
  );
  
  return {
    totalLosses,
    vendorPaid,
    trustmonitorPays,
    perIncidentCap,
    numberOfPayouts: missedIncidents,
  };
}

/**
 * Format currency for display
 * @param amount - Dollar amount to format
 * @returns Formatted string with $ and commas
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate percentage of losses covered
 * @param trustmonitorPays - Amount TrustMonitor would pay
 * @param totalLosses - Total losses absorbed
 * @returns Percentage as decimal (0-1)
 */
export function calculateCoveragePercentage(
  trustmonitorPays: number,
  totalLosses: number
): number {
  if (totalLosses === 0) return 0;
  return Math.min(trustmonitorPays / totalLosses, 1);
}

/**
 * Validate calculator inputs
 * @param input - Raw input to validate
 * @returns Error message or null if valid
 */
export function validateCalculatorInput(
  input: Partial<CalculatorInput>
): string | null {
  const { missedIncidents, avgLossPerIncident } = input;
  
  if (missedIncidents === undefined || missedIncidents === null) {
    return 'Number of missed incidents is required';
  }
  
  if (avgLossPerIncident === undefined || avgLossPerIncident === null) {
    return 'Average loss per incident is required';
  }
  
  if (missedIncidents < 0) {
    return 'Number of incidents cannot be negative';
  }
  
  if (avgLossPerIncident < 0) {
    return 'Loss amount cannot be negative';
  }
  
  if (missedIncidents > 999) {
    return 'If you had 999+ missed incidents, you need enterprise monitoring immediately';
  }
  
  if (avgLossPerIncident > 10000000) {
    return 'For losses exceeding $10M per incident, contact enterprise sales';
  }
  
  return null;
}

/**
 * Get suggested tier based on input
 * @param input - Calculator input
 * @returns Recommended tier
 */
export function getSuggestedTier(input: CalculatorInput): 'standard' | 'professional' | 'enterprise' {
  const { missedIncidents, avgLossPerIncident } = input;
  const totalAnnualLoss = missedIncidents * avgLossPerIncident;
  
  // Enterprise: >$100k annual loss or >$50k per incident
  if (totalAnnualLoss > 100000 || avgLossPerIncident > 50000) {
    return 'enterprise';
  }
  
  // Professional: >$20k annual loss or >3 incidents
  if (totalAnnualLoss > 20000 || missedIncidents > 3) {
    return 'professional';
  }
  
  // Standard: Everything else
  return 'standard';
}

/**
 * Calculate ROI of switching to TrustMonitor
 * @param input - Calculator input with tier
 * @param monthlyFee - Current monitoring spend
 * @returns ROI analysis
 */
export interface ROIAnalysis {
  currentAnnualCost: number; // Current monitoring + losses
  trustmonitorAnnualCost: number; // TM fees - payouts
  annualSavings: number;
  roiPercentage: number;
  breakevenMonths: number;
}

export function calculateROI(
  input: CalculatorInput,
  currentMonthlyFee: number
): ROIAnalysis {
  const tierPricing = {
    standard: 499,
    professional: 2499,
    enterprise: 5000, // Estimate for enterprise
  };
  
  const tier = input.tier || 'professional';
  const trustmonitorMonthly = tierPricing[tier];
  const payout = calculatePayout(input);
  
  // Annualized costs
  const currentAnnualCost = (currentMonthlyFee * 12) + payout.totalLosses;
  const trustmonitorAnnualCost = (trustmonitorMonthly * 12) - payout.trustmonitorPays;
  const annualSavings = currentAnnualCost - trustmonitorAnnualCost;
  
  // ROI calculation
  const roiPercentage = (annualSavings / currentAnnualCost) * 100;
  const breakevenMonths = annualSavings > 0 
    ? Math.ceil((trustmonitorMonthly - currentMonthlyFee) / (annualSavings / 12))
    : 999;
  
  return {
    currentAnnualCost,
    trustmonitorAnnualCost,
    annualSavings,
    roiPercentage,
    breakevenMonths,
  };
}
