import "./contact.css";
import { EnvelopeFill, GeoAltFill } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <GeoAltFill size={22} />
                <h4>Location:</h4>
                <p>Chennai, Tamil Nadu 600122, India</p>
              </div>

              <div className="email">
                <EnvelopeFill size={22} />
                <h4>Email:</h4>
                <p>contact@visheshdev.in</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="#"
              method="post"
              className="email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div> */}
              {/* <div className="text-center">
                <button type="submit">Send Message</button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
