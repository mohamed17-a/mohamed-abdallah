import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      Swal.fire("Oops!", "All fields are required!", "error");
      return;
    }
    // Sending email logic here
    emailjs
      .send(
        "service_a6rg2r4",
        "template_bw35tic",
        formData,
        "FuO7oCsc24pZbjrsV"
      )
      .then(() => {
        Swal.fire("Success!", "Email sent successfully!", "success");
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to send email.", "error");
      });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-md-12 w-100 mt-3 d-flex justify-content-center">
            <h1>Let&apos;s Connect !</h1>
          </div>
        </div>
        <div
          className="row pb-3 px-3 rounded-3"
          style={{ backgroundColor: "var(--main-transparent)" }}
        >
          <div className="col-md-3 mt-3 rounded-3">
            <div className="animate__fadeInUp">
              <span
                className="badge mb-1"
                style={{ backgroundColor: "var(--main-light)" }}
              >
                Write An Email
              </span>
              <p>
                <a
                  href="mailto:moabdallah7.office@gmail.com"
                  className="text-light text-decoration-none text-break break-word"
                >
                  moabdallah7.office@gmail.com
                </a>
              </p>
              <span
                className="badge mb-1"
                style={{ backgroundColor: "var(--main-light)" }}
              >
                Make A Call
              </span>
              <p>
                <a
                  href="#"
                  className="text-light text-decoration-none"
                >
                </a>
              </p>
            </div>
            <div className="animate__headShake fs-1 text-center">
              <i className="bi bi-send-fill"></i>
            </div>
          </div>
          <div
            className="col-md-9 mt-3 p-4 rounded-3"
            style={{ backgroundColor: "var(--main-light)" }}
          >
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <div className="input-group mb-2 required">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name*"
                  aria-label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  autoComplete="additional-name webauthn"
                />
              </div>
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <div className="input-group mb-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                  aria-label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  autoComplete="email webauthn"
                />
              </div>
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <div className="input-group mb-2">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject*"
                  aria-label="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <div className="input-group mb-2">
                <textarea
                  id="message"
                  name="message"
                  className="form-control no-resize"
                  aria-label="With textarea"
                  rows={4}
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                ></textarea>
              </div>
              <div className="input-group">
                <button
                  className="btn btn-primary form-control py-2 fw-bolder"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
