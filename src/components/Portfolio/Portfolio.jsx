import greenshopPreview from '../../assets/greenshop-preview.png';
import sitePreview from '../../assets/site-preview.png';
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
        A small selection of project examples illustrating different types of completed work.
      </p>
      <div className={cn(styles, 'portfolio__grid')}>
        <a
          className={cn(styles, 'portfolio__image-link')}
          href='https://scatch03.github.io/greenshop/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={greenshopPreview}
            className={cn(styles, 'portfolio__image portfolio__image--framed-preview portfolio__image--cover-preview')}
            alt='GreenShop Portfolio Preview'
          />
        </a>
        <a
          className={cn(styles, 'portfolio__image-link')}
          href='https://scatch03.github.io/site/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={sitePreview}
            className={cn(styles, 'portfolio__image portfolio__image--framed-preview portfolio__image--cover-preview')}
            alt='Education Site Portfolio Preview'
          />
        </a>
        <img src={p3} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p4} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p5} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
        <img src={p6} className={cn(styles, 'portfolio__image')} alt="Portfolio Icon" />
      </div>
    </section>
  );
};

export default Portfolio;
