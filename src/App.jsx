import avatar from './assets/avatar.jpg';
import skill from './assets/skill.svg';
import downloadCv from './assets/downloadCv.svg';

import telegram from './assets/icons-telegram.svg';
import linkedin from './assets/icons-linkedin.svg';
import email from './assets/icons-email.svg';
import instagram from './assets/icons-instagram.svg';
import whatsapp from './assets/icons-whatsapp.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from 'react';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Education from './components/Education';
import Certification from './components/Certification';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Location from './components/Location';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const NAV_SECTION_IDS = ['home', 'services', 'cv', 'portfolio', 'blog', 'contacts'];

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.localStorage.getItem('theme') === 'dark';
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const el = document.querySelector('.profile-sidebar');
    if (!el) return;
    const handleScroll = () => {
      if (window.scrollY >= 1045) {
        el.classList.add('profile-sidebar--sticky');
      } else {
        el.classList.remove('profile-sidebar--sticky');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    window.localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  useEffect(() => {
    const updateActiveSection = () => {
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
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="page-layout page-layout--three-column">
      <aside className="profile-sidebar page-layout__side">
        <div className='profile-sidebar__avatar'>
          <img className='profile-sidebar__avatar-image' src={avatar} alt="Avatar Photo" />
        </div>
        <h4 className='profile-sidebar__name'>Vorona Oleksandr</h4>
        <h5 className='profile-sidebar__job'>Software Developer</h5>
        <div className='profile-sidebar__contacts'>
          <div className='profile-sidebar__contact-item'>
            <a href='#'>
              <img className='profile-sidebar__contact-icon' src={instagram} alt="Instagram" />
            </a>
          </div>
          <div className='profile-sidebar__contact-item'>
            <a href='#'>
              <img className='profile-sidebar__contact-icon' src={telegram} alt="Telegram" />
            </a>
          </div>
          <div className='profile-sidebar__contact-item'>
            <a href='#'>
              <img className='profile-sidebar__contact-icon' src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <div className='profile-sidebar__contact-item'>
            <a href='#'>
              <img className='profile-sidebar__contact-icon' src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
          <div className='profile-sidebar__contact-item'>
            <a href='#'>
              <img className='profile-sidebar__contact-icon' src={email} alt="Email" />
            </a>
          </div>
        </div>
        <div className='profile-sidebar__about'>
          <div className='profile-sidebar__fact'>
            <div className='profile-sidebar__fact-name'>Age: </div>
            <div>39</div>
          </div>
          <div className='profile-sidebar__fact'>
            <div className='profile-sidebar__fact-name'>Residence: </div>
            <div>UA</div>
          </div>
          <div className='profile-sidebar__fact'>
            <div className='profile-sidebar__fact-name'>Freelance: </div>
            <div className="u-text-success">Available</div>
          </div>
          <div className='profile-sidebar__fact'>
            <div className='profile-sidebar__fact-name'>Location: </div>
            <div>Bratislava, SK</div>
          </div>
        </div>
        <div className='profile-sidebar__languages'>
          <h4 className='profile-sidebar__section-title'>Languages</h4>
          <div className='profile-sidebar__language-row'>
            <div className='profile-sidebar__language-name'>Ukrainian</div>
            <div className='profile-sidebar__language-score'>100%</div>
          </div>
          <div className='profile-sidebar__meter'>
            <div className='profile-sidebar__meter-fill--100'></div>
          </div>
          <div className='profile-sidebar__language-row'>
            <div className='profile-sidebar__language-name'>Russian</div>
            <div className='profile-sidebar__language-score'>100%</div>
          </div>
          <div className='profile-sidebar__meter'>
            <div className='profile-sidebar__meter-fill--100'></div>
          </div>
          <div className='profile-sidebar__language-row'>
            <div className='profile-sidebar__language-name'>English</div>
            <div className='profile-sidebar__language-score'>95%</div>
          </div>
          <div className='profile-sidebar__meter'>
            <div className='profile-sidebar__meter-fill--95'></div>
          </div>
          <div className='profile-sidebar__language-row'>
            <div className='profile-sidebar__language-name'>German</div>
            <div className='profile-sidebar__language-score'>80%</div>
          </div>
          <div className='profile-sidebar__meter'>
            <div className='profile-sidebar__meter-fill--80'></div>
          </div>
          <div className='profile-sidebar__language-row'>
            <div className='profile-sidebar__language-name'>Slovak</div>
            <div className='profile-sidebar__language-score'>80%</div>
          </div>
          <div className='profile-sidebar__meter'>
            <div className='profile-sidebar__meter-fill--80'></div>
          </div>
          <div className='profile-sidebar__language-row'>
            <div className='profile-sidebar__language-name'>Estonian</div>
            <div className='profile-sidebar__language-score'>70%</div>
          </div>
          <div className='profile-sidebar__meter'>
            <div className='profile-sidebar__meter-fill--70'></div>
          </div>
        </div>
        <div className='profile-sidebar__skills'>
            <h4 className='profile-sidebar__section-title'>Skills</h4>
            <div className='profile-sidebar__skill-row'>
              <div className='profile-sidebar__skill-name'>Java</div>
              <div className='profile-sidebar__skill-score'>100%</div>
            </div>
            <div className='profile-sidebar__meter'>
              <div className='profile-sidebar__meter-fill--100'></div>
            </div>
            <div className='profile-sidebar__skill-row'>
              <div className='profile-sidebar__skill-name'>JavaScript</div>
              <div className='profile-sidebar__skill-score'>90%</div>
            </div>
            <div className='profile-sidebar__meter'>
              <div className='profile-sidebar__meter-fill--90'></div>
            </div>
            <div className='profile-sidebar__skill-row'>
              <div className='profile-sidebar__skill-name'>Python</div>
              <div className='profile-sidebar__skill-score'>90%</div>
            </div>
            <div className='profile-sidebar__meter'>
              <div className='profile-sidebar__meter-fill--90'></div>
            </div>
            <div className='profile-sidebar__skill-row'>
              <div className='profile-sidebar__skill-name'>HTML</div>
              <div className='profile-sidebar__skill-score'>90%</div>
            </div>
            <div className='profile-sidebar__meter'>
              <div className='profile-sidebar__meter-fill--90'></div>
            </div>
            <div className='profile-sidebar__skill-row'>
              <div className='profile-sidebar__skill-name'>CSS</div>
              <div className='profile-sidebar__skill-score'>90%</div>
            </div>
            <div className='profile-sidebar__meter'>
              <div className='profile-sidebar__meter-fill--90'></div>
            </div>
            <div className='profile-sidebar__skill-row'>
              <div className='profile-sidebar__skill-name'>SQL</div>
              <div className='profile-sidebar__skill-score'>95%</div>
            </div>
            <div className='profile-sidebar__meter'>
              <div className='profile-sidebar__meter-fill--95'></div>
            </div>
        </div>
        <div className='profile-sidebar__skills-placeholder'></div>
        <div className='profile-sidebar__extra-skills'>
            <h4 className='profile-sidebar__section-title'>Extra Skills</h4>
            <div className='profile-sidebar__extra-skill'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Spring Framework, Spring Boot</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Hibernate, EclipseLink</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Git, GitHub, GitLab</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Kafka, RabbitMQ</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>MySQL, PostgreSQL, SQLite</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Docker, Docker Compose</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>AWS, Digital Ocean</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Redis, Memcached</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>MongoDB, HBase, Aerospike</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>React, Redux Toolkit</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Data Science, AI/ML</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Maven</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Microservices, REST, gRPC</div>
            </div>
            <div className='profile-sidebar__extra-skill u-mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='profile-sidebar__skill-name'>Node.js, TypeScript</div>
            </div>
        </div>
        <div className='profile-sidebar__cv'>
          <button className='profile-sidebar__cv-button'>
            Download CV
            <img className='profile-sidebar__cv-icon' src={downloadCv} alt="Download CV" />
          </button>
       </div>
       <div className='profile-sidebar__placeholder'></div>
      </aside>
      <div className="page-layout__main">
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
        onSelectSection={setActiveSection}
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => setIsDarkTheme((prevTheme) => !prevTheme)}
      />
    </div>
  )
}

export default App
