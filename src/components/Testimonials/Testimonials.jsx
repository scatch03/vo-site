import ClientsCarousel from '../ClientsCarousel/ClientsCarousel';
import styles from './Testimonials.module.scss';
import { cn } from '../../utils/cn';


const Testimonials = () => {
    return (
        <section id='testimonials' className={cn(styles, 'testimonials')}>
            <h3 className={cn(styles, 'testimonials__title')}>Recommendations</h3>
            <p className={cn(styles, 'testimonials__description')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias perferendis explicabo, corrupti tempora maiores quaerat odit voluptas recusandae totam doloribus.</p>
            <ClientsCarousel />
          </section>
    )
}

export default Testimonials;    
