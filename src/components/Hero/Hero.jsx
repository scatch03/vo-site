import { useEffect, useState } from 'react';
import photo from '../../assets/me3.png';
import arrowRight from '../../assets/rarrow.svg';
import triangle from '../../assets/triangle.svg';
import styles from './Hero.module.scss';
import { cn } from '../../utils/cn';

const FULL_TITLE = "I'm Oleksandr Vorona\nSoftware Developer";
const ACCENT_WORD = 'Software';

const Hero = () => {
    const [typedChars, setTypedChars] = useState(0);
    const [isAccentRevealDone, setIsAccentRevealDone] = useState(false);

    useEffect(() => {
      if (typedChars >= FULL_TITLE.length) {
        return undefined;
      }

      const timerId = window.setTimeout(() => {
        setTypedChars((previous) => Math.min(previous + 1, FULL_TITLE.length));
      }, 75);

      return () => {
        window.clearTimeout(timerId);
      };
    }, [typedChars]);

    useEffect(() => {
      if (typedChars < FULL_TITLE.length || isAccentRevealDone) {
        return undefined;
      }

      const timerId = window.setTimeout(() => {
        setIsAccentRevealDone(true);
      }, 1000);

      return () => {
        window.clearTimeout(timerId);
      };
    }, [typedChars, isAccentRevealDone]);

    const typedTitle = FULL_TITLE.slice(0, typedChars);
    const [typedFirstLine = '', typedSecondLine = ''] = typedTitle.split('\n');
    const hasSecondLineStarted = typedTitle.includes('\n');
    const secondLineTailMatch = typedSecondLine.match(/(\S+)\s*$/);
    const secondLineTailStartIndex = secondLineTailMatch?.index ?? typedSecondLine.length;
    const secondLineHead = typedSecondLine.slice(0, secondLineTailStartIndex);
    const secondLineTail = typedSecondLine.slice(secondLineTailStartIndex);
    const accentHead = secondLineHead.slice(0, Math.min(secondLineHead.length, ACCENT_WORD.length));
    const normalHead = secondLineHead.slice(accentHead.length);
    const accentTailLength = Math.max(
      0,
      Math.min(secondLineTail.length, ACCENT_WORD.length - accentHead.length),
    );
    const accentTail = secondLineTail.slice(0, accentTailLength);
    const normalTail = secondLineTail.slice(accentTail.length);
    const typedAccentClassName = cn(
      styles,
      `hero__title-accent${isAccentRevealDone ? ' hero__title-accent--selected' : ''}`,
    );

    return (
        <header id="home" className={cn(styles, 'hero')}>
            <div className={cn(styles, 'hero__shape hero__shape--circle-yellow-1')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--circle-yellow-2')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--circle-green-1')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--circle-green-2')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--square-blue-1')}></div>
            <div className={cn(styles, 'hero__shape hero__shape--square-yellow-1')}></div>
            <img src={triangle} className={cn(styles, 'hero__triangle')}></img>

            <div className={cn(styles, 'hero__content')}>
              <h1 className={cn(styles, 'hero__title')} aria-label={FULL_TITLE.replace('\n', ' ')}>
                <span className={cn(styles, 'hero__title-reserve')} aria-hidden="true">
                  I&apos;m Oleksandr Vorona
                  <br />
                  <span className={cn(styles, 'hero__title-accent')}>Software</span>{' '}
                  <span className={cn(styles, 'hero__title-tail-nowrap')}>
                    Developer
                    <span className={cn(styles, 'hero__cursor hero__cursor--reserve')} aria-hidden="true">|</span>
                  </span>
                </span>
                <span className={cn(styles, 'hero__title-typed')} aria-hidden="true">
                  {typedFirstLine}
                  {!hasSecondLineStarted && <span className={cn(styles, 'hero__cursor')} aria-hidden="true">|</span>}
                  {hasSecondLineStarted && (
                    <>
                      <br />
                      {accentHead && <span className={typedAccentClassName}>{accentHead}</span>}
                      {normalHead}
                      <span className={cn(styles, 'hero__title-tail-nowrap')}>
                        {accentTail && <span className={typedAccentClassName}>{accentTail}</span>}
                        {normalTail}
                        <span className={cn(styles, 'hero__cursor')} aria-hidden="true">|</span>
                      </span>
                    </>
                  )}
                </span>
              </h1>
              <div className={cn(styles, 'hero__subtitle')}>
                with near 15 years of experience primarily in ad tech and marketing domains, specializing in RTB bidders and exchanges, high-load microservices, big data analytics and automatic AI-driven optimization solutions.
              </div>
              <a className={cn(styles, 'hero__button')} href="#leave-message">
                Get in touch <img src={arrowRight} alt="arrow right" />
              </a>
            </div>
            <img className={cn(styles, 'hero__image')} src={photo} alt="Developer photo" />
        </header>
    )
}   

export default Hero;    
