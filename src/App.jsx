import avatar from './assets/avatar.jpg';
import skill from './assets/skill.svg';
import downloadCv from './assets/downloadCv.svg';
import styles from './App.module.scss';
import { cn } from './utils/cn';


import telegram from './assets/icons-telegram.svg';
import linkedin from './assets/icons-linkedin.svg';
import email from './assets/icons-email.svg';
import instagram from './assets/icons-instagram.svg';
import whatsapp from './assets/icons-whatsapp.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from 'react';
import Testimonials from './components/Testimonials/Testimonials';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Education from './components/Education/Education';
import Certification from './components/Certification/Certification';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

const NAV_SECTION_IDS = ['home', 'services', 'testimonials', 'cv', 'portfolio', 'blog', 'contacts'];

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.localStorage.getItem('theme') === 'dark';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarSticky, setIsSidebarSticky] = useState(false);
  const isScrollSpyLockedRef = useRef(false);
  const scrollSpyUnlockTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSidebarSticky(window.scrollY >= 1045);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    window.localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  useEffect(() => {
    const updateActiveSection = () => {
      if (isScrollSpyLockedRef.current) {
        window.clearTimeout(scrollSpyUnlockTimerRef.current);
        scrollSpyUnlockTimerRef.current = window.setTimeout(() => {
          isScrollSpyLockedRef.current = false;
          updateActiveSection();
        }, 140);
        return;
      }

      const viewportOffset = window.innerHeight * 0.3;
      let currentSection = NAV_SECTION_IDS[0];

      for (const sectionId of NAV_SECTION_IDS) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop - viewportOffset <= 0) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.clearTimeout(scrollSpyUnlockTimerRef.current);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleSelectSection = (sectionId, options = {}) => {
    setActiveSection(sectionId);

    if (!options.lockScrollSpy) {
      return;
    }

    isScrollSpyLockedRef.current = true;
    window.clearTimeout(scrollSpyUnlockTimerRef.current);
    scrollSpyUnlockTimerRef.current = window.setTimeout(() => {
      isScrollSpyLockedRef.current = false;
    }, 900);
  };

  return (
    <div className={cn(styles, 'page-layout page-layout--three-column')}>
      <aside className={cn(styles, `profile-sidebar page-layout__side${isSidebarSticky ? ' profile-sidebar--sticky' : ''}`)}>
        <div className={cn(styles, 'profile-sidebar__avatar')}>
          <img className={cn(styles, 'profile-sidebar__avatar-image')} src={avatar} alt="Avatar Photo" />
        </div>
        <h4 className={cn(styles, 'profile-sidebar__name')}>Vorona Oleksandr</h4>
        <h5 className={cn(styles, 'profile-sidebar__job')}>Software Developer</h5>
        <div className={cn(styles, 'profile-sidebar__contacts')}>
          <div className={cn(styles, 'profile-sidebar__contact-item')}>
            <a href='https://www.instagram.com/via.peregrina' target='_blank' rel='noopener noreferrer'>
              <img className={cn(styles, 'profile-sidebar__contact-icon')} src={instagram} alt="Instagram" />
            </a>
          </div>
          <div className={cn(styles, 'profile-sidebar__contact-item')}>
            <a href='https://t.me/ii_jochi' target='_blank' rel='noopener noreferrer'>
              <img className={cn(styles, 'profile-sidebar__contact-icon')} src={telegram} alt="Telegram" />
            </a>
          </div>
          <div className={cn(styles, 'profile-sidebar__contact-item')}>
            <a href='https://www.linkedin.com/in/oleksandr-vorona-51906b234/' target='_blank' rel='noopener noreferrer'>
              <img className={cn(styles, 'profile-sidebar__contact-icon')} src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <div className={cn(styles, 'profile-sidebar__contact-item')}>
            <a href='https://wa.me/380992713289' target='_blank' rel='noopener noreferrer'>
              <img className={cn(styles, 'profile-sidebar__contact-icon')} src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
          <div className={cn(styles, 'profile-sidebar__contact-item')}>
            <a href='mailto:olexandrvorona@gmail.com'>
              <img className={cn(styles, 'profile-sidebar__contact-icon')} src={email} alt="Email" />
            </a>
          </div>
        </div>
        <div className={cn(styles, 'profile-sidebar__about')}>
          <div className={cn(styles, 'profile-sidebar__fact')}>
            <div className={cn(styles, 'profile-sidebar__fact-name')}>Age: </div>
            <div>39</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__fact')}>
            <div className={cn(styles, 'profile-sidebar__fact-name')}>Residence: </div>
            <div>UA</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__fact')}>
            <div className={cn(styles, 'profile-sidebar__fact-name')}>Freelance: </div>
            <div className={cn(styles, 'u-text-success')}>Available</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__fact')}>
            <div className={cn(styles, 'profile-sidebar__fact-name')}>Location: </div>
            <div>Bratislava, SK</div>
          </div>
        </div>
        <div className={cn(styles, 'profile-sidebar__languages')}>
          <h4 className={cn(styles, 'profile-sidebar__section-title')}>Languages</h4>
          <div className={cn(styles, 'profile-sidebar__language-row')}>
            <div className={cn(styles, 'profile-sidebar__language-name')}>Ukrainian</div>
            <div className={cn(styles, 'profile-sidebar__language-score')}>100%</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__meter')}>
            <div className={cn(styles, 'profile-sidebar__meter-fill--100')}></div>
          </div>
          <div className={cn(styles, 'profile-sidebar__language-row')}>
            <div className={cn(styles, 'profile-sidebar__language-name')}>Russian</div>
            <div className={cn(styles, 'profile-sidebar__language-score')}>100%</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__meter')}>
            <div className={cn(styles, 'profile-sidebar__meter-fill--100')}></div>
          </div>
          <div className={cn(styles, 'profile-sidebar__language-row')}>
            <div className={cn(styles, 'profile-sidebar__language-name')}>English</div>
            <div className={cn(styles, 'profile-sidebar__language-score')}>95%</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__meter')}>
            <div className={cn(styles, 'profile-sidebar__meter-fill--95')}></div>
          </div>
          <div className={cn(styles, 'profile-sidebar__language-row')}>
            <div className={cn(styles, 'profile-sidebar__language-name')}>German</div>
            <div className={cn(styles, 'profile-sidebar__language-score')}>80%</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__meter')}>
            <div className={cn(styles, 'profile-sidebar__meter-fill--80')}></div>
          </div>
          <div className={cn(styles, 'profile-sidebar__language-row')}>
            <div className={cn(styles, 'profile-sidebar__language-name')}>Slovak</div>
            <div className={cn(styles, 'profile-sidebar__language-score')}>80%</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__meter')}>
            <div className={cn(styles, 'profile-sidebar__meter-fill--80')}></div>
          </div>
          <div className={cn(styles, 'profile-sidebar__language-row')}>
            <div className={cn(styles, 'profile-sidebar__language-name')}>Estonian</div>
            <div className={cn(styles, 'profile-sidebar__language-score')}>70%</div>
          </div>
          <div className={cn(styles, 'profile-sidebar__meter')}>
            <div className={cn(styles, 'profile-sidebar__meter-fill--70')}></div>
          </div>
        </div>
        <div className={cn(styles, 'profile-sidebar__skills')}>
            <h4 className={cn(styles, 'profile-sidebar__section-title')}>Skills</h4>
            <div className={cn(styles, 'profile-sidebar__skill-row')}>
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Java</div>
              <div className={cn(styles, 'profile-sidebar__skill-score')}>100%</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__meter')}>
              <div className={cn(styles, 'profile-sidebar__meter-fill--100')}></div>
            </div>
            <div className={cn(styles, 'profile-sidebar__skill-row')}>
              <div className={cn(styles, 'profile-sidebar__skill-name')}>JavaScript</div>
              <div className={cn(styles, 'profile-sidebar__skill-score')}>90%</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__meter')}>
              <div className={cn(styles, 'profile-sidebar__meter-fill--90')}></div>
            </div>
            <div className={cn(styles, 'profile-sidebar__skill-row')}>
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Python</div>
              <div className={cn(styles, 'profile-sidebar__skill-score')}>90%</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__meter')}>
              <div className={cn(styles, 'profile-sidebar__meter-fill--90')}></div>
            </div>
            <div className={cn(styles, 'profile-sidebar__skill-row')}>
              <div className={cn(styles, 'profile-sidebar__skill-name')}>HTML</div>
              <div className={cn(styles, 'profile-sidebar__skill-score')}>90%</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__meter')}>
              <div className={cn(styles, 'profile-sidebar__meter-fill--90')}></div>
            </div>
            <div className={cn(styles, 'profile-sidebar__skill-row')}>
              <div className={cn(styles, 'profile-sidebar__skill-name')}>CSS</div>
              <div className={cn(styles, 'profile-sidebar__skill-score')}>90%</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__meter')}>
              <div className={cn(styles, 'profile-sidebar__meter-fill--90')}></div>
            </div>
            <div className={cn(styles, 'profile-sidebar__skill-row')}>
              <div className={cn(styles, 'profile-sidebar__skill-name')}>SQL</div>
              <div className={cn(styles, 'profile-sidebar__skill-score')}>95%</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__meter')}>
              <div className={cn(styles, 'profile-sidebar__meter-fill--95')}></div>
            </div>
        </div>
        <div className={cn(styles, 'profile-sidebar__skills-placeholder')}></div>
        <div className={cn(styles, 'profile-sidebar__extra-skills')}>
            <h4 className={cn(styles, 'profile-sidebar__section-title')}>Extra Skills</h4>
            <div className={cn(styles, 'profile-sidebar__extra-skill')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Spring Framework, Spring Boot</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Hibernate, EclipseLink</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Git, GitHub, GitLab</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Kafka, RabbitMQ</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>MySQL, PostgreSQL, SQLite</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Docker, Docker Compose</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>AWS, Digital Ocean</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Redis, Memcached</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>MongoDB, HBase, Aerospike</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>React, Redux Toolkit</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Data Science, AI/ML</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Maven</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Microservices, REST, gRPC</div>
            </div>
            <div className={cn(styles, 'profile-sidebar__extra-skill u-mt-5')}>
              <img src={skill} alt='Skill Icon' />
              <div className={cn(styles, 'profile-sidebar__skill-name')}>Node.js, TypeScript</div>
            </div>
        </div>
        <div className={cn(styles, 'profile-sidebar__cv')}>
          <a
            className={cn(styles, 'profile-sidebar__cv-button')}
            href="/Oleksandr_Vorona_Resume_2026.pdf"
            download="Oleksandr_Vorona_Resume_2026.pdf"
          >
            Download CV
            <img className={cn(styles, 'profile-sidebar__cv-icon')} src={downloadCv} alt="Download CV" />
          </a>
       </div>
       <div className={cn(styles, 'profile-sidebar__placeholder')}></div>
      </aside>
      <div className={cn(styles, 'page-layout__main')}>
        <Hero />
        <main>
          <Services />
          <Pricing />
          <Testimonials />
          <Education />
          <Certification />
          <Experience />
          <Portfolio /> 
          <Blog />
          <Contact />         
          <Location />
          <Projects />
        </main>
        <Footer />  
      </div>
      <Navigation
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => setIsDarkTheme((prevTheme) => !prevTheme)}
      />
    </div>
  )
}

export default App
