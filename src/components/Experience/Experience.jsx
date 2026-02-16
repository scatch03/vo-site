import epom_adserver from '../../assets/epom_adserver.png';
import epom_rtb from '../../assets/epom_rtb.png';  
import styles from './Experience.module.scss';
import { cn } from '../../utils/cn';


const Experience = () => {
    return (
    <section className={cn(styles, 'experience')}>
            <h3 className={cn(styles, 'experience__title')}>Work History</h3>
            <p className={cn(styles, 'experience__description')}>My work history reflects long-term delivery across product evolution, from core feature development to architecture, scaling, and production ownership in high-load systems.</p>
            <div className={cn(styles, 'experience__list')}>   
              <div className={cn(styles, 'experience__card')}>
                <div className={cn(styles, 'experience__institution')}>
                  <div className={cn(styles, 'experience__name')}>
                    <a className={cn(styles, 'experience__link')} href="https://epom.com/ad-server" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'experience__logo')} src={epom_adserver} alt='Epom Adserver Logo' />
                      Epom Ad Server
                    </a>
                  </div> 
                  <div className={cn(styles, 'experience__detail')}>
                     <span className={cn(styles, 'experience__years')}>Jan 2012 - Feb 2017</span>
                  </div>
                </div>
                <div className={cn(styles, 'experience__text')}>
                  <h5 className={cn(styles, 'experience__text-title')}>Senior Software Developer</h5>
                  <p className={cn(styles, 'experience__text-description')}>
                    Led design and delivery of high-load backend services for ad-tech platforms, building reliable microservice APIs and optimizing SQL-heavy data flows for real-time bidding workloads. Improved throughput and latency by profiling hotspots, refactoring critical paths, and tuning database queries and indexing strategies for production-scale traffic. Worked across the full delivery cycle, from requirements and architecture to implementation, release, and post-production support, while aligning technical decisions with business priorities and delivery timelines.
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'experience__card')}>
                <div className={cn(styles, 'experience__institution')}>
                  <div className={cn(styles, 'experience__name')}>
                    <a className={cn(styles, 'experience__link')} href="https://epom.com/ad-server" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'experience__logo')} src={epom_adserver} alt='Epom Adserver Logo' />
                      Epom Ad Server
                    </a>
                  </div> 
                  <div className={cn(styles, 'experience__detail')}>
                     <span className={cn(styles, 'experience__years')}>Feb 2017 - Feb 2018 </span>
                  </div>
                </div>
                <div className={cn(styles, 'experience__text')}>
                  <h5 className={cn(styles, 'experience__text-title')}>Development Team Lead</h5>
                  <p className={cn(styles, 'experience__text-description')}>
                    Led a cross-functional team of 6 specialists, including 3 backend developers, 1 frontend developer, and 2 QA engineers, coordinating delivery from planning to release. Owned sprint execution, task prioritization, and technical direction, while improving collaboration between engineering and QA to reduce cycle time and increase release predictability. Mentored team members, supported architectural decisions, and maintained high quality standards through clear processes, code reviews, and delivery-focused communication.
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'experience__card')}>
                <div className={cn(styles, 'experience__institution')}>
                  <div className={cn(styles, 'experience__name')}>
                    <a className={cn(styles, 'experience__link')} href="https://epom.com/dsp" target="_blank" rel="noopener noreferrer">
                      <img className={cn(styles, 'experience__logo')} src={epom_rtb} alt='Epom RTB Logo' />
                      Epom RTB
                    </a>
                  </div> 
                  <div className={cn(styles, 'experience__detail')}>
                     <span className={cn(styles, 'experience__years')}>Feb 2018 - Present </span>
                  </div>
                </div>
                <div className={cn(styles, 'experience__text')}>
                  <h5 className={cn(styles, 'experience__text-title')}>Principal Software Developer</h5>
                  <p className={cn(styles, 'experience__text-description')}>
                    Architected and delivered core RTB platform capabilities under strict latency and throughput constraints, ensuring reliable behavior at high request volumes and burst traffic. Led development of AI-driven optimization components for bidding, pacing, and budget allocation, using real-time signals to improve campaign efficiency and decision quality. Drove end-to-end performance engineering across services and data pipelines, combining low-latency architecture, query tuning, and production observability to meet demanding SLA targets.
                  </p>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Experience   
