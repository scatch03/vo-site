import photo from '../assets/me3.png';
import arrowRight from '../assets/rarrow.svg';
import triangle from '../assets/triangle.svg';


const Hero = () => {
    return (
        <header id="home" className="header">
            <div className="circle-image-yellow-1"></div>
            <div className="circle-image-yellow-2"></div>
            <div className="circle-image-green-1"></div>
            <div className="circle-image-green-2"></div>
            <div className="square-image-blue-1"></div>
            <div className="square-image-yellow-1"></div>
            <img src={triangle} className="triangle-equilateral"></img>

            <div className="header-text">
              <h1 className='header-title'>I'm Oleksandr Vorona <br/>
                <span className="developer-title">Software</span> Developer
              </h1>
              <div className="header-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.      
              </div>
              <button className='action-button'>
                Get in touch <img src={arrowRight} alt="arrow right" />
              </button>
            </div>
            <img className="header-image" src={photo} alt="Developer photo" />
        </header>
    )
}   

export default Hero;    