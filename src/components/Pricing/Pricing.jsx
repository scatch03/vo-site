import checked from '../../assets/check.svg';
import close from '../../assets/close.svg';    
import styles from './Pricing.module.scss';
import { cn } from '../../utils/cn';


const Pricing = () => {
    return (
        <section className={cn(styles, 'pricing')}>
            <h3 className={cn(styles, 'pricing__title')}>Price Plans</h3>
            <p className={cn(styles, 'pricing__description')}>Flexible pricing plans tailored to project scope, delivery speed, and technical complexity, with a clear focus on business value and predictable outcomes.</p>
            <div className={cn(styles, 'pricing__grid')}>
              <div className={cn(styles, 'pricing__card')}>
                <h4 className={cn(styles, 'pricing__plan')}>Basic</h4>
                <div className={cn(styles, 'pricing__cost')}>$25.00</div>
                <p className={cn(styles, 'pricing__text')}>
                  Small tasks and quick improvements. Suitable for personal projects and small websites.
                </p>
                <ul className={cn(styles, 'pricing__features')}>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>Feature and module implementation</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>System architecture design</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>Performance optimization</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>Database design and optimization</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>Automated testing and code quality</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>High-load and distributed systems</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>Production support and ownership</p>
                  </li>
                </ul>
               <button className={cn(styles, 'pricing__button')}>
                Order Now
               </button>
              </div>
              <div className={cn(styles, 'pricing__card pricing__card--popular')}>
                <h4 className={cn(styles, 'pricing__plan')}>Standard</h4>
                <div className={cn(styles, 'pricing__cost')}>$35.00</div>
                <p className={cn(styles, 'pricing__text')}>
                  Full-feature development and product growth. Ideal for small to medium-sized projects and businesses.
                </p>
                <ul className={cn(styles, 'pricing__features')}>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Feature and module implementation</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>System architecture design</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Performance optimization</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Database design and optimization</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Automated testing and code quality</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>High-load and distributed systems</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon--cross')} src={close} alt='Cross Icon' />  
                    <p className={cn(styles, 'pricing__feature-text--dimmed')}>Production support and ownership</p>
                  </li>
                </ul>
                <button className={cn(styles, 'pricing__button pricing__button--selected')}>
                  Order Now
                </button>
              </div>
              <div className={cn(styles, 'pricing__card')}>
                <h4 className={cn(styles, 'pricing__plan')}>Extended</h4>
                <div className={cn(styles, 'pricing__cost')}>$50.00</div>
                <p className={cn(styles, 'pricing__text')}>
                  Complex systems, high load, and end-to-end responsibility. Perfect for larger projects and enterprises.
                </p>
                <ul className={cn(styles, 'pricing__features')}>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Feature and module implementation</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>System architecture design</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Performance optimization</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Database design and optimization</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>Automated testing and code quality</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p>High-load and distributed systems</p>
                  </li>
                  <li className={cn(styles, 'pricing__feature')}>
                    <img className={cn(styles, 'pricing__icon')} src={checked} alt='Cross Icon' />  
                    <p >Production support and ownership</p>
                  </li>
                </ul>
                <button className={cn(styles, 'pricing__button')}>
                  Order Now
                </button>
              </div>
            </div>
          </section>
    )
}

export default Pricing; 
