import coding from '../../assets/coding.svg';
import illustration from '../../assets/illustration.svg';
import microphone from '../../assets/microphone.svg';
import photographer from '../../assets/photographer.svg'; 
import gamedevelopment from '../../assets/game-development.svg';
import ads from '../../assets/ads.svg';
import styles from './Services.module.scss';
import { cn } from '../../utils/cn';


const Services = () => {
    return (
<section id='services' className={cn(styles, 'services')}>
            <h3 className={cn(styles, 'services__title')}>My Services</h3>
            <p className={cn(styles, 'services__description')}>I deliver end-to-end software engineering services, from architecture and backend development to performance optimization and production support for high-load systems.</p>
            <div className={cn(styles, 'services__grid')}>
              <div className={cn(styles, 'services__card')}>
                <img className={cn(styles, 'services__image')} src={coding} alt="Development" />
                <h4 className={cn(styles, 'services__card-title')}>Web Site Development</h4>
                <p className={cn(styles, 'services__card-text')}>Sites, Landing Pages, Blogs, E-Commerce</p>
              </div>
              <div className={cn(styles, 'services__card')}>
                <img className={cn(styles, 'services__image')} src={illustration} alt="Design" />
                <h4 className={cn(styles, 'services__card-title')}>Web Application Development</h4>
                <p className={cn(styles, 'services__card-text')}>Websites, Mobile Apps</p>
              </div>
              <div className={cn(styles, 'services__card')}>
                <img className={cn(styles, 'services__image')} src={microphone} alt="Design" />
                <h4 className={cn(styles, 'services__card-title')}>Backend Development And Optimization</h4>
                <p className={cn(styles, 'services__card-text')}>Voice Overs, Beat Making</p>
              </div>
              <div className={cn(styles, 'services__card')}>
                <img className={cn(styles, 'services__image')} src={gamedevelopment} alt="Design" />
                <h4 className={cn(styles, 'services__card-title')}>Database Develoment And Query Optimization</h4>
                <p className={cn(styles, 'services__card-text')}>Character Design, Props & Objects</p>
              </div>
              <div className={cn(styles, 'services__card')}>
                <img className={cn(styles, 'services__image')} src={photographer} alt="Design" />
                <h4 className={cn(styles, 'services__card-title')}>AI/ML Develoment</h4>
                <p className={cn(styles, 'services__card-text')}>Portraits, Product Photography</p>
              </div>
              <div className={cn(styles, 'services__card')}>
                <img className={cn(styles, 'services__image')} src={ads} alt="Design" />
                <h4 className={cn(styles, 'services__card-title')}>Data Science Research</h4>
                <p className={cn(styles, 'services__card-text')}>Ads on Instagram, Facebook and TikTok</p>
              </div>
            </div>
          </section>
    )
}

export default Services;
