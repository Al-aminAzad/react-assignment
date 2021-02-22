import FoodCategory from './category';
import FoodDescription from './foodDescription';
import FooterPage from './footer';
import Gallary from './gallary';

const MainBody = () => {
  return (
    <div>
      <main>
        <header className="row tm-welcome-section">
          <h2 className="col-12 text-center tm-section-title">Welcome to Simple House</h2>
          <p className="col-12 text-center">
            Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to
            download, edit and use this TemplateMo layout for your commercial or non-commercial websites.
          </p>
        </header>
        {/* Food category */}
        <FoodCategory />
        <Gallary />
        <FoodDescription />
      </main>
      <FooterPage/>
    </div>
  );
};

export default MainBody;
