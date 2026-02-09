import upml from '../../assets/upml.png';
import knu from '../../assets/knu.png';
import kpi from '../../assets/kpi.png';
import khpi from '../../assets/khpi.png';
import styles from './Education.module.scss';
import { cn } from '../../utils/cn';


const Education = () => {
    return (
        <section id='cv' className={cn(styles, 'education')}>
            <h3 className={cn(styles, 'education__title')}>Education</h3>
            <p className={cn(styles, 'education__description')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className={cn(styles, 'education__list')}>   
              <div className={cn(styles, 'education__card')}>
                <div className={cn(styles, 'education__institution')}>
                  <div className={cn(styles, 'education__institution-name')}>
                    <a className={cn(styles, 'education__link')} href="http://upml.knu.ua/" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'education__logo')} src={upml} alt='UPML Logo' />
                      Ukrainian Physics and Mathematics Lyceum
                    </a>
                  </div> 
                  <div className={cn(styles, 'education__detail')}> Student
                     <span className={cn(styles, 'education__years')}>Sep 2002 - Jun 2005</span>
                  </div>
                </div>
                <div className={cn(styles, 'education__text')}>
                  <h5 className={cn(styles, 'education__text-title')}>Certificate of Secondary Education</h5>
                  <p className={cn(styles, 'education__text-description')}>
                    Highly selective secondary school affiliated with Taras Shevchenko National University of Kyiv.
                    It specializes in advanced education in mathematics, physics, and computer science for gifted students.
                    The lyceum prepares students for national and international academic competitions as well as top universities worldwide.
                    Its graduates are well known for strong analytical profile-sidebar__skills and a solid foundation in STEM disciplines.                  </p>
                </div>
              </div>
              <div className={cn(styles, 'education__card')}>
                <div className={cn(styles, 'education__institution')}>
                  <div className={cn(styles, 'education__institution-name')}>
                    <a className={cn(styles, 'education__link')} href="https://knu.ua/en/" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'education__logo')} src={knu} alt='KNU Logo' />
                      National Taras Shevchenko University of Kyiv
                    </a>
                  </div> 
                  <div className={cn(styles, 'education__detail')}> Student
                     <span className={cn(styles, 'education__years')}>Sep 2005 - Jun 2009</span>
                  </div>
                </div>
                <div className={cn(styles, 'education__text')}>
                  <h5 className={cn(styles, 'education__text-title')}>BSc of Applied Physics</h5>
                  <p className={cn(styles, 'education__text-description')}>
                    The bachelor's program at the Faculty of Radiophysics, Electronics and Computer Systems of Taras Shevchenko National University of Kyiv provides a strong foundation in physics, mathematics, and engineering.
                    Students study core subjects such as electronics, radiophysics, signal processing, and computer systems.
                    The program emphasizes analytical thinking, problem-solving, and practical laboratory work.
                    Graduates are well prepared for careers in IT, telecommunications, electronics, or for continuing studies at the master's level.
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'education__card')}>
                <div className={cn(styles, 'education__institution')}>
                  <div className={cn(styles, 'education__institution-name')}>
                    <a className={cn(styles, 'education__link')} href="https://knu.ua/en/" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'education__logo')} src={knu} alt='KNU Logo' />
                      National Taras Shevchenko University of Kyiv
                    </a>
                  </div> 
                  <div className={cn(styles, 'education__detail')}> Student
                     <span className={cn(styles, 'education__years')}>Sep 2009 - Jun 2011</span>
                  </div>
                </div>
                <div className={cn(styles, 'education__text')}>
                  <h5 className={cn(styles, 'education__text-title')}>
                    MSc of Radiophysics and Electronics
                    <span className={cn(styles, 'education__honors')}>with honors</span>
                  </h5>
                  <p className={cn(styles, 'education__text-description')}>
                    The master's program in Automation of Scientific Research at the Faculty of Radiophysics, Electronics and Computer Systems of Taras Shevchenko National University of Kyiv 
                    focuses on applying modern computational and engineering methods to scientific investigations.
                    It combines advanced training in programming, data processing, instrumentation, and control systems.
                    Students learn to design software and hardware solutions for experiment automation and data analysis.
                    Graduates are prepared for careers in research, high-tech industries, data-driven engineering, and applied IT.
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'education__card')}>
                <div className={cn(styles, 'education__institution')}>
                  <div className={cn(styles, 'education__institution-name')}>
                    <a className={cn(styles, 'education__link')} href="https://kpi.ua/en/" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'education__logo education__logo--kpi')} src={kpi} alt='KPI Logo' />
                      National Technical University of Ukraine
                      "Igor Sikorsky Kyiv Polytechnic Institute"
                    </a>
                  </div> 
                  <div className={cn(styles, 'education__detail')}> Student
                     <span className={cn(styles, 'education__years')}>Sep 2022 - Jun 2025</span>
                  </div>
                </div>
                <div className={cn(styles, 'education__text')}>
                  <h5 className={cn(styles, 'education__text-title')}>
                    BSc of Data Science and Artificial Intelligence
                  </h5>
                  <p className={cn(styles, 'education__text-description')}>
                    The master's program in Computer Science (AI and Data Science) at the National Kyiv Polytechnic Institute provides advanced training in artificial intelligence, machine learning, and data science.
                    Students gain expertise in programming, statistical analysis, data visualization, and algorithm development.
                    The curriculum emphasizes both theoretical foundations and practical applications in AI and data-driven solutions.
                    Graduates are well-prepared for careers in AI research, data science, software engineering, and related high-tech fields.
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'education__card')}>
                <div className={cn(styles, 'education__institution')}>
                  <div className={cn(styles, 'education__institution-name')}>
                    <a className={cn(styles, 'education__link')} href="https://www.kpi.kharkov.ua/eng/" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'education__logo')} src={khpi} alt='KHPI Logo' />
                      National Technical University of Ukraine
                      "Kharkiv Polytechnic Institute" 
                    </a>
                  </div> 
                  <div className={cn(styles, 'education__detail')}> Student
                     <span className={cn(styles, 'education__years')}>Sep 2023 - Dec 2024</span>
                  </div>
                </div>
                <div className={cn(styles, 'education__text')}>
                  <h5 className={cn(styles, 'education__text-title')}>
                    MSc of Software Engineering
                    <p className={cn(styles, 'education__honors')}>with honors</p>
                  </h5>
                  <p className={cn(styles, 'education__text-description')}>
                    The master's program in Computer Science (Software Engineering) at the National Technical University of Ukraine "Kharkiv Polytechnic Institute" provides 
                    advanced training in software engineering principles, system design, and development methodologies.
                    Students gain expertise in programming profile-sidebar__languages, software architecture, testing, and project management.
                    The curriculum emphasizes both theoretical foundations and practical applications in software engineering and system development.
                    Graduates are well-prepared for careers in AI research, data science, software engineering, and related high-tech fields.
                  </p>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Education;
