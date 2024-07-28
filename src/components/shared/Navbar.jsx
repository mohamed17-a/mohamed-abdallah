import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
  const isDesktopOrLaptopOrtablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark py-md-3 py-sm-1"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand fs-5 fw-bold text-light" to="/">
            <span className="text-primary">{`<M />`}</span>ABDALLAH
          </Link>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-2 fw-bolder d-flex flex-row gap-4">
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/">
                  <i className="btn bi bi-house-fill"></i>
                  {isDesktopOrLaptopOrtablet && <span> HOME</span>}
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/about">
                  <i className="btn bi bi-file-person-fill"></i>
                  {isDesktopOrLaptopOrtablet && <span> ABOUT</span>}
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/projects">
                  <i className="btn bi bi-briefcase-fill"></i>
                  {isDesktopOrLaptopOrtablet && <span> PROJECTS</span>}
                </Link>
              </li>
              <span className="btn btn-primary fw-bold rounded-5 ms-3 px-md-3 px-1">
                <Link className="nav-link text-light" to="/contact">
                  LETS&apos; TALK <i className="bi-chat-dots-fill"></i>
                </Link>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
