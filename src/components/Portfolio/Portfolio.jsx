import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import p6 from '../../assets/p6.jpg';
import styles from './Portfolio.module.scss';
import { cn } from '../../utils/cn';

const Portfolio = () => {
  return (
    <section id='portfolio' className={cn(styles, 'portfolio')}>
      <h3 className={cn(styles, 'portfolio__title')}>Portfolio</h3>
      <p className={cn(styles, 'portfolio__description')}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo,
        corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.
      </p>
      <div className={cn(styles, 'portfolio__grid')}>
        <img src={p1} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p2} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p3} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p4} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p5} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p6} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
      </div>
    </section>
  );
};

export default Portfolio;
