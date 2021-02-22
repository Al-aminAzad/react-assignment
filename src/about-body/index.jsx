import PartnerIntro from './pertnerIntro';
import Footer from '../main-body/footer';

const AboutBody = () => {
  return (
    <div>
      <main>
        <header className="row tm-welcome-section">
          <h2 className="col-12 text-center tm-section-title">About Simple House</h2>
          <p className="col-12 text-center">
            This is about page of simple house template. You can modify and use this HTML template for your website.
            Total 3 HTML pages included in this template. Header image has a parallax effect.
          </p>
        </header>
        <PartnerIntro />
      </main>
      <Footer />
    </div>
  );
};
export default AboutBody;
