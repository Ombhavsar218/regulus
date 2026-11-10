import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

function upsertMeta(selector, attributeName, attributeValue, content) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title.includes(siteConfig.companyName)
      ? title
      : `${title} | ${siteConfig.companyName}`;
    document.title = fullTitle;

    if (description) {
      upsertMeta('meta[name="description"]', 'name', 'description', description);
      upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
      upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);

    const canonicalUrl = `${siteConfig.siteUrl}${path}`;
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [title, description, path]);
}
