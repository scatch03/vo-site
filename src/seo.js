import heroImage from './assets/me3.png';
import nplus1Image from './assets/nplus1.jpg';
import asyncAwaitImage from './assets/asaw.png';
import postgresIndexesImage from './assets/pgi.jpg';
import jwtImage from './assets/jwt.png';
import mongodbImage from './assets/mts.png';

const SITE_URL = 'http://oleksandrvorona.tech';
const SITE_NAME = 'Oleksandr Vorona | Principal Software Developer';
const PERSON_LINKEDIN_URL = 'https://www.linkedin.com/in/oleksandr-vorona-51906b234/';

const BLOG_PAGES = {
  '/blog/n-plus-one-hibernate': {
    title: 'N+1 Issue in Hibernate: Why It Happens and How to Fix It',
    description:
      'Learn how lazy loading causes N+1 queries in Hibernate and how to fix it with fetch join, EntityGraph, batch fetching, and DTO projections.',
    image: nplus1Image,
  },
  '/blog/async-await-javascript': {
    title: 'Async/Await in JavaScript: Practical Patterns, Pitfalls, and Performance',
    description:
      'A practical guide to async/await in JavaScript, including Promise composition, event loop behavior, cancellation, and production-ready error handling.',
    image: asyncAwaitImage,
  },
  '/blog/postgresql-index-types': {
    title: 'Types of PostgreSQL Indexes: When to Use Each One',
    description:
      'Choose the right PostgreSQL index type for each query pattern with practical examples for B-Tree, GIN, GiST, BRIN, and more.',
    image: postgresIndexesImage,
  },
  '/blog/jwt-spring-boot': {
    title: 'JWT Authentication in Spring Boot: End-to-End Guide',
    description:
      'Implement secure stateless JWT authentication in Spring Boot with token filters, access and refresh tokens, and production hardening practices.',
    image: jwtImage,
  },
  '/blog/mongodb-time-series-data': {
    title: 'Using MongoDB for Time Series Data',
    description:
      'Model and query high-volume time series data with MongoDB using time-series collections, aggregation windows, and retention strategies.',
    image: mongodbImage,
  },
};

const DEFAULT_PAGE = {
  title: SITE_NAME,
  description:
    'Portfolio of Oleksandr Vorona, Principal Software Developer with nearly 15 years of experience in ad tech, RTB systems, high-load backend engineering, and AI-driven optimization.',
  image: heroImage,
  type: 'website',
};

const toAbsoluteUrl = (pathOrUrl) => {
  if (!pathOrUrl) {
    return SITE_URL;
  }

  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
};

const upsertMetaTag = (selector, attributes, content) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const upsertCanonical = (url) => {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
};

const clearManagedStructuredData = () => {
  const existing = document.head.querySelectorAll('script[type="application/ld+json"][data-seo-managed="true"]');
  existing.forEach((node) => node.remove());
};

const addStructuredData = (entries) => {
  clearManagedStructuredData();
  entries.forEach((entry) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-managed', 'true');
    script.textContent = JSON.stringify(entry);
    document.head.appendChild(script);
  });
};

const buildStructuredData = ({ pathname, title, description, image, type }) => {
  if (type === 'article') {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: [toAbsoluteUrl(image)],
        author: {
          '@type': 'Person',
          name: 'Oleksandr Vorona',
          url: PERSON_LINKEDIN_URL,
        },
        publisher: {
          '@type': 'Person',
          name: 'Oleksandr Vorona',
          url: PERSON_LINKEDIN_URL,
        },
        mainEntityOfPage: toAbsoluteUrl(pathname),
      },
    ];
  }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Oleksandr Vorona',
      jobTitle: 'Principal Software Developer',
      url: SITE_URL,
      sameAs: [PERSON_LINKEDIN_URL],
      email: 'mailto:olexandrvorona@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bratislava',
        addressCountry: 'SK',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description,
    },
  ];
};

const getPageSeo = (pathname) => {
  const blogPage = BLOG_PAGES[pathname];
  if (blogPage) {
    return {
      ...blogPage,
      type: 'article',
      canonical: toAbsoluteUrl(pathname),
    };
  }

  return {
    ...DEFAULT_PAGE,
    canonical: toAbsoluteUrl('/'),
  };
};

export const applySeoForPath = (pathname) => {
  const page = getPageSeo(pathname);
  const fullTitle = page.title.includes('Oleksandr Vorona')
    ? page.title
    : `${page.title} | Oleksandr Vorona`;
  const imageUrl = toAbsoluteUrl(page.image);

  document.title = fullTitle;
  upsertCanonical(page.canonical);

  upsertMetaTag('meta[name="description"]', { name: 'description' }, page.description);
  upsertMetaTag('meta[name="robots"]', { name: 'robots' }, 'index,follow,max-snippet:-1,max-image-preview:large');

  upsertMetaTag('meta[property="og:title"]', { property: 'og:title' }, fullTitle);
  upsertMetaTag('meta[property="og:description"]', { property: 'og:description' }, page.description);
  upsertMetaTag('meta[property="og:type"]', { property: 'og:type' }, page.type);
  upsertMetaTag('meta[property="og:url"]', { property: 'og:url' }, page.canonical);
  upsertMetaTag('meta[property="og:image"]', { property: 'og:image' }, imageUrl);
  upsertMetaTag('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME);

  upsertMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
  upsertMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, fullTitle);
  upsertMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, page.description);
  upsertMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl);

  addStructuredData(
    buildStructuredData({
      pathname,
      title: fullTitle,
      description: page.description,
      image: page.image,
      type: page.type,
    }),
  );
};
