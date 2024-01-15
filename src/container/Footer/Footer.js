import React from 'react';
import { div } from "react-router-dom";
function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row d-flex justify-content-between align-content-center">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4 className="text-white mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h4>
              <address className="text-white fs-6">
                  Ho Chi Minh City: 130 Nguyen Lam, Ward 3, Binh Thanh District
                </address>
                <a href="tel:+84 366480837" className="mt-3 d-block mb-1 text-white">
                  +84 366480837
                </a>
                <a
                  href="mailto: Baotoan198@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  Baotoan198@gmail.com
                </a>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4 className="text-white mb-4">CHÍNH SÁCH VÀ HỖ TRỢ</h4>
              <div className="text-white py-2 mp-1">
                  Quy định và hình thức thanh toán
                </div>
                <div className="text-white py-2 mp-1">
                  Chính sách và quy định chung
                </div>
                <div className="text-white py-2 mp-1">
                  Chính sách đổi/trả hành - hoàn tiền
                </div>
                <div className="text-white py-2 mp-1">
                  Chính sách bảo mật thông tin
                </div>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4 className="text-white mb-4">ACCOUNT</h4>
            <div className="footer-links d-flex flex-column">
                <div className="text-white py-2 mp-1">Search</div>
                <div className="text-white py-2 mp-1">About Us</div>
                <div className="text-white py-2 mp-1">Contact</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4 className="text-white mb-4">QUICK LINKS</h4>
            <div className="footer-links d-flex flex-column">
                <div className="text-white py-2 mp-1">Balo</div>
                <div className="text-white py-2 mp-1">Vali</div>
                <div className="text-white py-2 mp-1">Cắm Trại</div>
                <div className="text-white py-2 mp-1">Túi du lịch</div>
                <div className="text-white py-2 mp-1">Đồ đi biển</div>
              </div>
            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* div back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Bản quyền ©2023 Powered By Developer <i className="fa fa-heart-o" aria-hidden="true" />  <a href="https://colorlib.com" target="_blank"></a>
              {/* div back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;