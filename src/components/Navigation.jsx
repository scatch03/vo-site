import contrast from '../assets/contrast.svg';
import home from '../assets/home.svg';
import services from '../assets/services.svg';
import education from '../assets/cv.svg';
import portfolio from '../assets/portfolio.svg';
import blog from '../assets/blog.svg';
import contact from '../assets/contact.svg';

const navItems = [
  { sectionId: 'home', label: 'Home', icon: home, alt: 'Home' },
  { sectionId: 'services', label: 'Services', icon: services, alt: 'Services' },
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

    onSelectSection(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="side-navigation side-column">
      <div className="switch-theme" onClick={onToggleTheme}>
        <button
          type="button"
          className="switch-theme-button"
          aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <img
            className={`switch-theme-img${isDarkTheme ? ' switch-theme-img-active' : ''}`}
            src={contrast}
            alt="Switch Theme"
          />
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
            <div className={`nav-item${activeSection === sectionId ? ' nav-item-active' : ''}`}>
              <span className='nav-item-tooltip'>{label}</span>
              <img className='nav-image' src={icon} alt={alt} />
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
