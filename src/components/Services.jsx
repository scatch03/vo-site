import coding from '../assets/coding.svg';
import illustration from '../assets/illustration.svg';
import microphone from '../assets/microphone.svg';
import photographer from '../assets/photographer.svg'; 
import gamedevelopment from '../assets/game-development.svg';
import ads from '../assets/ads.svg';

const Services = () => {
    return (
<section id='services' className='services'>
            <h3 className='services__title'>My Services</h3>
            <p className='services__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='services__grid'>
              <div className='services__card'>
                <img className='services__image' src={coding} alt="Development" />
                <h4 className='services__card-title'>Web Development</h4>
                <p className='services__card-text'>Sites, Landing Pages, Blogs, E-Commerce</p>
              </div>
              <div className='services__card'>
                <img className='services__image' src={illustration} alt="Design" />
                <h4 className='services__card-title'>UI/UX Design</h4>
                <p className='services__card-text'>Websites, Mobile Apps</p>
              </div>
              <div className='services__card'>
                <img className='services__image' src={microphone} alt="Design" />
                <h4 className='services__card-title'>Sound Design</h4>
                <p className='services__card-text'>Voice Overs, Beat Making</p>
              </div>
              <div className='services__card'>
                <img className='services__image' src={gamedevelopment} alt="Design" />
                <h4 className='services__card-title'>Game Design</h4>
                <p className='services__card-text'>Character Design, Props & Objects</p>
              </div>
              <div className='services__card'>
                <img className='services__image' src={photographer} alt="Design" />
                <h4 className='services__card-title'>Photography</h4>
                <p className='services__card-text'>Portraits, Product Photography</p>
              </div>
              <div className='services__card'>
                <img className='services__image' src={ads} alt="Design" />
                <h4 className='services__card-title'>Advertising</h4>
                <p className='services__card-text'>Ads on Instagram, Facebook and TikTok</p>
              </div>
            </div>
          </section>
    )
}

export default Services;