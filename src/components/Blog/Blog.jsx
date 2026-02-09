import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import gt from '../../assets/gt.svg';
import nplus1 from '../../assets/nplus1.jpg';
import styles from './Blog.module.scss';
import { cn } from '../../utils/cn';


const Blog = () => {
    return (
       <section id='blog' className={cn(styles, 'blog')}>
            <h3 className={cn(styles, 'blog__title')}>Blog</h3>
            <p className={cn(styles, 'blog__description')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className={cn(styles, 'blog__list')}>
              <div className={cn(styles, 'blog__item')}>
                <div>
                  <img className={cn(styles, 'blog__image')} src={nplus1} alt="Blog thumbnail" />
                  <div className={cn(styles, 'blog__wrapper')}>
                    <h5 className={cn(styles, 'blog__item-title')}>N+1 Issue in Hibernate: Why It Happens and How to Fix It</h5>
                    <p className={cn(styles, 'blog__text')}>Learn how lazy loading creates N+1 queries, how to detect it in logs, and when to use fetch join, EntityGraph, batch fetching, or DTO projections.</p>
                  </div>
                </div>
                <a className={cn(styles, 'blog__link')} href="/blog/n-plus-one-hibernate">
                    Learn more 
                    <img src={gt} alt="Greater than icon" />
                </a>
              </div>
              <div className={cn(styles, 'blog__item')}>
                <div>
                  <img className={cn(styles, 'blog__image')} src={blog2} alt="Blog thumbnail" />
                  <div className={cn(styles, 'blog__wrapper')}>
                    <h5 className={cn(styles, 'blog__item-title')}>Make Business Card</h5>
                    <p className={cn(styles, 'blog__text')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>
                <a className={cn(styles, 'blog__link')} href="#">
                    Learn more 
                    <img src={gt} alt="Greater than icon" />
                </a>
              </div>
              <div className={cn(styles, 'blog__item')}>
                <div>
                  <img className={cn(styles, 'blog__image')} src={blog3} alt="Blog thumbnail" />
                  <div className={cn(styles, 'blog__wrapper')}>
                    <h5 className={cn(styles, 'blog__item-title')}>How to make Flyer Design</h5>
                    <p className={cn(styles, 'blog__text')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ducimus ea repellat officiis expedita modi eius.</p>
                  </div>
                </div>  
                <a className={cn(styles, 'blog__link')} href="#">
                  Learn more 
                  <img src={gt} alt="Greater than icon" />
                </a>
              </div>
            </div>
          </section> 
    )
}   

export default Blog;
