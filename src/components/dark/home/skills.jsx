import React from 'react';
import data from '@/data/home/skills.json';
function Skills() {
  return (
    <div
      className="sec-box skills section-padding bord-thin-bottom"
      data-scroll-index="2"
    >
      <div className="row">
        <div className="col-lg-4 valign">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title opacity-7 mb-15">MY SKILLS</h6>
            <h3>
              <span className="main-color">Skills</span> & Technologies
            </h3>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="item mb-30">
                  <div className="d-flex align-items-center mb-30">
                    <div className="mr-30">
                      <div className="img icon-img-40 d-flex align-items-center justify-content-center">
                        <i className={item.icon} style={{color: item.color, fontSize: '24px'}}></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fz-18">{item.title}</h6>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <span className="progres" data-value={item.persent}></span>
                  </div>
                  <span className="value">{item.persent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
