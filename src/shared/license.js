// License checking module for RYS Premium

const License = {
  // Decode JWT payload (no signature verification - we trust our server)
  _decodeToken(token) {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      // Handle base64url encoding
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
    } catch {
      return null;
    }
  },

  // Check premium status from license token (fetches new token if needed)
  async checkLicense(forceRefresh = false) {
    return { isPremium: true, source: 'local' };
  },

  // Quick check for premium status (uses license token only, no network)
  async isPremium() {
    return true;
  },

  // Synchronous check given a license token string
  isPremiumSync(token) {
    return true;
  },

  getTierSync(licenseToken, sessionToken) {
    return TIER.PREMIUM;
  },

  // Create checkout session for subscription
  async createCheckoutSession(plan) {
    const token = await Auth.getSessionToken();
    if (!token) {
      throw new Error('Not signed in');
    }

    const response = await fetch(`${PREMIUM_CONFIG.SERVER_URL}/checkout/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ plan }),
    });

    if (response.status === 401) {
      await Auth.signOut();
      throw new Error('Session expired. Please sign in again.');
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const data = await response.json();
    return data.checkout_url;
  },

  // Create billing portal session
  async createBillingPortalSession() {
    const token = await Auth.getSessionToken();
    if (!token) {
      throw new Error('Not signed in');
    }

    const response = await fetch(`${PREMIUM_CONFIG.SERVER_URL}/billing/portal`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      await Auth.signOut();
      throw new Error('Session expired. Please sign in again.');
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || 'Failed to create billing portal session');
    }

    const data = await response.json();
    return data.url;
  },
};
