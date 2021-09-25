import React, { Component } from "react";
import "../Footer/Footer.scss"
export class Footer extends Component {
  render() {
    return <div>
      <footer>
        <div className="footer__content container">
          <div className="row footer__top">
            <div className="col-lg-4 col-md-6 footer__left">
              <h5 className="footer__title">tix</h5>
              <div className="row">
                <div className="col-12 col-lg-6 footer__top--left">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Brand Guidelines</a></li>
                  </ul>
                </div>
                <div className="col-lg-6 footer__top--right">
                  <ul>
                    <li><a href="#">Thỏa thuận sử dụng</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 footer__center">
              <h5 className="footer__title">đối tác</h5>
              <div className="row">
                <div className="footer__list--image col-12">
                  <a href><img src="./img/cgv.png" alt /></a>
                  <a href><img src="./img/bhd.png" alt /></a>
                  <a href><img src="./img/galaxycine.png" alt /></a>
                  <a href><img src="./img/cinestar.png" alt /></a>
                  <a href><img src="./img/404b8c4b80d77732e7426cdb7e24be20.png" alt /></a>
                </div>
                <div className="footer__list--image col-12">
                  <a href><img src="./img/megags.png" alt /></a>
                  <a href><img src="./img/77807d96b5048f1d79f45d9d7d3f6a3a.png" alt /></a>
                  <a href><img src="./img/9b240f96a233bb43203ee514a21a6004.png" alt /></a>
                  <a href><img src="./img/TOUCH.png" alt /></a>
                  <a href><img src="./img/cnx.jpg" alt /></a>
                </div>
                <div className="footer__list--image col-12">
                  <a href><img src="./img/STARLIGHT.png" alt /></a>
                  <a href><img src="./img/dcine.png" alt /></a>
                  <a href><img src="./img/zalopay_icon.png" alt /></a>
                  <a href><img src="./img/payoo.jpg" alt /></a>
                  <a href><img src="./img/VCB.png" alt /></a>
                </div>
                <div className="footer__list--image col-12">
                  <a href><img src="./img/AGRIBANK.png" alt /></a>
                  <a href><img src="./img/VIETTINBANK.png" alt /></a>
                  <a href><img src="./img/IVB.png" alt /></a>
                  <a href><img src="./img/123go.png" alt /></a>
                  <a href><img src="./img/laban.png" alt /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 footer__right">
              <div className="row">
                <div className="col-lg-6 footer__app">
                  <h5 className="footer__title">mobile app</h5>
                  <div className="row">
                    <div className="footer__list--icon col-12">
                      <a href><img src="./img/apple-logo.png" alt /></a>
                      <a href><img src="./img/android-logo.png" alt /></a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6 footer__social">
                  <h5 className="footer__title ml-3">social</h5>
                  <div className="row">
                    <div className="footer__list--social col-12">
                      <a href><img src="./img/facebook-logo.png" alt /></a>
                      <a href><img src="./img/zalo-logo.png" alt /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer__bot">
            <div className="col-12 col-lg-1 mb-3">
              <img src="./img/zion-logo.jpg" alt />
            </div>
            <div className="col-12 col-lg-9 footer__info mb-3">
              <h5 className="footer__title">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h5>
              <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
              <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
              <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí
                Minh cấp.</p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
              <p>Email: <a href>support@tix.vn</a></p>
            </div>
            <div className="col-12 col-lg-2 mb-3">
              <a href><img className="image" src="./img/d1e6bd560daa9e20131ea8a0f62e87f8.png" alt /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
  }
}

export default Footer;
