import epom_adserver from '../assets/epom_adserver.png';
import epom_rtb from '../assets/epom_rtb.png';  

const Experience = () => {
    return (
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
    )
}

export default Experience   