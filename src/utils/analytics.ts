// Production Analytics & Conversion Tracking Module
// Supports Google Analytics 4 (VITE_GA_MEASUREMENT_ID) and Meta Pixel (VITE_META_PIXEL_ID)
// Safe and silent fallback when environment variables are not configured.

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

let analyticsInitialized = false;

/**
 * Initializes Google Analytics 4 and Meta Pixel if valid environment variables are present.
 * If variables are absent or empty, the application runs normally with zero errors.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined' || analyticsInitialized) return;
  analyticsInitialized = true;

  const gaId = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();
  const metaPixelId = (import.meta.env.VITE_META_PIXEL_ID || '').trim();

  // 1. Google Analytics 4 initialization
  if (gaId && /^G-[A-Z0-9]+$/i.test(gaId)) {
    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer?.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        send_page_view: true,
        anonymize_ip: true,
      });
    } catch {
      // Graceful error isolation
    }
  }

  // 2. Meta / Facebook Pixel initialization
  if (metaPixelId && /^[0-9]+$/.test(metaPixelId)) {
    try {
      if (!window.fbq) {
        const fbq: any = function () {
          if (fbq.callMethod) {
            fbq.callMethod.apply(fbq, arguments);
          } else {
            fbq.queue.push(arguments);
          }
        };
        if (!window._fbq) window._fbq = fbq;
        fbq.push = fbq;
        fbq.loaded = true;
        fbq.version = '2.0';
        fbq.queue = [];
        window.fbq = fbq;

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        document.head.appendChild(script);
      }

      window.fbq('init', metaPixelId);
      window.fbq('track', 'PageView');
    } catch {
      // Graceful error isolation
    }
  }
}

/**
 * Generic GA4 event dispatcher
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch {
      // Ignore
    }
  }
}

/**
 * Track WhatsApp Conversion
 * Triggered whenever a user taps any WhatsApp link or button
 */
export function trackWhatsAppClick(source: string, details?: string): void {
  // GA4 Conversion
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: source,
    button_location: source,
    details: details || '',
  });

  // Meta Pixel Conversion
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Contact', {
        content_name: `WhatsApp: ${source}`,
      });
      window.fbq('trackCustom', 'WhatsAppClick', {
        source,
      });
    } catch {
      // Ignore
    }
  }
}

/**
 * Track Lead Form Submission
 * Never tracks PII (personally identifiable information) like names, phone numbers, or emails.
 */
export function trackLeadSubmission(service: string, businessType: string): void {
  // GA4 Conversion
  trackEvent('generate_lead', {
    event_category: 'engagement',
    service_type: service,
    business_type: businessType,
  });

  // Meta Pixel Conversion
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Lead', {
        content_category: service,
        content_name: businessType,
      });
    } catch {
      // Ignore
    }
  }
}

/**
 * Track Service Card Selection / Inquiries
 */
export function trackServiceSelect(serviceTitle: string): void {
  trackEvent('select_service', {
    event_category: 'engagement',
    service_name: serviceTitle,
  });
}

/**
 * Track Project Case Study Views
 */
export function trackProjectView(projectId: string, projectTitle: string): void {
  trackEvent('view_project_case_study', {
    event_category: 'portfolio',
    project_id: projectId,
    project_title: projectTitle,
  });
}

/**
 * Track Direct Email Link Clicks
 */
export function trackEmailClick(): void {
  trackEvent('email_click', {
    event_category: 'contact',
    method: 'mailto',
  });
}

/**
 * Track CTA Button Clicks
 */
export function trackCtaClick(ctaId: string, label: string): void {
  trackEvent('cta_click', {
    event_category: 'navigation',
    cta_id: ctaId,
    cta_label: label,
  });
}
