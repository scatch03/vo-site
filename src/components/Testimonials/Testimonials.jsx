import ClientsCarousel from '../ClientsCarousel/ClientsCarousel';
import styles from './Testimonials.module.scss';
import { cn } from '../../utils/cn';


const Testimonials = () => {
    return (
        <section id='testimonials' className={cn(styles, 'testimonials')}>
            <h3 className={cn(styles, 'testimonials__title')}>Testimonials</h3>
            <p className={cn(styles, 'testimonials__description')}>Trusted recommendations from founders and engineering leaders I’ve collaborated with on high-impact products, long-term delivery, and complex software initiatives.</p>
            <ClientsCarousel />
          </section>
    )
}

export default Testimonials;    
