import { useState } from 'react';
import location from '../../assets/location.svg';
import emailme from '../../assets/emailme.svg';
import mobile from '../../assets/mobile.svg';
import styles from './Contact.module.scss';
import { cn } from '../../utils/cn';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000').replace(/\/$/, '');

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: 'idle', message: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.error || 'Failed to send message');
      }

      setSubmitStatus({ type: 'success', message: 'Message sent successfully.' });
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message || 'Failed to send message' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contacts' className={cn(styles, 'contact')}>
      <div id='leave-message' className={cn(styles, 'contact__form-container')}>
        <h2 className={cn(styles, 'contact__title')}>Leave a message</h2>
        <form className={cn(styles, 'contact__form')} onSubmit={handleSubmit}>
          <label htmlFor='name'>Your Full Name ( Required )</label>
          <input id='name' type='text' name='name' value={formData.name} onChange={handleInputChange} required />
          <label htmlFor='email'>Your Email ( Required )</label>
          <input id='email' type='email' name='email' value={formData.email} onChange={handleInputChange} required />
          <label htmlFor='subject'>Subject</label>
          <input id='subject' type='text' name='subject' value={formData.subject} onChange={handleInputChange} />
          <label htmlFor='message'>Your Message ( Required )</label>
          <textarea id='message' name='message' rows={5} value={formData.message} onChange={handleInputChange} required />
          <button type='submit' className={cn(styles, 'contact__send-btn')} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus.type !== 'idle' && (
            <p
              className={cn(
                styles,
                submitStatus.type === 'success' ? 'contact__submit-message--success' : 'contact__submit-message--error'
              )}
              role='status'
              aria-live='polite'
            >
              {submitStatus.message}
            </p>
          )}
        </form>
      </div>
      <div className={cn(styles, 'contact__info-container')}>
        <h2 className={cn(styles, 'contact__title')}>Contacts</h2>
        <div className={cn(styles, 'contact__info-box')}>
          <div className={cn(styles, 'contact__icon')} aria-hidden='true'>
            <img src={location} alt='Location Icon' />
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
          <div className={cn(styles, 'contact__icon')} aria-hidden='true'>
            <img src={emailme} alt='Email Icon' />
          </div>
          <div className={cn(styles, 'contact__info')}>
            <div className={cn(styles, 'contact__info-line')}>
              <div>Email:</div>
              <div>olexandrvorona@gmail.com</div>
            </div>
            <div className={cn(styles, 'contact__info-line')}>
              <div>WhatsApp:</div>
              <div>+380992713289</div>
            </div>
            <div className={cn(styles, 'contact__info-line')}>
              <div>Telegram:</div>
              <div>@ii_jochi</div>
            </div>
          </div>
        </div>
        <div className={cn(styles, 'contact__info-box')}>
          <div className={cn(styles, 'contact__icon')} aria-hidden='true'>
            <img src={mobile} alt='Phone Icon' />
          </div>
          <div className={cn(styles, 'contact__info')}>
            <div className={cn(styles, 'contact__info-line')}>
              <div>Office:</div>
              <div>+421 918131912</div>
            </div>
            <div className={cn(styles, 'contact__info-line')}>
              <div>Personal:</div>
              <div>+380992713289</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
