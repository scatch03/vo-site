import asaw from '../../assets/asaw.png';
import pgi from '../../assets/pgi.jpg';
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
                  <img className={cn(styles, 'blog__image')} src={asaw} alt="Blog thumbnail" />
                  <div className={cn(styles, 'blog__wrapper')}>
                    <h5 className={cn(styles, 'blog__item-title')}>Async/Await in JavaScript: Patterns and Pitfalls</h5>
                    <p className={cn(styles, 'blog__text')}>Understand event loop behavior, sequential vs parallel awaits, cancellation, and robust error handling for real production code.</p>
                  </div>
                </div>
                <a className={cn(styles, 'blog__link')} href="/blog/async-await-javascript">
                    Learn more 
                    <img src={gt} alt="Greater than icon" />
                </a>
              </div>
              <div className={cn(styles, 'blog__item')}>
                <div>
                  <img className={cn(styles, 'blog__image')} src={pgi} alt="Blog thumbnail" />
                  <div className={cn(styles, 'blog__wrapper')}>
                    <h5 className={cn(styles, 'blog__item-title')}>Types of PostgreSQL Indexes: When to Use Each One</h5>
                    <p className={cn(styles, 'blog__text')}>A practical guide to B-Tree, Hash, GIN, GiST, BRIN, and SP-GiST with SQL examples, query patterns, and EXPLAIN-based validation.</p>
                  </div>
                </div>  
                <a className={cn(styles, 'blog__link')} href="/blog/postgresql-index-types">
                  Learn more 
                  <img src={gt} alt="Greater than icon" />
                </a>
              </div>
            </div>
          </section> 
    )
}   

export default Blog;
