import { useEffect } from 'react';
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRejection = (e) => {
      const msg = e?.reason?.message || String(e?.reason || '');
      const stack = e?.reason?.stack || '';
      if (msg.includes('Failed to fetch') || stack.includes('fullstory') || stack.includes('fs.js')) {
        // Prevent the dev overlay / console from surfacing noisy external network errors
        console.warn('Suppressed external network error:', msg);
        e.preventDefault?.();
      }
    };

    const handleError = (ev) => {
      const msg = ev?.message || '';
      const filename = ev?.filename || '';
      const errorObj = ev?.error || {};
      const stack = errorObj?.stack || '';
      if (msg.includes('Failed to fetch') || filename.includes('edge.fullstory.com') || stack.includes('fullstory')) {
        console.warn('Suppressed external network error:', msg || filename);
        ev.preventDefault?.();
        return true;
      }
      return false;
    };

    window.addEventListener('unhandledrejection', handleRejection);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
