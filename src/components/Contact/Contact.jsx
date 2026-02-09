import location from '../../assets/location.svg'
import emailme from '../../assets/emailme.svg';
import mobile from '../../assets/mobile.svg';
import styles from './Contact.module.scss';
import { cn } from '../../utils/cn';



const Contact = () => {
    return (
        <section id='contacts' className={cn(styles, 'contact')}>
                    <div className={cn(styles, 'contact__form-container')}>
                      <h2 className={cn(styles, 'contact__title')}>Leave a message</h2>
                      <form className={cn(styles, 'contact__form')}>
                        <label htmlFor="name">Your Full Name ( Required )</label>
                        <input id="name" type="text" name="name" required />
                        <label htmlFor="email">Your Email ( Required )</label>
                        <input id="email" type="email" name="email" required />
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text" name="subject" />
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows={5} />
                        <button type="submit" className={cn(styles, 'contact__send-btn')}>
                          Send Message
                        </button>
                      </form>
                    </div>
                    <div className={cn(styles, 'contact__info-container')}>
                      <h2 className={cn(styles, 'contact__title')}>Contacts</h2>
                      <div className={cn(styles, 'contact__info-box')}>
                        <div className={cn(styles, 'contact__icon')} aria-hidden="true">
                          <img src={location} alt="Location Icon" />
                        </div>
                        <div className={cn(styles, 'contact__info')}>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Country:</div>
                            <div>Slovak Republic</div>
                          </div>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>City:</div>
                            <div>Bratislava</div>
                          </div>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Street:</div>
                            <div>Mlynske Nivy, 1889/5</div>
                          </div>
                        </div>
                      </div>
                      <div className={cn(styles, 'contact__info-box')}>
                        <div className={cn(styles, 'contact__icon')} aria-hidden="true">
                          <img src={emailme} alt="Email Icon" />
                        </div>
                        <div className={cn(styles, 'contact__info')}>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Email:</div>
                            <div>youremail@gmail.com</div>
                          </div>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Skype:</div>
                            <div>@yourusername</div>
                          </div>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Telegram:</div>
                            <div>@yourusername</div>
                          </div>
                        </div>
                      </div>
                      <div className={cn(styles, 'contact__info-box')}>
                        <div className={cn(styles, 'contact__icon')} aria-hidden="true">
                          <img src={mobile} alt="Phone Icon" />
                        </div>
                        <div className={cn(styles, 'contact__info')}>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Support Services:</div>
                            <div>15369</div>
                          </div>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Office:</div>
                            <div>+58 (021)356 587 235</div>
                          </div>
                          <div className={cn(styles, 'contact__info-line')}>
                            <div>Personal:</div>
                            <div>+58 (021)356 587 235</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>  
    )
}   

export default Contact; 
