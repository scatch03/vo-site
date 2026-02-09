import copyright from '../assets/copyright.svg';    

const Footer = () => {
    return (
        <footer> 
          <img className='copyright-icon' src={copyright} alt='Copyright Icon' />
          2026 All Rights Reserved.
        </footer>
    );
};

export default Footer;  