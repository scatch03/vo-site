import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import gt from '../assets/gt.svg';  

const Blog = () => {
    return (
       <section className='blog'>
            <h3 className='blog-title'>Blog</h3>
            <p className='blog-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className='blog-list'>
              <div className='blog-item'>
                <div>
                  <img className='blog-img' src={blog1} alt="Blog thumbnail" />
                  <div className='blog-wrapper'>
                    <h5 className='blog-item-title'>How To Make Web Tempates</h5>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>
                <a className='blog-link' href="#">
                    Learn more 
                    <img src={gt} alt="Greater than icon" />
                </a>
              </div>
              <div className='blog-item'>
                <div>
                  <img className='blog-img' src={blog2} alt="Blog thumbnail" />
                  <div className='blog-wrapper'>
                    <h5 className='blog-item-title'>Make Business Card</h5>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>
                <a className='blog-link' href="#">
                    Learn more 
                    <img src={gt} alt="Greater than icon" />
                </a>
              </div>
              <div className='blog-item'>
                <div>
                  <img className='blog-img' src={blog3} alt="Blog thumbnail" />
                  <div className='blog-wrapper'>
                    <h5 className='blog-item-title'>How to make Flyer Design</h5>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>  
                <a className='blog-link' href="#">
                  Learn more 
                  <img src={gt} alt="Greater than icon" />
                </a>
              </div>
            </div>
          </section> 
    )
}   

export default Blog;
