/**
 * Performance Optimization Utilities
 * Implements best practices for Lighthouse optimization
 */

export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // 1. LAZY LOAD IMAGES
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // 2. PRELOAD CRITICAL RESOURCES
  preloadCriticalFonts();

  // 3. DEFER NON-CRITICAL SCRIPTS
  deferNonCriticalScripts();

  // 4. OPTIMIZE LAYOUT SHIFTS
  optimizeLayoutShifts();

  // 5. CACHE STRATEGY
  implementCacheStrategy();
};

/**
 * Preload critical fonts to reduce CLS
 */
const preloadCriticalFonts = () => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://fonts.googleapis.com';
  document.head.appendChild(link);
};

/**
 * Defer non-critical scripts
 */
const deferNonCriticalScripts = () => {
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach((script) => {
    const newScript = document.createElement('script');
    newScript.src = script.getAttribute('src') || '';
    newScript.async = true;
    document.body.appendChild(newScript);
  });
};

/**
 * Optimize layout shifts by reserving space
 */
const optimizeLayoutShifts = () => {
  // Reserve space for images
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (img.width && img.height) {
      img.style.aspectRatio = `${img.width} / ${img.height}`;
    }
  });

  // Reserve space for ads/embeds
  const embeds = document.querySelectorAll('iframe, embed');
  embeds.forEach((embed) => {
    const el = embed as HTMLIFrameElement | HTMLEmbedElement;
    if (el.width && el.height) {
      el.style.aspectRatio = `${el.getAttribute('width')} / ${el.getAttribute('height')}`;
    }
  });
};

/**
 * Implement cache strategy for static assets
 */
const implementCacheStrategy = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker not available
    });
  }
};

/**
 * Report Web Vitals
 */
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics
    console.log('Web Vital:', metric);
  }
};

/**
 * Memoization helper for expensive computations
 */
export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache = new Map();
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

/**
 * Debounce function for event handlers
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Throttle function for event handlers
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
