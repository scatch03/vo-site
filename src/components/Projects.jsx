import ad from '../assets/ad.png';
import ex from '../assets/ex.png';
import dsp from '../assets/dsp.png';    


const Projects = () => {
    return (
        <section className='projects'>
            <img className='projects__image--ad' src={ad} alt='Ad Server Logo' />
            <img className='projects__image--dsp' src={dsp} alt='DSP Platform Logo' />
            <img className='projects__image--exchange' src={ex} alt='Exchange Platform Logo' />
          </section>
    )
}   

export default Projects;    