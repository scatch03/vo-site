import contrast from '../../assets/contrast.svg';
import home from '../../assets/home.svg';
import services from '../../assets/services.svg';
import starNav from '../../assets/star-nav.svg';
import education from '../../assets/cv.svg';
import portfolio from '../../assets/portfolio.svg';
import blog from '../../assets/blog.svg';
import contact from '../../assets/contact.svg';
import styles from './Navigation.module.scss';
import { cn } from '../../utils/cn';


const navItems = [
  { sectionId: 'home', label: 'Home', icon: home, alt: 'Home' },
  { sectionId: 'services', label: 'Services', icon: services, alt: 'Services' },
  { sectionId: 'testimonials', label: 'Testimonials', icon: starNav, alt: 'Testimonials' },
  { sectionId: 'cv', label: 'CV', icon: education, alt: 'Curriculum Vitae' },
  { sectionId: 'portfolio', label: 'Portfolio', icon: portfolio, alt: 'Portfolio' },
  { sectionId: 'blog', label: 'Blog', icon: blog, alt: 'Blog' },
  { sectionId: 'contacts', label: 'Contacts', icon: contact, alt: 'Contacts' },
];

function Navigation({ activeSection, isDarkTheme, onSelectSection, onToggleTheme }) {
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    onSelectSection(sectionId, { lockScrollSpy: true });
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={cn(styles, 'side-nav')}>
      <div className={cn(styles, 'side-nav__theme-switch')} onClick={onToggleTheme}>
        <button
          type="button"
          className={cn(styles, 'side-nav__theme-button')}
          aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <img
            className={cn(styles, `side-nav__theme-icon${isDarkTheme ? ' side-nav__theme-icon--active' : ''}`)}
            src={contrast}
            alt="Switch Theme"
          />
          <span className={cn(styles, 'side-nav__theme-tooltip')}>
            {isDarkTheme ? 'Light mode' : 'Dark mode'}
          </span>
        </button>
      </div>
      <nav>
        {navItems.map(({ sectionId, label, icon, alt }) => (
          <a
            key={sectionId}
            href={`#${sectionId}`}
            onClick={(event) => handleNavClick(event, sectionId)}
            aria-current={activeSection === sectionId ? 'location' : undefined}
          >
            <div className={cn(styles, `side-nav__item${activeSection === sectionId ? ' side-nav__item--active' : ''}`)}>
              <span className={cn(styles, 'side-nav__tooltip')}>{label}</span>
              <img className={cn(styles, 'side-nav__icon')} src={icon} alt={alt} />
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
