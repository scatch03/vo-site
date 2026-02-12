import photo from '../../assets/me3.png';
import arrowRight from '../../assets/rarrow.svg';
import triangle from '../../assets/triangle.svg';
import styles from './Hero.module.scss';
import { cn } from '../../utils/cn';



const Hero = () => {
    return (
        <header id="home" className={cn(styles, 'hero')}>
            <div className={cn(styles, 'hero__shape hero__shape--circle-yellow-1')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--circle-yellow-2')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--circle-green-1')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--circle-green-2')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--square-blue-1')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--square-yellow-1')}></div>
            <img src={triangle} className={cn(styles, 'hero__triangle')}></img>

            <div className={cn(styles, 'hero__content')}>
              <h1 className={cn(styles, 'hero__title')}>I'm Oleksandr Vorona <br/>
                <span className={cn(styles, 'hero__title-accent')}>Software</span> Developer
              </h1>
              <div className={cn(styles, 'hero__subtitle')}>
                with near 15 years of experience primarily in ad tech and marketing domains, specializing in RTB bidders and exchanges, high-load microservices, big data analytics and automatic AI-driven optimization solutions.
              </div>
              <a className={cn(styles, 'hero__button')} href="#leave-message">
                Get in touch <img src={arrowRight} alt="arrow right" />
              </a>
            </div>
            <img className={cn(styles, 'hero__image')} src={photo} alt="Developer photo" />
        </header>
    )
}   

export default Hero;    
