import copyright from '../assets/copyright.svg';    

const Footer = () => {
    return (
        <footer className='site-footer'> 
          <img className='site-footer__icon' src={copyright} alt='Copyright Icon' />
          2026 All Rights Reserved.
        </footer>
    );
};

export default Footer;  
