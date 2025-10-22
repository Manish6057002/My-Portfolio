import React from 'react';

function Profile() {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src="/assets/imgs/header/profile.jpg" alt="" />
                <span className="icon">
                  <i className="fab fa-react" style={{color: '#61DAFB', fontSize: '24px'}}></i>
                </span>
                <span className="icon">
                  <i className="fab fa-js-square" style={{color: '#000000', fontSize: '24px'}}></i>
                </span>
                <span className="icon">
                  <i className="fab fa-laravel" style={{color: '#FF2D20', fontSize: '24px'}}></i>
                </span>
                <span className="icon">
                  <i className="fab fa-envira" style={{color: '#4DB33D', fontSize: '24px'}}></i>
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>Manish Kashyap</h5>
                <p className="fz-13 text-u">Full Stack Developer</p>
              </div>
              <div className="social text-center mt-20">
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
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">Manish Kashyap</span>
            <span className="bord">
              Full Stack Developer <i></i>
            </span>{' '}
           
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>3</h2>
                  <p>
                    Years <br /> of Experance
                  </p>
                </div>
              </div>
              
              <div>
                <div className="butn-presv">
                  <a 
                    href="/assets/imgs/resume/Manish Kashyap.pdf" 
                    download="Manish_Kashyap_CV.pdf"
                    className="butn butn-md butn-bord radius-5 skew"
                  >
                    <span>Download C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
