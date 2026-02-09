import coding from '../assets/coding.svg';
import illustration from '../assets/illustration.svg';
import microphone from '../assets/microphone.svg';
import photographer from '../assets/photographer.svg'; 
import gamedevelopment from '../assets/game-development.svg';
import ads from '../assets/ads.svg';

const Services = () => {
    return (
<section className='my-services'>
            <h3 className='services-title'>My Services</h3>
            <p className='services-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='services-grid'>
              <div className='service-card'>
                <img className='service-image' src={coding} alt="Development" />
                <h4 className='service-title'>Web Development</h4>
                <p className='service-text'>Sites, Landing Pages, Blogs, E-Commerce</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={illustration} alt="Design" />
                <h4 className='service-title'>UI/UX Design</h4>
                <p className='service-text'>Websites, Mobile Apps</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={microphone} alt="Design" />
                <h4 className='service-title'>Sound Design</h4>
                <p className='service-text'>Voice Overs, Beat Making</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={gamedevelopment} alt="Design" />
                <h4 className='service-title'>Game Design</h4>
                <p className='service-text'>Character Design, Props & Objects</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={photographer} alt="Design" />
                <h4 className='service-title'>Photography</h4>
                <p className='service-text'>Portraits, Product Photography</p>
              </div>
              <div className='service-card'>
                <img className='service-image' src={ads} alt="Design" />
                <h4 className='service-title'>Advertising</h4>
                <p className='service-text'>Ads on Instagram, Facebook and TikTok</p>
              </div>
            </div>
          </section>
    )
}

export default Services;