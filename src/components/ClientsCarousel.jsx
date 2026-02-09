import Slider from 'react-slick';
import star from '../assets/star.svg';
import testimonialsAvatar1 from '../assets/testimonialsAvatar1.png';
import testimonialsAvatar2 from '../assets/testimonialsAvatar2.png';
import testimonialsAvatar3 from '../assets/testimonialsAvatar3.png';

const ClientsCarousel = () => {
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
      title: 'Great Quality!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.',
      authorName: 'John Doe',
      authorRole: 'CEO, Company',
      authorAvatar: testimonialsAvatar1,
    },
    {
      title: 'Amazing work!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.',
      authorName: 'Tiana Philips',
      authorRole: 'Photographer',
      authorAvatar: testimonialsAvatar2,
    },
    {
      title: 'Great Quality!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.',
      authorName: 'Talan Westervelt',
      authorRole: 'Business Owner',
      authorAvatar: testimonialsAvatar3,
    },
    {
      title: 'Excellent support!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.',
      authorName: 'Mary Watson',
      authorRole: 'Product Manager',
      authorAvatar: testimonialsAvatar1,
    },
  ];

  return (
    <div className="testimonials-carousel">
      <Slider {...settings} className="testimonials-carousel__slider">
        {clientsTestimonials.map(({ title, text, authorName, authorRole, authorAvatar }, index) => (
          <div key={`${authorName}-${index}`} className="testimonials-carousel__slide">
            <div className="testimonials__card">
              <ul className="testimonials__rating">
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
                <li><img src={star} alt="Star icon" /></li>
              </ul>
              <h5 className="testimonials__card-title">{title}</h5>
              <p className="testimonials__text">{text}</p>
              <div className="testimonials__author">
                <img className="testimonials__author-avatar" src={authorAvatar} alt="Author Avatar" />
                <div>
                  <div className="testimonials__author-name">{authorName}</div>
                  <div className="testimonials__author-job">{authorRole}</div>
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
