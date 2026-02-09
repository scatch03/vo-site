import ad from '../assets/ad.png';
import ex from '../assets/ex.png';
import dsp from '../assets/dsp.png';    


const Projects = () => {
    return (
        <section className='projects'>
            <img className='project-img-ad' src={ad} alt='Ad Server Logo' />
            <img className='project-img-dsp' src={dsp} alt='DSP Platform Logo' />
            <img className='project-img-ex' src={ex} alt='Exchange Platform Logo' />
          </section>
    )
}   

export default Projects;    