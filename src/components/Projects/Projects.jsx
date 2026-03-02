import consystemLogo from '../../assets/consystem-logo.svg';
import unativeLogo from '../../assets/unative-logo.svg';
import epomLogo from '../../assets/epom-logo.svg';
import styles from './Projects.module.scss';
import { cn } from '../../utils/cn';



const Projects = () => {
    return (
        <section className={cn(styles, 'projects')}>
            <a href='https://epom.com' target='_blank' rel='noopener noreferrer' aria-label='Open Epom website'>
              <img className={cn(styles, 'projects__image')} src={epomLogo} alt='Epom Logo' />
            </a>
            <a href='https://unative.com' target='_blank' rel='noopener noreferrer' aria-label='Open Unative website'>
              <img className={cn(styles, 'projects__image')} src={unativeLogo} alt='Unative Logo' />
            </a>
            <a href='https://consysteam.com' target='_blank' rel='noopener noreferrer' aria-label='Open Consysteam website'>
              <img className={cn(styles, 'projects__image')} src={consystemLogo} alt='Consystem Logo' title='CONSYSTEAM' />
            </a>
          </section>
    )
}   

export default Projects;    
