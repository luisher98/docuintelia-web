"use client";

import { useEffect, useState, useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
    recaptchaLoaded?: boolean;
    recaptchaLoading?: boolean;
  }
}

function loadRecaptchaScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.recaptchaLoaded) {
      resolve();
      return;
    }

    if (window.recaptchaLoading) {
      const checkLoaded = setInterval(() => {
        if (window.recaptchaLoaded) {
          clearInterval(checkLoaded);
          resolve();
        }
      }, 100);
      return;
    }

    window.recaptchaLoading = true;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.recaptchaLoaded = true;
      window.recaptchaLoading = false;
      resolve();
    };

    script.onerror = () => {
      window.recaptchaLoading = false;
      reject(new Error("Failed to load reCAPTCHA script"));
    };

    document.head.appendChild(script);
  });
}

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadRecaptcha = useCallback(async () => {
    if (typeof window === "undefined" || isReady || isLoading) return;

    setIsLoading(true);

    try {
      await loadRecaptchaScript();

      const checkReady = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(() => {
            setIsReady(true);
            setIsLoading(false);
          });
          clearInterval(checkReady);
        }
      }, 100);
    } catch (error) {
      console.error("Failed to load reCAPTCHA:", error);
      setIsLoading(false);
    }
  }, [isReady, isLoading]);

  useEffect(() => {
    loadRecaptcha();
  }, [loadRecaptcha]);

  const executeRecaptcha = async (action: string): Promise<string | null> => {
    if (typeof window === "undefined") {
      return null;
    }

    if (!isReady) {
      await loadRecaptcha();
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (!window.grecaptcha) {
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action }
      );
      return token;
    } catch (error) {
      console.error("reCAPTCHA execution error:", error);
      return null;
    }
  };

  return { isReady, isLoading, executeRecaptcha, loadRecaptcha };
}
