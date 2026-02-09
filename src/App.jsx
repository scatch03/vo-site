import contrast from './assets/contrast.svg';
import home from './assets/home.svg';
import services from './assets/services.svg';
import education from './assets/cv.svg';
import portfolio from './assets/portfolio.svg';
import blog from './assets/blog.svg';
import contact from './assets/contact.svg';
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

import { useEffect } from 'react';
import ClientsCarousel from './components/ClientsCarousel';
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


function App() {
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
          <ClientsCarousel />
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
      <div className="side-navigation side-column">
        <div className="switch-theme">
          <a href="#">
            <img className='switch-theme-img' src={contrast} alt="Switch Theme" />
          </a>
        </div>
        <nav>
          <a href="#">
            <div className='nav-item'>
              <span className='nav-item-tooltip'>Home</span>
              <img className='nav-image' src={home} alt="Home" />
            </div>
          </a>
          <a href="#">
            <div className='nav-item'>
              <span className='nav-item-tooltip'>Services</span>
              <img className='nav-image' src={services} alt="Services" />
            </div>
          </a>
          <a href="#">
            <div className='nav-item'>
              <span className='nav-item-tooltip'>CV</span>
              <img className='nav-image' src={education} alt="Curriculum Vitae" />
            </div>
          </a>
           <a href="#">
            <div className='nav-item'>
              <span className='nav-item-tooltip'>Portfolio</span>
              <img className='nav-image' src={portfolio} alt="Portfolio" />
            </div>
          </a>
          <a href="#">
            <div className='nav-item'>
              <span className='nav-item-tooltip'>Blog</span>
              <img className='nav-image' src={blog} alt="Blog" />
            </div>
          </a>
          <a href="#">
            <div className='nav-item'>
              <span className='nav-item-tooltip'>Contacts</span>
              <img className='nav-image' src={contact} alt="Contacts" />
            </div>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default App
