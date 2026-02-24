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
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
            <h2>Let&apos;s Connect !</h2>
          </div>
        </div>
        <div
          className="row pb-3 px-3 rounded-3"
          style={{ backgroundColor: "var(--main-transparent)" }}
        >
          <div className="col-md-3 mt-3 rounded-3 d-flex flex-column justify-content-between">
            <div>
              <span
                className="badge mb-1"
                style={{ backgroundColor: "var(--main-light)" }}
              >
                Write An Email
              </span>
              <p>
                <a
                  href="mailto:moabdallah7.office@gmail.com"
                  className="text-light text-decoration-none text-break"
                >
                  moabdallah7.office@gmail.com
                </a>
              </p>
              <span
                className="badge mb-1"
                style={{ backgroundColor: "var(--main-light)" }}
              >
                Location
              </span>
              <p className="text-light">Cairo, Egypt</p>
            </div>
            <div className="animate__animated animate__headShake fs-1 text-center mt-3">
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
                  autoComplete="name"
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
                  autoComplete="email"
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
                  className="form-control"
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
