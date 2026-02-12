import styles from './Services.module.scss';
import { cn } from '../../utils/cn';

const serviceCards = [
  {
    title: 'Web Site Development',
    text: 'Corporate websites, landing pages, blogs, and e-commerce storefronts',
    iconKey: 'website',
  },
  {
    title: 'Web Application Development',
    text: 'Interactive SPA applications, admin dashboards, and client portals',
    iconKey: 'webApp',
  },
  {
    title: 'Backend Development And Optimization',
    text: 'REST APIs, microservices, performance tuning, and scalability improvements',
    iconKey: 'backend',
  },
  {
    title: 'Database Develoment And Query Optimization',
    text: 'Schema design, indexing strategy, query tuning, and data consistency',
    iconKey: 'database',
  },
  {
    title: 'AI/ML Develoment',
    text: 'Model integration, recommendation logic, and AI-powered automation',
    iconKey: 'ai',
  },
  {
    title: 'Data Science Research',
    text: 'Data exploration, A/B experiment analysis, forecasting, and insights',
    iconKey: 'dataScience',
  },
];

const iconByKey = {
  website: (
    <svg className={cn(styles, 'services__icon-svg')} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="10" width="48" height="32" rx="4" />
      <path d="M8 18H56" />
      <path d="M32 42V54" />
      <path d="M26 54H38" />
      <circle cx="14" cy="14" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="19" cy="14" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  webApp: (
    <svg className={cn(styles, 'services__icon-svg')} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" rx="6" />
      <path d="M8 18H56" />
      <rect x="15" y="24" width="14" height="10" rx="2" />
      <rect x="35" y="24" width="14" height="10" rx="2" />
      <rect x="15" y="38" width="14" height="10" rx="2" />
      <rect x="35" y="38" width="14" height="10" rx="2" />
    </svg>
  ),
  backend: (
    <svg className={cn(styles, 'services__icon-svg')} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="10" width="44" height="12" rx="3" />
      <rect x="10" y="26" width="44" height="12" rx="3" />
      <rect x="10" y="42" width="44" height="12" rx="3" />
      <circle cx="18" cy="16" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="18" cy="32" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="18" cy="48" r="1.7" fill="currentColor" stroke="none" />
      <path d="M25 16H46" />
      <path d="M25 32H46" />
      <path d="M25 48H46" />
    </svg>
  ),
  database: (
    <svg className={cn(styles, 'services__icon-svg')} viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="14" rx="18" ry="6" />
      <path d="M14 14V44C14 47.3 22.1 50 32 50C41.9 50 50 47.3 50 44V14" />
      <path d="M14 24C14 27.3 22.1 30 32 30C41.9 30 50 27.3 50 24" />
      <path d="M14 34C14 37.3 22.1 40 32 40C41.9 40 50 37.3 50 34" />
    </svg>
  ),
  ai: (
    <svg className={cn(styles, 'services__icon-svg')} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M20 16L32 22L44 16" />
      <path d="M14 32H50" />
      <path d="M20 48L32 42L44 48" />
      <path d="M20 20V44" />
      <path d="M44 20V44" />
      <circle cx="20" cy="16" r="4" />
      <circle cx="32" cy="22" r="4" />
      <circle cx="44" cy="16" r="4" />
      <circle cx="14" cy="32" r="4" />
      <circle cx="32" cy="32" r="4" />
      <circle cx="50" cy="32" r="4" />
      <circle cx="20" cy="48" r="4" />
      <circle cx="32" cy="42" r="4" />
      <circle cx="44" cy="48" r="4" />
    </svg>
  ),
  dataScience: (
    <svg className={cn(styles, 'services__icon-svg')} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 50H54" />
      <path d="M14 50V20" />
      <rect x="20" y="34" width="6" height="16" rx="1.5" />
      <rect x="30" y="28" width="6" height="22" rx="1.5" />
      <rect x="40" y="22" width="6" height="28" rx="1.5" />
      <circle cx="48" cy="18" r="7" />
      <path d="M53 23L58 28" />
    </svg>
  ),
};

const Services = () => {
  return (
    <section id='services' className={cn(styles, 'services')}>
      <h3 className={cn(styles, 'services__title')}>My Services</h3>
      <p className={cn(styles, 'services__description')}>
        I deliver end-to-end software engineering services, from architecture and backend development to performance optimization and production support for high-load systems.
      </p>
      <div className={cn(styles, 'services__grid')}>
        {serviceCards.map(({ title, text, iconKey }) => (
          <div key={title} className={cn(styles, 'services__card')}>
            <div className={cn(styles, 'services__icon')}>
              {iconByKey[iconKey]}
            </div>
            <h4 className={cn(styles, 'services__card-title')}>{title}</h4>
            <p className={cn(styles, 'services__card-text')}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
