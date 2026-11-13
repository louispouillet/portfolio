import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange: () => void): (() => void) => {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
};

const getSnapshot = (): boolean => window.matchMedia(REDUCED_MOTION_QUERY).matches;

export const usePrefersReducedMotion = (): boolean => useSyncExternalStore(subscribe, getSnapshot);
