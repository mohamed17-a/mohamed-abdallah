const Footer = () => {
  return (
    <footer className="site-footer py-5 text-light" data-bs-theme="dark">
      <div className="container d-flex justify-content-center align-items-center gap-4 flex-wrap">
        <div>
          <span className="fw-bold fs-5">
            <span className="text-primary">{`<M />`}</span>
            ABDALLAH
          </span>
          <p className="mb-0 mt-1 text-secondary small">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
        <div className="links">
          <a
            className="btn btn-outline-primary m-2 rounded-5"
            href="https://www.linkedin.com/in/mohamedabdallah17/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="btn btn-outline-primary m-2 rounded-5"
            href="https://github.com/mohamed17-a"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="btn btn-outline-primary m-2 rounded-5"
            href="https://leetcode.com/u/MoAbdallah17/"
            target="_blank"
            rel="noreferrer"
            title="LeetCode"
          >
            <i className="cib-leetcode"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
