import Slider from 'react-slick';
import asaw from '../../assets/asaw.png';
import pgi from '../../assets/pgi.jpg';
import jwt from '../../assets/jwt.png';
import gt from '../../assets/gt.svg';
import nplus1 from '../../assets/nplus1.jpg';
import styles from './Blog.module.scss';
import { cn } from '../../utils/cn';


const Blog = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
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

    const blogPosts = [
      {
        image: nplus1,
        title: 'N+1 Issue in Hibernate: Why It Happens and How to Fix It',
        text: 'Learn how lazy loading creates N+1 queries, how to detect it in logs, and when to use fetch join, EntityGraph, batch fetching, or DTO projections.',
        href: '/blog/n-plus-one-hibernate',
      },
      {
        image: asaw,
        title: 'Async/Await in JavaScript: Patterns and Pitfalls',
        text: 'Understand event loop behavior, sequential vs parallel awaits, cancellation, and robust error handling for real production code.',
        href: '/blog/async-await-javascript',
      },
      {
        image: pgi,
        title: 'Types of PostgreSQL Indexes: When to Use Each One',
        text: 'A practical guide to B-Tree, Hash, GIN, GiST, BRIN, and SP-GiST with SQL examples, query patterns, and EXPLAIN-based validation.',
        href: '/blog/postgresql-index-types',
      },
      {
        image: jwt,
        title: 'JWT Authentication in Spring Boot: End-to-End Guide',
        text: 'Build secure stateless auth with Spring Security 6, JWT filters, access and refresh tokens, and production-ready hardening practices.',
        href: '/blog/jwt-spring-boot',
      },
    ];

    return (
       <section id='blog' className={cn(styles, 'blog')}>
            <h3 className={cn(styles, 'blog__title')}>Blog</h3>
            <p className={cn(styles, 'blog__description')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <div className={cn(styles, 'blog__carousel')}>
              <Slider {...settings} className={cn(styles, 'blog__slider')}>
                {blogPosts.map(({ image, title, text, href }) => (
                  <div key={href} className={cn(styles, 'blog__slide')}>
                    <article className={cn(styles, 'blog__item')}>
                      <div>
                        <img className={cn(styles, 'blog__image')} src={image} alt="Blog thumbnail" />
                        <div className={cn(styles, 'blog__wrapper')}>
                          <h5 className={cn(styles, 'blog__item-title')}>{title}</h5>
                          <p className={cn(styles, 'blog__text')}>{text}</p>
                        </div>
                      </div>
                      <a className={cn(styles, 'blog__link')} href={href}>
                        Learn more
                        <img src={gt} alt="Greater than icon" />
                      </a>
                    </article>
                  </div>
                ))}
              </Slider>
            </div>
          </section> 
    )
}   

export default Blog;
