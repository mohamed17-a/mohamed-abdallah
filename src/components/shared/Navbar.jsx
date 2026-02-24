import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isDesktopOrLaptopOrtablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <nav
      className="site-navbar navbar navbar-expand-lg sticky-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand fs-4 fw-bold text-light" href="#home">
          <span className="text-primary">{`<M />`}</span>ABDALLAH
        </a>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto fw-bolder d-flex flex-row gap-4 align-items-center">
            <li className="nav-item">
              <a className="nav-link text-light" href="#home">
                <i className="bi bi-house-fill"></i>
                {isDesktopOrLaptopOrtablet && <span> HOME</span>}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">
                <i className="bi bi-file-person-fill"></i>
                {isDesktopOrLaptopOrtablet && <span> ABOUT</span>}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">
                <i className="bi bi-briefcase-fill"></i>
                {isDesktopOrLaptopOrtablet && <span> PROJECTS</span>}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-primary fw-bold rounded-5 px-md-3 px-2"
                href="#contact"
              >
                LET&apos;S TALK <i className="bi-chat-dots-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
