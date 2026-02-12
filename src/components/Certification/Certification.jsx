import oca from '../../assets/oca.png';
import ccna from '../../assets/ccna.png';
import hillel from '../../assets/hillel.jpeg';
import styles from './Certification.module.scss';
import { cn } from '../../utils/cn';


const Certification = () => {
    return (
        <section className={cn(styles, 'certification')}>
            <h3 className={cn(styles, 'certification__title')}>Certifications and Courses</h3>
            <p className={cn(styles, 'certification__description')}>Continuous professional development through certifications and courses helps keep skills aligned with evolving technologies and production requirements.</p>
            <div className={cn(styles, 'certification__list')}>
              <div className={cn(styles, 'certification__card')}>
                <div className={cn(styles, 'certification__institution')}>
                  <div className={cn(styles, 'certification__name')}>
                    <a href="https://www.credly.com/badges/fb8996b1-68db-4870-9529-6ad759509b1f" target="_blank" rel="noopener noreferrer">
                      Oracle Certified Java SE8 Associate
                    </a>
                    <img className={cn(styles, 'certification__logo')} src={oca} alt='OCA Logo' />
                  </div> 
                </div>
                <div className={cn(styles, 'certification__text')}>
                  <p className={cn(styles, 'certification__text-description')}>
                  Certification validates solid knowledge of the Java programming language, including core syntax, object-oriented concepts, and essential standard APIs. 
                  It demonstrates the ability to design, write, compile, and debug Java SE 8 applications using widely adopted language features. 
                  The certification confirms practical proficiency in Java fundamentals relevant to real-world development tasks.
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'certification__card')}>
                <div className={cn(styles, 'certification__institution')}>
                  <div className={cn(styles, 'certification__name')}>
                    CCNA Routing & Switching 
                    <img className={cn(styles, 'certification__logo certification__logo--ccna')} src={ccna} alt='CCNA Logo' />
                  </div> 
                </div>
                <div className={cn(styles, 'certification__text')}>
                  <p className={cn(styles, 'certification__text-description')}>
                    Certification tests practical knowledge of networking fundamentals, including IP addressing, routing and switching, network security, and basic automation concepts.
                    It demonstrates the ability to configure, operate, and troubleshoot small to medium-sized networks using Cisco technologies. 
                    The certification is widely recognized as a strong indicator of hands-on networking competence across various enterprise environments.
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'certification__card')}>
                <div className={cn(styles, 'certification__institution')}>
                  <div className={cn(styles, 'certification__name')}>
                    <a href="https://certificate.ithillel.ua/view/28721746" target='blank'>
                      Front End Development 
                    </a>
                    <img className={cn(styles, 'certification__logo certification__logo--rounded')} src={hillel} alt='Hillel Logo' />
                  </div> 
                </div>
                <div className={cn(styles, 'certification__text')}>
                  <p className={cn(styles, 'certification__text-description')}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque itaque numquam commodi saepe possimus debitis laboriosam laudantium delectus. Sit debitis illum laborum dignissimos officiis! 
                  </p>
                </div>
              </div>
              <div className={cn(styles, 'certification__card')}>
                <div className={cn(styles, 'certification__institution')}>
                  <div className={cn(styles, 'certification__name')}>
                    <a href="https://certificate.ithillel.ua/view/86345058" target='blank'>
                      React Application Develoment
                    </a>
                    <img className={cn(styles, 'certification__logo certification__logo--rounded')} src={hillel} alt='Hillel Logo' />
                  </div> 
                </div>
                <div className={cn(styles, 'certification__text')}>
                  <p className={cn(styles, 'certification__text-description')}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque itaque numquam commodi saepe possimus debitis laboriosam laudantium delectus. Sit debitis illum laborum dignissimos officiis! 
                  </p>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Certification;
