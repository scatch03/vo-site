import { useEffect, useState } from 'react';
import greenshopPreview from '../../assets/greenshop-preview.png';
import sitePreview from '../../assets/site-preview.png';
import legalPreview from '../../assets/legal-preview.png';
import taskboardPreview from '../../assets/taskboard-preview.png';
import bidderPreview from '../../assets/bidder-preview.png';
import stagesPreview from '../../assets/stages-preview.png';
import styles from './Portfolio.module.scss';
import { cn } from '../../utils/cn';

const Portfolio = () => {
  const [activePreview, setActivePreview] = useState(null);

  useEffect(() => {
    if (!activePreview) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActivePreview(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePreview]);

  const handleOpenPreview = (src, alt) => {
    setActivePreview({ src, alt });
  };

  const handleClosePreview = () => {
    setActivePreview(null);
  };

  const handleLightboxClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClosePreview();
    }
  };

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
        <a
          className={cn(styles, 'portfolio__image-link')}
          href='http://129.212.252.99'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={legalPreview} className={cn(styles, 'portfolio__image')} alt='Legal Website Portfolio Preview' />
        </a>
        <a
          className={cn(styles, 'portfolio__image-link')}
          href='http://129.212.252.99:8080'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={taskboardPreview}
            className={cn(styles, 'portfolio__image portfolio__image--framed-preview portfolio__image--cover-preview')}
            alt='Task Board Portfolio Preview'
          />
        </a>
        <button
          type='button'
          className={cn(styles, 'portfolio__image-button')}
          onClick={() => handleOpenPreview(bidderPreview, 'Bidder UI Portfolio Preview')}
          aria-label='Open Bidder UI Portfolio Preview'
        >
          <img src={bidderPreview} className={cn(styles, 'portfolio__image')} alt='Bidder UI Portfolio Preview' />
        </button>
        <button
          type='button'
          className={cn(styles, 'portfolio__image-button')}
          onClick={() => handleOpenPreview(stagesPreview, 'Stages Dashboard Portfolio Preview')}
          aria-label='Open Stages Dashboard Portfolio Preview'
        >
          <img src={stagesPreview} className={cn(styles, 'portfolio__image')} alt='Stages Dashboard Portfolio Preview' />
        </button>
      </div>
      {activePreview && (
        <div
          className={cn(styles, 'portfolio__lightbox')}
          role='dialog'
          aria-modal='true'
          aria-label={activePreview.alt}
          onClick={handleLightboxClick}
        >
          <button
            type='button'
            className={cn(styles, 'portfolio__lightbox-close')}
            onClick={handleClosePreview}
            aria-label='Close portfolio preview'
          >
            x
          </button>
          <img src={activePreview.src} className={cn(styles, 'portfolio__lightbox-image')} alt={activePreview.alt} />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
