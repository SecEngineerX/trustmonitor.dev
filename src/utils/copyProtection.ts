/**
 * Copy Protection Utility
 * Implements non-breaking copy protection while preserving accessibility and SEO
 */

export const initCopyProtection = () => {
  if (typeof window === 'undefined') return;

  // 1. DISABLE TEXT SELECTION ON NON-INTERACTIVE ELEMENTS
  const protectedElements = document.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, p:not(input):not(textarea), .proof-section, .pain, .comparison, .guarantee'
  );
  
  protectedElements.forEach((el) => {
    (el as HTMLElement).style.userSelect = 'none';
    (el as HTMLElement).style.webkitUserSelect = 'none';
    (el as HTMLElement).style.userSelect = 'none';
    (el as HTMLElement).style.userSelect = 'none';
  });

  // 2. DISABLE RIGHT-CLICK CONTEXT MENU (non-breaking)
  document.addEventListener('contextmenu', (e) => {
    // Allow context menu on form inputs and textareas
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      return;
    }
    e.preventDefault();
  }, false);

  // 3. BLOCK Ctrl+C / Cmd+C SHORTCUTS (where applicable)
  document.addEventListener('keydown', (e) => {
    // Allow copy on form inputs
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      return;
    }
    
    // Block Ctrl+C / Cmd+C
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      e.preventDefault();
    }
    
    // Block Ctrl+A / Cmd+A on protected content
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        const selectedElement = selection.anchorNode?.parentElement;
        if (selectedElement && !['INPUT', 'TEXTAREA'].includes(selectedElement.tagName)) {
          e.preventDefault();
        }
      }
    }
  }, false);

  // 4. PREVENT IMAGE DRAG
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('dragstart', (e) => {
      e.preventDefault();
    }, false);
    (img as HTMLElement).style.userSelect = 'none';
    (img as HTMLElement).style.webkitUserSelect = 'none';
  });

  // 5. LIGHTWEIGHT WATERMARK / CONTENT FINGERPRINTING
  addContentFingerprint();

  // 6. DEVTOOLS DETECTION (non-intrusive, no infinite loops)
  detectDevTools();
};

/**
 * Add content fingerprinting via data attributes
 * Helps track unauthorized distribution
 */
const addContentFingerprint = () => {
  const timestamp = new Date().toISOString();
  const fingerprint = `trustmonitor-${timestamp}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Add fingerprint to document root
  document.documentElement.setAttribute('data-content-id', fingerprint);
  
  // Add fingerprint to key sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.setAttribute('data-section-id', `${fingerprint}-${index}`);
  });
};

/**
 * Non-intrusive DevTools detection
 * Logs warning but doesn't break functionality
 */
const detectDevTools = () => {
  let devToolsOpen = false;
  
  const check = () => {
    const threshold = 160;
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        console.warn(
          '%cTrustMonitor Security Notice',
          'color: #7F1D1D; font-weight: bold; font-size: 14px;'
        );
        console.warn(
          'This site contains proprietary content. Unauthorized access or distribution is prohibited.'
        );
      }
    } else {
      devToolsOpen = false;
    }
  };
  
  // Check every 500ms
  setInterval(check, 500);
};

/**
 * Disable text selection on specific elements
 */
export const disableTextSelection = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    (el as HTMLElement).style.userSelect = 'none';
    (el as HTMLElement).style.webkitUserSelect = 'none';
    (el as HTMLElement).style.userSelect = 'none';
    (el as HTMLElement).style.userSelect = 'none';
  });
};

/**
 * Enable text selection on specific elements (for forms, etc.)
 */
export const enableTextSelection = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    (el as HTMLElement).style.userSelect = 'auto';
    (el as HTMLElement).style.webkitUserSelect = 'auto';
    (el as HTMLElement).style.userSelect = 'auto';
    (el as HTMLElement).style.userSelect = 'auto';
  });
};
