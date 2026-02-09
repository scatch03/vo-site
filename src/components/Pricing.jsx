import checked from '../assets/check.svg';
import close from '../assets/close.svg';    

const Pricing = () => {
    return (
        <section className='pricing'>
            <h3 className='pricing__title'>Price Plans</h3>
            <p className='pricing__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='pricing__grid'>
              <div className='pricing__card'>
                <h4 className='pricing__plan'>Basic</h4>
                <div className='pricing__cost'>$25.00</div>
                <p className='pricing__text'>
                  Small tasks and quick improvements. Suitable for personal projects and small websites.
                </p>
                <ul className='pricing__features'>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>Feature and module implementation</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>System architecture design</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>Performance optimization</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>Database design and optimization</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>Automated testing and code quality</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>High-load and distributed systems</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>Production support and ownership</p>
                  </li>
                </ul>
               <button className='pricing__button'>
                Order Now
               </button>
              </div>
              <div className='pricing__card pricing__card--popular'>
                <h4 className='pricing__plan'>Standard</h4>
                <div className='pricing__cost'>$35.00</div>
                <p className='pricing__text'>
                  Full-feature development and product growth. Ideal for small to medium-sized projects and businesses.
                </p>
                <ul className='pricing__features'>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Feature and module implementation</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>System architecture design</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Performance optimization</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Database design and optimization</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Automated testing and code quality</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>High-load and distributed systems</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon--cross' src={close} alt='Cross Icon' />  
                    <p className='pricing__feature-text--dimmed'>Production support and ownership</p>
                  </li>
                </ul>
                <button className='pricing__button pricing__button--selected'>
                  Order Now
                </button>
              </div>
              <div className='pricing__card'>
                <h4 className='pricing__plan'>Extended</h4>
                <div className='pricing__cost'>$50.00</div>
                <p className='pricing__text'>
                  Complex systems, high load, and end-to-end responsibility. Perfect for larger projects and enterprises.
                </p>
                <ul className='pricing__features'>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Checked Icon' />  
                    <p>Technical consultation and assessment</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Checked Icon' />  
                    <p>Bug fixing and minor improvements</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Feature and module implementation</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>System architecture design</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Performance optimization</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Database design and optimization</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>Automated testing and code quality</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p>High-load and distributed systems</p>
                  </li>
                  <li className='pricing__feature'>
                    <img className='pricing__icon' src={checked} alt='Cross Icon' />  
                    <p >Production support and ownership</p>
                  </li>
                </ul>
                <button className='pricing__button'>
                  Order Now
                </button>
              </div>
            </div>
          </section>
    )
}

export default Pricing; 
