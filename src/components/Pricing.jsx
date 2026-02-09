import checked from '../assets/check.svg';
import close from '../assets/close.svg';    

const Pricing = () => {
    return (
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
    )
}

export default Pricing; 