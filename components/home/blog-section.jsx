import Link from "next/link";
import React from "react";
import blogItemsList from "../../data/blogs";
import "../../public/assets/images/tablet-01.png";

const BlogSection = () => {
  return (
    <>
      <section id="how-to-use" className="pt-100 ct-02 mt-100 content-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title mb-80">
                <h2 className="s-48 w-700">Effortless Emergency Readiness</h2>

                <p className="s-21 color--grey">
                  From sign-up to QR code generation, we make emergency
                  preparedness easy. Stay safe and secure with On Demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 ct-02 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="assets/images/step.jpeg"
                  alt="content-image"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="txt-block right-column wow fadeInLeft">
                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">1</div>
                    <span className="cbox-2-line"></span>
                  </div>

                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">Signup and Login</h5>
                    <p>
                      Users sign up on the website and log in to their
                      dashboard.
                    </p>
                  </div>
                </div>

                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">2</div>
                    <span className="cbox-2-line"></span>
                  </div>

                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">Fill Personal Details</h5>
                    <p>
                      Upon logging in, users are guided to fill in their
                      personal emergency details through a user-friendly form.
                    </p>
                  </div>
                </div>

                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">3</div>
                  </div>

                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">Generate QR Code</h5>
                    <p className="mb-0">
                      After completing the form, users can easily generate their
                      QR code, which is prominently displayed on their
                      dashboard.
                    </p>
                  </div>
                </div>

                <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">4</div>
                  </div>

                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">Download QR Code</h5>
                    <p className="mb-0">
                    Users can download their QR Code as PNG, PDF, and SVG file formats.
                    </p>
                  </div>
                </div>

                {/* <div className="cbox-2 process-step">
                  <div className="ico-wrap">
                    <div className="cbox-2-ico bg--theme color--white">5</div>
                  </div>

                  <div className="cbox-2-txt">
                    <h5 className="s-22 w-700">
                      Access ID Card and Health Page
                    </h5>
                    <p className="mb-0">
                      Additionally, users can view their personalized ID card
                      and health page directly on their dashboard, which
                      includes their QR code, photo, and other relevant details.{" "}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
