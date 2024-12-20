import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from '../lib/firebase';

export const initializeAnalytics = async () => {
  try {
    // Only initialize analytics in production and if supported
    if (import.meta.env.PROD && await isSupported()) {
      return getAnalytics(app);
    }
  } catch (error) {
    console.warn('Analytics initialization failed:', error);
  }
  return null;
};