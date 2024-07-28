const Footer = () => {
  return (
    <>
      <footer
        className="navbar navbar-expand-lg bg-dark py-lg-4 py-1 fixed-bottom text-light d-flex justify-content-center gap-3"
        data-bs-theme="dark"
      >
        <div>
          <span className="rounded-5 fw-bold fs-6">
            <span className="text-primary">{`<M />`}</span>
            ABDALLAH &copy; 2024 All right reserved
          </span>
        </div>
        <div className="links">
          <a
            className="btn btn-outline-primary m-2 rounded-5"
            href="https://www.linkedin.com/in/mohamedabdallah17/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="btn btn-outline-primary m-2 rounded-5"
            href="https://github.com/mohamed17-a"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="btn btn-outline-primary m-2 rounded-5"
            href="https://leetcode.com/u/MoAbdallah17/"
            target="_blank"
          >
            <i className="cib-leetcode"></i>{" "}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
