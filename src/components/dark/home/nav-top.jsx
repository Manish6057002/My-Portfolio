import React from 'react';

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="#0" className="logo">
              <h3 style={{color: '#fff', fontWeight: 'bold', margin: 0}}>Manish Kashyap</h3>
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a href="#0">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#0">
                <i className="fab fa-github"></i>
              </a>
              <a href="#0">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#0">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:manish.21kashyap123@gmail.com">
                  <span className="sub-title fz-12">manish.21kashyap123@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
