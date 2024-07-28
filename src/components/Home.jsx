import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import image from "../assets/HomeMohamedPicture.png";
const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <div className={`container overflow-hidden ${isMobile && "text-center"}`}>
        <div className="row">
          <div className="col-md-6 col-lg-6 pt-3 mt-md-5 animate__fadeInLeft">
            <span
              className="fs-4 rounded-1 mt-5 px-2"
              style={{ backgroundColor: "#0e4b81" }}
            >
              MOHAMED ABDALLAH
            </span>
            <br />
            <h1 className="mt-3 fs-1 py-1">
              Hay! I&apos;m Mohamed
              <br />A Front-End Developer
            </h1>
            <p className="mt-3 fs-3 py-1">
              Wanna build responsive websites
              <br />
              Using the latest technologies?
            </p>
            <Link to="/contact">
              <button className="btn btn-primary rounded-4 fs-5 px-lg-5 px-md-2 px-sm-0">
                Get In Touch <i className="bi bi-arrow-right"></i>
              </button>
            </Link>
            <a
              className="btn btn-primary border-info ms-lg-4 ms-md-1 ms-1  rounded-5"
              href="https://www.linkedin.com/in/mohamedabdallah17/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="btn btn-dark border-danger ms-lg-4 ms-md-1  ms-1 rounded-5"
              href="https://github.com/mohamed17-a"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="btn btn-dark border-warning ms-lg-4 ms-md-1 ms-1  rounded-5"
              href="https://leetcode.com/u/MoAbdallah17/"
              target="_blank"
            >
              <i className="cib-leetcode"></i>
            </a>
          </div>
          <div className="col-md-6 col-lg-6 animate__fadeInRight overflow-hidden">
            <img src={image} alt="Mohamed's Image" className="h-100 w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
