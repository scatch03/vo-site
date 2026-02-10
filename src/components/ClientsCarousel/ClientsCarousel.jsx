import Slider from 'react-slick';
import star from '../../assets/star.svg';
import testimonialsAvatar1 from '../../assets/s_khlivnenko.jpeg';
import testimonialsAvatar2 from '../../assets/m_skripnikov.jpeg';
import testimonialsAvatar3 from '../../assets/d_osochenko.jpeg';
import testimonialsAvatar4 from '../../assets/a_ruin.jpeg';
import styles from './ClientsCarousel.module.scss';
import { cn } from '../../utils/cn';


const ClientsCarousel = () => {
  const recommendationsLink = 'https://www.linkedin.com/in/oleksandr-vorona-51906b234/details/recommendations/';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const clientsTestimonials = [
    {
      title: 'Exceptional software engineer and a highly reliable professional',
      text: 'I\'ve had the privilege of working with Oleksandr Vorona for almost 15 years, essentially from the very beginning of Epom. Over that long period, Oleksandr has consistently proven himself to be an exceptional software engineer and a highly reliable professional.Oleksandr is extremely responsible, dependable, and independent. He doesn\'t require close supervision or detailed guidance — he takes full ownership of complex problems and delivers results consistently.',
      authorName: 'Anton Ruin',
      authorRole: 'CEO, Epom',
      authorAvatar: testimonialsAvatar4,
      authorLinkedin: 'https://ua.linkedin.com/in/antonruin',
    },
    {
      title: 'Great expertise and a result-oriented approach.',
      text: 'Oleksandr built exactly what we needed, on time and with great attention to detail. The integration process was handled flawlessly. I highly recommend Oleksandr for any web development project!',
      authorName: 'Sergii Khlivnenko',
      authorRole: 'CEO, Slotif.ai',
      authorAvatar: testimonialsAvatar1,
      authorLinkedin: 'https://www.linkedin.com/in/khlivnenko/',
    },
    {
      title: 'One of the best software developers I worked with',
      text: 'Oleksandr is business-oriented, technically very deep, and proficient. You are lucky if you got him on your team.',
      authorName: 'Denys Osochenko',
      authorRole: 'CEO, PaveNow',
      authorAvatar: testimonialsAvatar3,
      authorLinkedin: 'https://www.linkedin.com/in/denisosochenko/',
    },
     {
      title: 'Skilled and responsible engineer',
      text: 'What I value most about Oleksandr is his consistent focus on stability, scalability, and business priorities rather than short-term technical solutions. He has played an important role in the evolution of Epom’s products and has always been someone you can trust with critical responsibilities. I would strongly recommend Oleksandr to any organization seeking a seasoned, reliable, and thoughtful software engineer.',    
      authorName: 'Maksym Skrypnikov',
      authorRole: 'Senior Developer',
      authorAvatar: testimonialsAvatar2,
      authorLinkedin: 'https://www.linkedin.com/in/maksym-skrypnikov-1059802/',
    },
  ];

  return (
    <div className={cn(styles, 'testimonials-carousel')}>
      <Slider {...settings} className={cn(styles, 'testimonials-carousel__slider')}>
        {clientsTestimonials.map(({ title, text, authorName, authorRole, authorAvatar, authorLinkedin }, index) => (
          <div key={`${authorName}-${index}`} className={cn(styles, 'testimonials-carousel__slide')}>
            <div className={cn(styles, 'testimonials__card')}>
              <ul className={cn(styles, 'testimonials__rating')}>
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
              </ul>
              <h5 className={cn(styles, 'testimonials__card-title')}>{title}</h5>
              <a
                className={cn(styles, 'testimonials__text testimonials__text-link')}
                href={recommendationsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn recommendations section"
              >
                {text}
              </a>
              <div className={cn(styles, 'testimonials__author')}>
                <a
                  className={cn(styles, 'testimonials__author-avatar-link')}
                  href={authorLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${authorName} LinkedIn profile`}
                >
                  <img className={cn(styles, 'testimonials__author-avatar')} src={authorAvatar} alt={`${authorName} avatar`} />
                </a>
                <div>
                  <div className={cn(styles, 'testimonials__author-name')}>{authorName}</div>
                  <div className={cn(styles, 'testimonials__author-job')}>{authorRole}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientsCarousel;
