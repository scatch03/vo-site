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
    const el = document.querySelector('.short-info');
    if (!el) return;
    const handleScroll = () => {
      if (window.scrollY >= 1045) {
        el.classList.add('is-sticky');
      } else {
        el.classList.remove('is-sticky');
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
    <div className="container three-column-grid">
      <aside className="short-info side-column">
        <div className='info-avatar'>
          <img className='avatar-img' src={avatar} alt="Avatar Photo" />
        </div>
        <h4 className='avatar-name'>Vorona Oleksandr</h4>
        <h5 className='avatar-job'>Software Developer</h5>
        <div className='quick-contacts'>
          <div className='contact-icon-wrapper'>
            <a href='#'>
              <img className='contact-icon' src={instagram} alt="Instagram" />
            </a>
          </div>
          <div className='contact-icon-wrapper'>
            <a href='#'>
              <img className='contact-icon' src={telegram} alt="Telegram" />
            </a>
          </div>
          <div className='contact-icon-wrapper'>
            <a href='#'>
              <img className='contact-icon' src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <div className='contact-icon-wrapper'>
            <a href='#'>
              <img className='contact-icon' src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
          <div className='contact-icon-wrapper'>
            <a href='#'>
              <img className='contact-icon' src={email} alt="Email" />
            </a>
          </div>
        </div>
        <div className='about-me'>
          <div className='fact'>
            <div className='fact-name'>Age: </div>
            <div>39</div>
          </div>
          <div className='fact'>
            <div className='fact-name'>Residence: </div>
            <div>UA</div>
          </div>
          <div className='fact'>
            <div className='fact-name'>Freelance: </div>
            <div className="text-green">Available</div>
          </div>
          <div className='fact'>
            <div className='fact-name'>Location: </div>
            <div>Bratislava, SK</div>
          </div>
        </div>
        <div className='languages'>
          <h4 className='languages-title'>Languages</h4>
          <div className='language-info'>
            <div className='language-name'>Ukrainian</div>
            <div className='language-score'>100%</div>
          </div>
          <div className='bar'>
            <div className='bar-inner-100'></div>
          </div>
          <div className='language-info'>
            <div className='language-name'>Russian</div>
            <div className='language-score'>100%</div>
          </div>
          <div className='bar'>
            <div className='bar-inner-100'></div>
          </div>
          <div className='language-info'>
            <div className='language-name'>English</div>
            <div className='language-score'>95%</div>
          </div>
          <div className='bar'>
            <div className='bar-inner-95'></div>
          </div>
          <div className='language-info'>
            <div className='language-name'>German</div>
            <div className='language-score'>80%</div>
          </div>
          <div className='bar'>
            <div className='bar-inner-80'></div>
          </div>
          <div className='language-info'>
            <div className='language-name'>Slovak</div>
            <div className='language-score'>80%</div>
          </div>
          <div className='bar'>
            <div className='bar-inner-80'></div>
          </div>
          <div className='language-info'>
            <div className='language-name'>Estonian</div>
            <div className='language-score'>70%</div>
          </div>
          <div className='bar'>
            <div className='bar-inner-70'></div>
          </div>
        </div>
        <div className='skills'>
            <h4 className='skills-title'>Skills</h4>
            <div className='skills-info'>
              <div className='skill-name'>Java</div>
              <div className='skill-score'>100%</div>
            </div>
            <div className='bar'>
              <div className='bar-inner-100'></div>
            </div>
            <div className='skills-info'>
              <div className='skill-name'>JavaScript</div>
              <div className='skill-score'>90%</div>
            </div>
            <div className='bar'>
              <div className='bar-inner-90'></div>
            </div>
            <div className='skills-info'>
              <div className='skill-name'>Python</div>
              <div className='skill-score'>90%</div>
            </div>
            <div className='bar'>
              <div className='bar-inner-90'></div>
            </div>
            <div className='skills-info'>
              <div className='skill-name'>HTML</div>
              <div className='skill-score'>90%</div>
            </div>
            <div className='bar'>
              <div className='bar-inner-90'></div>
            </div>
            <div className='skills-info'>
              <div className='skill-name'>CSS</div>
              <div className='skill-score'>90%</div>
            </div>
            <div className='bar'>
              <div className='bar-inner-90'></div>
            </div>
            <div className='skills-info'>
              <div className='skill-name'>SQL</div>
              <div className='skill-score'>95%</div>
            </div>
            <div className='bar'>
              <div className='bar-inner-95'></div>
            </div>
        </div>
        <div className='skills-placeholder'></div>
        <div className='extra-skills'>
            <h4 className='skills-title'>Extra Skills</h4>
            <div className='skill-info'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Spring Framework, Spring Boot</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Hibernate, EclipseLink</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Git, GitHub, GitLab</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Kafka, RabbitMQ</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>MySQL, PostgreSQL, SQLite</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Docker, Docker Compose</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>AWS, Digital Ocean</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Redis, Memcached</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>MongoDB, HBase, Aerospike</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>React, Redux Toolkit</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Data Science, AI/ML</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Maven</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Microservices, REST, gRPC</div>
            </div>
            <div className='skill-info mt-5'>
              <img src={skill} alt='Skill Icon' />
              <div className='skill-name'>Node.js, TypeScript</div>
            </div>
        </div>
        <div className='cv'>
          <button className='cv-button'>
            Download CV
            <img className='cv-icon' src={downloadCv} alt="Download CV" />
          </button>
       </div>
       <div className='short-info-placeholder'></div>
      </aside>
      <div className="main-content">
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
