import FirstOne from '../assets/img/gallery/01.jpg';
import Second from '../assets/img/gallery/02.jpg';
import Third from '../assets/img/gallery/03.jpg';
import Fourth from '../assets/img/gallery/04.jpg';
import Fifth from '../assets/img/gallery/05.jpg';
import Sixth from '../assets/img/gallery/06.jpg';
import Seventh from '../assets/img/gallery/07.jpg';
import Eighth from '../assets/img/gallery/08.jpg';

const Gallary = () => {
  return (
    <div className="row tm-gallery">
      {/* gallary page 1 */}
      <div id="tm-gallery-page-pizza" className="tm-gallery-page">
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={FirstOne} alt="" />
            <figcaption>
              <h4 className="tm-gallery-title">Fusce dictum finibus</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$45 / $55</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Second} alt="" />
            <figcaption>
              <h4 className="tm-gallery-title">Aliquam sagittis</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$65 / $70</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Third} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Sed varius turpis</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$30.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Fourth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Aliquam sagittis</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$25.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Fifth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Maecenas eget justo</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$80.25</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Sixth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Quisque et felis eros</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$20 / $40 / $60</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Seventh} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Sed ultricies dui</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$94</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Eighth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Donec porta consequat</h4>
              <p className="tm-gallery-description">
                Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
              </p>
              <p className="tm-gallery-price">$15</p>
            </figcaption>
          </figure>
        </article>
      </div>

      {/* gallary page 2 */}
      <div id="tm-gallery-page-salad" className="tm-gallery-page hidden">
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Fourth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Salad Menu One</h4>
              <p className="tm-gallery-description">
                Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique
              </p>
              <p className="tm-gallery-price">$25</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Third} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Second Title Salad</h4>
              <p className="tm-gallery-description">
                Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique
              </p>
              <p className="tm-gallery-price">$30</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Fifth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Third Salad Item</h4>
              <p className="tm-gallery-description">
                Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique
              </p>
              <p className="tm-gallery-price">$45</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={FirstOne} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Superior Salad</h4>
              <p className="tm-gallery-description">
                Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique
              </p>
              <p className="tm-gallery-price">$50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Eighth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Sed ultricies dui</h4>
              <p className="tm-gallery-description">
                Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique
              </p>
              <p className="tm-gallery-price">$55 / $60</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Seventh} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Maecenas eget justo</h4>
              <p className="tm-gallery-description">
                Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique
              </p>
              <p className="tm-gallery-price">$75</p>
            </figcaption>
          </figure>
        </article>
      </div>

      {/* gallary page 3 */}
      <div id="tm-gallery-page-noodle" className="tm-gallery-page hidden">
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Eighth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Noodle One</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="tm-gallery-price">$12.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Seventh} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Noodle Second</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="tm-gallery-price">$15.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Sixth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Third Soft Noodle</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="tm-gallery-price">$20.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Fifth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Aliquam sagittis</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="tm-gallery-price">$30.25</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Fourth} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Maecenas eget justo</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="tm-gallery-price">$35.50</p>
            </figcaption>
          </figure>
        </article>
        <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
          <figure>
            <img src={Third} alt="" className="img-fluid tm-gallery-img" />
            <figcaption>
              <h4 className="tm-gallery-title">Quisque et felis eros</h4>
              <p className="tm-gallery-description">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="tm-gallery-price">$40.50</p>
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
  );
};

export default Gallary;
