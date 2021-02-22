import Nav from '../nav'

import HouseBox from '../../assets/img/simple-house-logo.png';
import HouseLogo from '../../assets/img/simple-house-01.jpg';

const MainHeader =()=>{
    return (
        <div className="placeholder">
          <div className="parallax-window" data-parallax="scroll" data-image-src={HouseLogo}>
            <div className="tm-header">
              <div className="row tm-header-inner">
                <div className="col-md-6 col-12">
                  <img src={HouseBox} alt="Logo" className="tm-site-logo" />
                  <div className="tm-site-text-box">
                    <h1 className="tm-site-title">Simple House</h1>
                    <h6 className="tm-site-description">new restaurant template</h6>
                  </div>
                </div>
                {/* Navbar */}
                <Nav />
              </div>
            </div>
          </div>
        </div>
    )
}
export default MainHeader