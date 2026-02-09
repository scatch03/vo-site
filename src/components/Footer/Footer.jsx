import copyright from '../../assets/copyright.svg';    
import styles from './Footer.module.scss';
import { cn } from '../../utils/cn';


const Footer = () => {
    return (
        <footer className={cn(styles, 'site-footer')}> 
          <img className={cn(styles, 'site-footer__icon')} src={copyright} alt='Copyright Icon' />
          2026 All Rights Reserved.
        </footer>
    );
};

export default Footer;  
