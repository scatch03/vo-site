import ad from '../../assets/ad.png';
import ex from '../../assets/ex.png';
import dsp from '../../assets/dsp.png';    
import styles from './Projects.module.scss';
import { cn } from '../../utils/cn';



const Projects = () => {
    return (
        <section className={cn(styles, 'projects')}>
            <img className={cn(styles, 'projects__image--ad')} src={ad} alt='Ad Server Logo' />
            <img className={cn(styles, 'projects__image--dsp')} src={dsp} alt='DSP Platform Logo' />
            <img className={cn(styles, 'projects__image--exchange')} src={ex} alt='Exchange Platform Logo' />
          </section>
    )
}   

export default Projects;    