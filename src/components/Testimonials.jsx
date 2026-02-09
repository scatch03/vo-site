import star from '../assets/star.svg';
import testimonialsAvatar1 from '../assets/testimonialsAvatar1.png';
import testimonialsAvatar2 from '../assets/testimonialsAvatar2.png';
import testimonialsAvatar3 from '../assets/testimonialsAvatar3.png';

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <h3 className='testimonials-title'>Recommendations</h3>
            <p className='testimonials-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='testimonials-grid'>
              <div className='testimonials-card'>
                <ul className='testimonials-rating'>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                </ul>
                <h5 className='testimonial-title'>
                  Great Quality!
                </h5>
                <p className='testimonials-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <div className='testimonials-author'>
                  <img className='author-avatar' src={testimonialsAvatar1} alt='Author Avatar' />
                  <div>
                    <div className='author-name'>John Doe</div>
                    <div className='author-job'>CEO, Company</div>
                  </div>
                </div>
              </div>
              <div className='testimonials-card'>
                <ul className='testimonials-rating'>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                </ul>
                <h5 className='testimonial-title'>
                  Amazing work!
                </h5>
                <p className='testimonials-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <div className='testimonials-author'>
                  <img className='author-avatar' src={testimonialsAvatar2} alt='Author Avatar' />
                  <div>
                    <div className='author-name'>Tiana Philips</div>
                    <div className='author-job'>Photographer</div>
                  </div>
                </div>
              </div>
              <div className='testimonials-card'>
                <ul className='testimonials-rating'>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                  <li><img src={star} alt='Start icon' /></li>
                </ul>
                <h5 className='testimonial-title'>
                  Great Quality!
                </h5>
                <p className='testimonials-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Natoque rutrum semper sed suspendisse nunc lectus.Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <div className='testimonials-author'>
                  <img className='author-avatar' src={testimonialsAvatar3} alt='Author Avatar' />
                  <div>
                    <div className='author-name'>Talan Westervelt</div>
                    <div className='author-job'>Business Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Testimonials;    