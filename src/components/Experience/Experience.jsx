import epom_adserver from '../../assets/epom_adserver.png';
import epom_rtb from '../../assets/epom_rtb.png';  
import styles from './Experience.module.scss';
import { cn } from '../../utils/cn';


const Experience = () => {
    return (
    <section className={cn(styles, 'experience')}>
            <h3 className={cn(styles, 'experience__title')}>Work History</h3>
            <p className={cn(styles, 'experience__description')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati quasi possimus dignissimos praesentium quis totam odio voluptates eos facere similique libero, iure repudiandae magni pariatur qui autem iste. Sit.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati quasi possimus dignissimos praesentium quis totam odio voluptates eos facere similique libero, iure repudiandae magni pariatur qui autem iste. Sit.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati quasi possimus dignissimos praesentium quis totam odio voluptates eos facere similique libero, iure repudiandae magni pariatur qui autem iste. Sit.
                  </p>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Experience   