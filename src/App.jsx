import photo from './assets/me3.png';
import arrowRight from './assets/rarrow.svg';
import triangle from './assets/triangle.svg';
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
import copyright from './assets/copyright.svg';
import checked from './assets/check.svg';
import close from './assets/close.svg';
import star from './assets/star.svg';
import upml from './assets/upml.png';
import knu from './assets/knu.png';
import kpi from './assets/kpi.png';
import khpi from './assets/khpi.png';
import ad from './assets/ad.png';
import ex from './assets/ex.png';
import dsp from './assets/dsp.png';
import mobile from './assets/mobile.svg';
import emailme from './assets/emailme.svg';
import location from './assets/location.svg';
import epom_adserver from './assets/epom_adserver.png';
import epom_rtb from './assets/epom_rtb.png';
import blog1 from './assets/blog1.jpg'
import blog2 from './assets/blog2.jpg'
import blog3 from './assets/blog3.jpg'
import gt from './assets/gt.svg'
import oca from './assets/oca.png'
import ccna from './assets/ccna.png'
import hillel from './assets/hillel.jpeg'

import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.jpg'
import p6 from './assets/p6.jpg'

import telegram from './assets/icons-telegram.svg';
import linkedin from './assets/icons-linkedin.svg';
import email from './assets/icons-email.svg';
import instagram from './assets/icons-instagram.svg';
import whatsapp from './assets/icons-whatsapp.svg';

import illustration from './assets/illustration.svg';
import coding from './assets/coding.svg';
import microphone from './assets/microphone.svg';
import photographer from './assets/photographer.svg'; 
import gamedevelopment from './assets/game-development.svg';
import ads from './assets/ads.svg';
import testimonialsAvatar1 from './assets/testimonialsAvatar1.png';
import testimonialsAvatar2 from './assets/testimonialsAvatar2.png';
import testimonialsAvatar3 from './assets/testimonialsAvatar3.png';

import { useEffect } from 'react';

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
        <header className="header">
            <div className="circle-image-yellow-1"></div>
            <div className="circle-image-yellow-2"></div>
            <div className="circle-image-green-1"></div>
            <div className="circle-image-green-2"></div>
            <div className="square-image-blue-1"></div>
            <div className="square-image-yellow-1"></div>
            <img src={triangle} className="triangle-equilateral"></img>

            <div className="header-text">
              <h1 className='header-title'>I'm Oleksandr Vorona <br/>
                <span className="developer-title">Software</span> Developer
              </h1>
              <div className="header-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.      
              </div>
              <button className='action-button'>
                Get in touch <img src={arrowRight} alt="arrow right" />
              </button>
            </div>
            <img className="header-image" src={photo} alt="Developer photo" />
        </header>
        <main>
          <section className='my-services'>
            <h3 className='services-title'>My Services</h3>
            <p className='services-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='services-grid'>
              <div className='service-card'>
                <img className='service-image' src={coding} alt="Development" />
                <h4 className='service-title'>Web Development</h4>
                <p className='service-text'>Sites, Landing Pages, Blogs, E-Commerce</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={illustration} alt="Design" />
                <h4 className='service-title'>UI/UX Design</h4>
                <p className='service-text'>Websites, Mobile Apps</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={microphone} alt="Design" />
                <h4 className='service-title'>Sound Design</h4>
                <p className='service-text'>Voice Overs, Beat Making</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={gamedevelopment} alt="Design" />
                <h4 className='service-title'>Game Design</h4>
                <p className='service-text'>Character Design, Props & Objects</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={photographer} alt="Design" />
                <h4 className='service-title'>Photography</h4>
                <p className='service-text'>Portraits, Product Photography</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={ads} alt="Design" />
                <h4 className='service-title'>Advertising</h4>
                <p className='service-text'>Ads on Instagram, Facebook and TikTok</p>
              </div>
            </div>
          </section>
          <section className='pricing'>
            <h3 className='pricing-title'>Price Plans</h3>
            <p className='pricing-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='pricing-grid'>
              <div className='pricing-card'>
                <h4 className='pricing-plan'>Basic</h4>
                <div className='pricing-cost'>$25.00</div>
                <p className='pricing-text'>
                  Small tasks and quick improvements. Suitable for personal projects and small websites.
                </p>
                <ul className='pricing-features'>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>Feature and module implementation</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>System architecture design</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>Performance optimization</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>Database design and optimization</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>Automated testing and code quality</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>High-load and distributed systems</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>Production support and ownership</p>
                  </li>
                </ul>
               <button className='select-plan'>
                Order Now
               </button>
              </div>
              <div className='pricing-card most-popular'>
                <h4 className='pricing-plan'>Standard</h4>
                <div className='pricing-cost'>$35.00</div>
                <p className='pricing-text'>
                  Full-feature development and product growth. Ideal for small to medium-sized projects and businesses.
                </p>
                <ul className='pricing-features'>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Feature and module implementation</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>System architecture design</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Performance optimization</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Database design and optimization</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Automated testing and code quality</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>High-load and distributed systems</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='cross' src={close} alt='Cross Icon' />  
                    <p className='dimmed'>Production support and ownership</p>
                  </li>
                </ul>
                <button className='select-plan selected'>
                  Order Now
                </button>
              </div>
              <div className='pricing-card'>
                <h4 className='pricing-plan'>Extended</h4>
                <div className='pricing-cost'>$50.00</div>
                <p className='pricing-text'>
                  Complex systems, high load, and end-to-end responsibility. Perfect for larger projects and enterprises.
                </p>
                <ul className='pricing-features'>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Feature and module implementation</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>System architecture design</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Performance optimization</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Database design and optimization</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>Automated testing and code quality</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p>High-load and distributed systems</p>
                  </li>
                  <li className='pricing-feature'>
                    <img className='check' src={checked} alt='Cross Icon' />  
                    <p >Production support and ownership</p>
                  </li>
                </ul>
                <button className='select-plan'>
                  Order Now
                </button>
              </div>
            </div>
          </section>
          <section className='testimonials'>
            <h3 className='testimonials-title'>Recommendations</h3>
            <p className='testimonials-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='testimonials-grid'>
              <div className='testimonials-card'>
                <ul className='testimonials-rating'>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                </ul>
                <h5 className='testimonial-title'>
                  Great Quality!
                </h5>
                <p className='testimonials-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <div className='testimonials-author'>
                  <img className='author-avatar' src={testimonialsAvatar1} alt='Author Avatar' />
                  <div>
                    <div className='author-name'>John Doe</div>
                    <div className='author-job'>CEO, Company</div>
                  </div>
                </div>
              </div>
              <div className='testimonials-card'>
                <ul className='testimonials-rating'>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                </ul>
                <h5 className='testimonial-title'>
                  Amazing work!
                </h5>
                <p className='testimonials-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <div className='testimonials-author'>
                  <img className='author-avatar' src={testimonialsAvatar2} alt='Author Avatar' />
                  <div>
                    <div className='author-name'>Tiana Philips</div>
                    <div className='author-job'>Photographer</div>
                  </div>
                </div>
              </div>
              <div className='testimonials-card'>
                <ul className='testimonials-rating'>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                </ul>
                <h5 className='testimonial-title'>
                  Great Quality!
                </h5>
                <p className='testimonials-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <div className='testimonials-author'>
                  <img className='author-avatar' src={testimonialsAvatar3} alt='Author Avatar' />
                  <div>
                    <div className='author-name'>Talan Westervelt</div>
                    <div className='author-job'>Business Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='education'>
            <h3 className='education-title'>Education</h3>
            <p className='education-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='education-list'>   
              <div className='education-card'>
                <div className='education-institution'>
                  <div className='institution-name'>
                    <a className='institution-link' href="http://upml.knu.ua/" target="_blank" rel="noopener noreferrer">
                      <img className='institution-logo' src={upml} alt='UPML Logo' />
                      Ukrainian Physics and Mathematics Lyceum
                    </a>
                  </div> 
                  <div className='education-detail'> Student
                     <span className='education-years'>Sep 2002 - Jun 2005</span>
                  </div>
                </div>
                <div className='education-text'>
                  <h5 className='education-text-title'>Certificate of Secondary Education</h5>
                  <p className='education-text-description'>
                    Highly selective secondary school affiliated with Taras Shevchenko National University of Kyiv.
                    It specializes in advanced education in mathematics, physics, and computer science for gifted students.
                    The lyceum prepares students for national and international academic competitions as well as top universities worldwide.
                    Its graduates are well known for strong analytical skills and a solid foundation in STEM disciplines.                  </p>
                </div>
              </div>
              <div className='education-card'>
                <div className='education-institution'>
                  <div className='institution-name'>
                    <a className='institution-link' href="https://knu.ua/en/" target="_blank" rel="noopener noreferrer">
                      <img className='institution-logo' src={knu} alt='KNU Logo' />
                      National Taras Shevchenko University of Kyiv
                    </a>
                  </div> 
                  <div className='education-detail'> Student
                     <span className='education-years'>Sep 2005 - Jun 2009</span>
                  </div>
                </div>
                <div className='education-text'>
                  <h5 className='education-text-title'>BSc of Applied Physics</h5>
                  <p className='education-text-description'>
                    The bachelor's program at the Faculty of Radiophysics, Electronics and Computer Systems of Taras Shevchenko National University of Kyiv provides a strong foundation in physics, mathematics, and engineering.
                    Students study core subjects such as electronics, radiophysics, signal processing, and computer systems.
                    The program emphasizes analytical thinking, problem-solving, and practical laboratory work.
                    Graduates are well prepared for careers in IT, telecommunications, electronics, or for continuing studies at the master's level.
                  </p>
                </div>
              </div>
              <div className='education-card'>
                <div className='education-institution'>
                  <div className='institution-name'>
                    <a className='institution-link' href="https://knu.ua/en/" target="_blank" rel="noopener noreferrer">
                      <img className='institution-logo' src={knu} alt='KNU Logo' />
                      National Taras Shevchenko University of Kyiv
                    </a>
                  </div> 
                  <div className='education-detail'> Student
                     <span className='education-years'>Sep 2009 - Jun 2011</span>
                  </div>
                </div>
                <div className='education-text'>
                  <h5 className='education-text-title'>
                    MSc of Radiophysics and Electronics
                    <span className='honors'>with honors</span>
                  </h5>
                  <p className='education-text-description'>
                    The master's program in Automation of Scientific Research at the Faculty of Radiophysics, Electronics and Computer Systems of Taras Shevchenko National University of Kyiv 
                    focuses on applying modern computational and engineering methods to scientific investigations.
                    It combines advanced training in programming, data processing, instrumentation, and control systems.
                    Students learn to design software and hardware solutions for experiment automation and data analysis.
                    Graduates are prepared for careers in research, high-tech industries, data-driven engineering, and applied IT.
                  </p>
                </div>
              </div>
              <div className='education-card'>
                <div className='education-institution'>
                  <div className='institution-name'>
                    <a className='institution-link' href="https://kpi.ua/en/" target="_blank" rel="noopener noreferrer">
                      <img className='institution-logo' src={kpi} alt='KPI Logo' />
                      National Technical University of Ukraine
                      "Igor Sikorsky Kyiv Polytechnic Institute"
                    </a>
                  </div> 
                  <div className='education-detail'> Student
                     <span className='education-years'>Sep 2022 - Jun 2025</span>
                  </div>
                </div>
                <div className='education-text'>
                  <h5 className='education-text-title'>
                    BSc of Data Science and Artificial Intelligence
                  </h5>
                  <p className='education-text-description'>
                    The master's program in Computer Science (AI and Data Science) at the National Kyiv Polytechnic Institute provides advanced training in artificial intelligence, machine learning, and data science.
                    Students gain expertise in programming, statistical analysis, data visualization, and algorithm development.
                    The curriculum emphasizes both theoretical foundations and practical applications in AI and data-driven solutions.
                    Graduates are well-prepared for careers in AI research, data science, software engineering, and related high-tech fields.
                  </p>
                </div>
              </div>
              <div className='education-card'>
                <div className='education-institution'>
                  <div className='institution-name'>
                    <a className='institution-link' href="https://www.kpi.kharkov.ua/eng/" target="_blank" rel="noopener noreferrer">
                      <img className='institution-logo' src={khpi} alt='KHPI Logo' />
                      National Technical University of Ukraine
                      "Kharkiv Polytechnic Institute" 
                    </a>
                  </div> 
                  <div className='education-detail'> Student
                     <span className='education-years'>Sep 2023 - Dec 2024</span>
                  </div>
                </div>
                <div className='education-text'>
                  <h5 className='education-text-title'>
                    MSc of Software Engineering
                    <p className='honors'>with honors</p>
                  </h5>
                  <p className='education-text-description'>
                    The master's program in Computer Science (Software Engineering) at the National Technical University of Ukraine "Kharkiv Polytechnic Institute" provides 
                    advanced training in software engineering principles, system design, and development methodologies.
                    Students gain expertise in programming languages, software architecture, testing, and project management.
                    The curriculum emphasizes both theoretical foundations and practical applications in software engineering and system development.
                    Graduates are well-prepared for careers in AI research, data science, software engineering, and related high-tech fields.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='certification'>
            <h3 className='certification-title'>Certifications and Courses</h3>
            <p className='certification-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='certification-list'>
              <div className='certification-card'>
                <div className='certification-institution'>
                  <div className='certification-name'>
                    Oracle Certified Java SE8 Associate 
                    <img className='certification-logo' src={oca} alt='OCA Logo' />
                  </div> 
                </div>
                <div className='certification-text'>
                  <p className='certification-text-description'>
                  Certification validates solid knowledge of the Java programming language, including core syntax, object-oriented concepts, and essential standard APIs. 
                  It demonstrates the ability to design, write, compile, and debug Java SE 8 applications using widely adopted language features. 
                  The certification confirms practical proficiency in Java fundamentals relevant to real-world development tasks.
                  </p>
                </div>
              </div>
              <div className='certification-card'>
                <div className='certification-institution'>
                  <div className='certification-name'>
                    CCNA Routing & Switching 
                    <img className='certification-logo' src={ccna} alt='CCNA Logo' />
                  </div> 
                </div>
                <div className='certification-text'>
                  <p className='certification-text-description'>
                    Certification tests practical knowledge of networking fundamentals, including IP addressing, routing and switching, network security, and basic automation concepts.
                    It demonstrates the ability to configure, operate, and troubleshoot small to medium-sized networks using Cisco technologies. 
                    The certification is widely recognized as a strong indicator of hands-on networking competence across various enterprise environments.
                  </p>
                </div>
              </div>
              <div className='certification-card'>
                <div className='certification-institution'>
                  <div className='certification-name'>
                    <a href="https://certificate.ithillel.ua/view/28721746" target='blank'>
                      Front End Development 
                    </a>
                    <img className='certification-logo rounded' src={hillel} alt='Hillel Logo' />
                  </div> 
                </div>
                <div className='certification-text'>
                  <p className='certification-text-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque itaque numquam commodi saepe possimus debitis laboriosam laudantium delectus. Sit debitis illum laborum dignissimos officiis! 
                  </p>
                </div>
              </div>
              <div className='certification-card'>
                <div className='certification-institution'>
                  <div className='certification-name'>
                    <a href="https://certificate.ithillel.ua/view/86345058" target='blank'>
                      React Application Develoment
                    </a>
                    <img className='certification-logo rounded' src={hillel} alt='Hillel Logo' />
                  </div> 
                </div>
                <div className='certification-text'>
                  <p className='certification-text-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque itaque numquam commodi saepe possimus debitis laboriosam laudantium delectus. Sit debitis illum laborum dignissimos officiis! 
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='experience'>
            <h3 className='experience-title'>Work History</h3>
            <p className='experience-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='experience-list'>   
              <div className='experience-card'>
                <div className='experience-institution'>
                  <div className='experience-name'>
                    <a className='experience-link' href="https://epom.com/ad-server" target="_blank" rel="noopener noreferrer">
                      <img className='experience-logo' src={epom_adserver} alt='Epom Adserver Logo' />
                      Epom Ad Server
                    </a>
                  </div> 
                  <div className='experience-detail'>
                     <span className='experience-years'>Jan 2012 - Feb 2017</span>
                  </div>
                </div>
                <div className='experience-text'>
                  <h5 className='experience-text-title'>Senior Software Developer</h5>
                  <p className='experience-text-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati quasi possimus dignissimos praesentium quis totam odio voluptates eos facere similique libero, iure repudiandae magni pariatur qui autem iste. Sit.
                  </p>
                </div>
              </div>
              <div className='experience-card'>
                <div className='experience-institution'>
                  <div className='experience-name'>
                    <a className='experience-link' href="https://epom.com/ad-server" target="_blank" rel="noopener noreferrer">
                      <img className='experience-logo' src={epom_adserver} alt='Epom Adserver Logo' />
                      Epom Ad Server
                    </a>
                  </div> 
                  <div className='experience-detail'>
                     <span className='experience-years'>Feb 2017 - Feb 2018 </span>
                  </div>
                </div>
                <div className='experience-text'>
                  <h5 className='experience-text-title'>Development Team Lead</h5>
                  <p className='experience-text-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati quasi possimus dignissimos praesentium quis totam odio voluptates eos facere similique libero, iure repudiandae magni pariatur qui autem iste. Sit.
                  </p>
                </div>
              </div>
              <div className='experience-card'>
                <div className='experience-institution'>
                  <div className='experience-name'>
                    <a className='experience-link' href="https://epom.com/dsp" target="_blank" rel="noopener noreferrer">
                      <img className='experience-logo' src={epom_rtb} alt='Epom RTB Logo' />
                      Epom RTB
                    </a>
                  </div> 
                  <div className='experience-detail'>
                     <span className='experience-years'>Feb 2018 - Present </span>
                  </div>
                </div>
                <div className='experience-text'>
                  <h5 className='experience-text-title'>Principal Software Developer</h5>
                  <p className='experience-text-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati quasi possimus dignissimos praesentium quis totam odio voluptates eos facere similique libero, iure repudiandae magni pariatur qui autem iste. Sit.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='portfolio'>
            <h3 className='portfolio-title'>Portfolio</h3>
            <p className='portfolio-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='portfolio-grid'>
              <img src={p1} className="portfolio-img" alt="Portfolio Icon"  />
              <img src={p2} className="portfolio-img" alt="Portfolio Icon" />
              <img src={p3} className="portfolio-img" alt="Portfolio Icon" />
              <img src={p4} className="portfolio-img" alt="Portfolio Icon" />
              <img src={p5} className="portfolio-img" alt="Portfolio Icon" />
              <img src={p6} className="portfolio-img" alt="Portfolio Icon" />
            </div>
          </section>
          <section className='blog'>
            <h3 className='blog-title'>Blog</h3>
            <p className='blog-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='blog-list'>
              <div className='blog-item'>
                <div>
                  <img className='blog-img' src={blog1} alt="Blog thumbnail" />
                  <div className='blog-wrapper'>
                    <h5 className='blog-item-title'>How To Make Web Tempates</h5>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>
                <a className='blog-link' href="#">
                    Learn more 
                    <img src={gt} alt="Greater than icon" />
                </a>
              </div>
              <div className='blog-item'>
                <div>
                  <img className='blog-img' src={blog2} alt="Blog thumbnail" />
                  <div className='blog-wrapper'>
                    <h5 className='blog-item-title'>Make Business Card</h5>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>
                <a className='blog-link' href="#">
                    Learn more 
                    <img src={gt} alt="Greater than icon" />
                </a>
              </div>
              <div className='blog-item'>
                <div>
                  <img className='blog-img' src={blog3} alt="Blog thumbnail" />
                  <div className='blog-wrapper'>
                    <h5 className='blog-item-title'>How to make Flyer Design</h5>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>  
                <a className='blog-link' href="#">
                  Learn more 
                  <img src={gt} alt="Greater than icon" />
                </a>
              </div>
            </div>
          </section>
          <section className='contact'>
            <div className="form-container">
              <h2 className='contact-title'>Leave a message</h2>
              <form className="contact-form">
                <label htmlFor="name">Your Full Name ( Required )</label>
                <input id="name" type="text" name="name" required />
                <label htmlFor="email">Your Email ( Required )</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" name="subject" />
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} />
                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </form>
            </div>
            <div className="info-container">
              <h2 className='contact-title'>Contacts</h2>
              <div className="info-box">
                <div className="icon" aria-hidden="true">
                  <img src={location} alt="Location Icon" />
                </div>
                <div className="info">
                  <div className='info-line'>
                    <div>Country:</div>
                    <div>Slovak Republic</div>
                  </div>
                  <div className='info-line'>
                    <div>City:</div>
                    <div>Bratislava</div>
                  </div>
                  <div className='info-line'>
                    <div>Street:</div>
                    <div>Mlynske Nivy, 1889/5</div>
                  </div>
                </div>
              </div>
              <div className="info-box">
                <div className="icon" aria-hidden="true">
                  <img src={emailme} alt="Email Icon" />
                </div>
                <div className="info">
                  <div className='info-line'>
                    <div>Email:</div>
                    <div>youremail@gmail.com</div>
                  </div>
                  <div className='info-line'>
                    <div>Skype:</div>
                    <div>@yourusername</div>
                  </div>
                  <div className='info-line'>
                    <div>Telegram:</div>
                    <div>@yourusername</div>
                  </div>
                </div>
              </div>
              <div className="info-box">
                <div className="icon" aria-hidden="true">
                  <img src={mobile} alt="Phone Icon" />
                </div>
                <div className="info">
                  <div className='info-line'>
                    <div>Support Services:</div>
                    <div>15369</div>
                  </div>
                  <div className='info-line'>
                    <div>Office:</div>
                    <div>+58 (021)356 587 235</div>
                  </div>
                  <div className='info-line'>
                    <div>Personal:</div>
                    <div>+58 (021)356 587 235</div>
                  </div>
                </div>
              </div>
            </div>
          </section>          
          <section className='location'>
            <iframe 
              src="https://www.google.com/maps?q=Nivy+Tower,+Bratislava,+Slovakia&output=embed" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nivy Tower Location"
            ></iframe>
          </section>
          <section className='projects'>
            <img className='project-img-ad' src={ad} alt='Ad Server Logo' />
            <img className='project-img-dsp' src={dsp} alt='DSP Platform Logo' />
            <img className='project-img-ex' src={ex} alt='Exchange Platform Logo' />
          </section>
        </main>
        <footer> 
          <img className='copyright-icon' src={copyright} alt='Copyright Icon' />
          2026 All Rights Reserved.
        </footer>
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
