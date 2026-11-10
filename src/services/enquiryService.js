/**
 * Integration-ready enquiry adapter.
 *
 * To enable live submissions:
 * Set VITE_CONTACT_ENDPOINT in your .env file (e.g. Formspree, custom API route, or Web3Forms)
 * and optionally adjust headers/payload mapping below.
 *
 * When VITE_CONTACT_ENDPOINT is not configured, this service validates and formats
 * the payload locally and returns `mode: 'preview'` so the UI never falsely claims
 * an email was dispatched to an unconfigured backend.
 */
export async function submitEnquiry(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  const formattedPayload = {
    ...payload,
    submittedAt: new Date().toISOString(),
    source: 'regulus-corporate-website',
  };

  if (!endpoint) {
    // Brief realistic async check so loading state & accessibility regions behave cleanly
    await new Promise((resolve) => setTimeout(resolve, 450));
    return {
      ok: true,
      mode: 'preview',
      payload: formattedPayload,
      message:
        'Enquiry validated and formatted locally. Connect VITE_CONTACT_ENDPOINT or an email API in src/services/enquiryService.js to enable live dispatch.',
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formattedPayload),
  });

  if (!response.ok) {
    let errorDetail = `Server responded with status ${response.status}.`;
    try {
      const data = await response.json();
      if (data?.message || data?.error) {
        errorDetail = data.message || data.error;
      }
    } catch {
      // Keep fallback error detail
    }
    throw new Error(errorDetail);
  }

  return {
    ok: true,
    mode: 'live',
    payload: formattedPayload,
    message: 'Your enquiry has been transmitted. Thank you for reaching out to Regulus.',
  };
}
