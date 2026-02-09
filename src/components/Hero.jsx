import photo from '../assets/me3.png';
import arrowRight from '../assets/rarrow.svg';
import triangle from '../assets/triangle.svg';


const Hero = () => {
    return (
        <header id="home" className="hero">
            <div className="hero__shape hero__shape--circle-yellow-1"></div>
            <div className="hero__shape hero__shape--circle-yellow-2"></div>
            <div className="hero__shape hero__shape--circle-green-1"></div>
            <div className="hero__shape hero__shape--circle-green-2"></div>
            <div className="hero__shape hero__shape--square-blue-1"></div>
            <div className="hero__shape hero__shape--square-yellow-1"></div>
            <img src={triangle} className="hero__triangle"></img>

            <div className="hero__content">
              <h1 className='hero__title'>I'm Oleksandr Vorona <br/>
                <span className="hero__title-accent">Software</span> Developer
              </h1>
              <div className="hero__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.      
              </div>
              <button className='hero__button'>
                Get in touch <img src={arrowRight} alt="arrow right" />
              </button>
            </div>
            <img className="hero__image" src={photo} alt="Developer photo" />
        </header>
    )
}   

export default Hero;    
