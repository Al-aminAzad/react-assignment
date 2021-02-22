const ContactForm = () => {
  return (
    <div className="tm-container-inner-2 tm-contact-section">
      <div className="row">
        <div className="col-md-6">
          <form action="" method="POST" className="tm-contact-form">
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Name" required="" />
            </div>

            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Email" required="" />
            </div>

            <div className="form-group">
              <textarea rows="5" name="message" className="form-control" placeholder="Message" required=""></textarea>
            </div>

            <div className="form-group tm-d-flex">
              <button type="submit" className="tm-btn tm-btn-success tm-btn-right">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="tm-address-box">
            <h4 className="tm-info-title tm-text-success">Our Address</h4>
            <address>
              180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550
            </address>
            <a href="tel:080-090-0110" className="tm-contact-link">
              <i className="fas fa-phone tm-contact-icon"></i>080-090-0110
            </a>
            <a href="mailto:info@company.co" className="tm-contact-link">
              <i className="fas fa-envelope tm-contact-icon"></i>info@company.co
            </a>
            <div className="tm-contact-social">
              <a href="https://fb.com/templatemo" className="tm-social-link">
                <i className="fab fa-facebook tm-social-icon"></i>
              </a>
              <a href="w" className="tm-social-link">
                <i className="fab fa-twitter tm-social-icon"></i>
              </a>
              <a href="w" className="tm-social-link">
                <i className="fab fa-instagram tm-social-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
