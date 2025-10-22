'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import projectsData from '@/data/home/projects.json';

function ProjectView() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id') || 'skyhightrip';
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];
  
  // Find current project index
  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  
  // Get next and previous projects
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];
  return (
    <section className="sec-box project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="img mb-80">
            <img
              src={project.mainImage}
              alt={project.title}
              className="radius-5"
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h3 className="mb-15 fw-500">{project.title}</h3>
                <p>
                  {project.description}
                </p>
                <div className="mt-30">
                  <h6 className="mb-15 line-height-28">
                    Key Features & Technologies Used
                  </h6>
                  <p>
                    This project showcases modern web development practices and user-centered design principles.
                  </p>
                  <ul className="rest list-arrow mt-50">
                    {project.features.map((feature, index) => (
                      <li key={index} className={index > 0 ? "mt-20" : ""}>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">{feature}</h6>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info sub-bg" id="sticky_item">
                <ul>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-calendar-alt mr-10"></i> Date :
                    </span>
                    <p>{project.date}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-list-ul mr-10"></i> Categories :
                    </span>
                    <p>{project.category}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-user mr-10"></i> Client :
                    </span>
                    <p>{project.client}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-code mr-10"></i> Technologies :
                    </span>
                    <p>{project.technologies.join(', ')}</p>
                  </li>
                  <li>
                    <span className="sub-title">
                      <i className="fas fa-globe mr-10"></i> Website :
                    </span>
                    <p><a href={project.website} target="_blank" rel="noopener noreferrer" className="main-color">{project.website}</a></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="imgs mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="col-md-6">
                  <div className="img sm-mb30">
                    <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="next-prev">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
              <div className="prev">
                <h6 className="sub-title">
                  <Link href={`/dark/works/single-project?id=${prevProject.id}`}>
                    <i className="fas fa-long-arrow-alt-left"></i> {prevProject.title}
                  </Link>
                </h6>
              </div>
              <div className="next ml-auto">
                <h6 className="sub-title">
                  <Link href={`/dark/works/single-project?id=${nextProject.id}`}>
                    {nextProject.title} <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;
