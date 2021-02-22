import Footer from '../main-body/footer';
import ContactForm from './contactForm';

const ContactBody = () => {
  return (
    <div>
      <main>
        <header className="row tm-welcome-section">
          <h2 className="col-12 text-center tm-section-title">Contact Page</h2>
          <p className="col-12 text-center">
            You may use{' '}
            <a rel="nofollow" href="https://www.ltcclock.com/downloads/simple-contact-form/" target="">
              Simple Contact Form
            </a>{' '}
            to send email to your inbox. You can modify and use this template for your website. Header image has a
            parallax effect. Total 3 HTML pages included in this template.
          </p>
        </header>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
export default ContactBody;
