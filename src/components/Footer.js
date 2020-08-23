import React from 'react';
import '../App.css';
const Footer = () => {
  return (
      <footer className="page-footer font-small bg-blue pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
              <p>You can contact me on naveedshahid91@gmail.com</p>
            </div>
            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Online Shopping Store</h5>
              <p>Built with 💕 by <a href="https://github.com/naveedshahid786"><span className="text-success">Naveed Shahid</span> </a>© 2020 Copyright</p>
            </div>
          </div>
        </div>
      </footer>
  );
};
export default Footer;