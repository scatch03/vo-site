import Slider from "react-slick";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";

const ClientsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="clients-carousel">
      <Slider {...settings} className="clients-slider">
        <div className="client-slide">
          <img src={p1} alt="Client 1" className="client-image" />
        </div>
        <div className="client-slide">
          <img src={p2} alt="Client 2" className="client-image" />
        </div>
        <div className="client-slide">
          <img src={p3} alt="Client 3" className="client-image" />
        </div>
        <div className="client-slide">
          <img src={p4} alt="Client 4" className="client-image" />
        </div>
        <div className="client-slide">
          <img src={p5} alt="Client 5" className="client-image" />
        </div>
      </Slider>
    </section>
  );
};

export default ClientsCarousel;
