import { useMediaQuery } from "react-responsive";
import image from "../assets/MohamedPortrait.jpg";
import useInView from "../hooks/useInView";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  return (
    <div
      className={`container overflow-hidden py-5 ${isMobile && "text-center"}`}
    >
      <div className="row align-items-center">
        <div
          ref={leftRef}
          className={`col-md-6 pt-3 mt-md-3 ${
            leftInView
              ? "animate__animated animate__fadeInLeft"
              : "pre-animate"
          }`}
        >
          <span
            className="fs-4 rounded-1 px-2"
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
          <a
            href="#contact"
            className="btn btn-primary rounded-4 fs-5 px-lg-5 px-md-2 px-sm-0"
          >
            Get In Touch <i className="bi bi-arrow-right"></i>
          </a>
          <a
            className="btn btn-primary border-info ms-lg-4 ms-md-1 ms-1 rounded-5"
            href="https://www.linkedin.com/in/mohamedabdallah17/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="btn btn-dark border-danger ms-lg-4 ms-md-1 ms-1 rounded-5"
            href="https://github.com/mohamed17-a"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="btn btn-dark border-warning ms-lg-4 ms-md-1 ms-1 rounded-5"
            href="https://leetcode.com/u/MoAbdallah17/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="cib-leetcode"></i>
          </a>
        </div>
        <div
          ref={rightRef}
          className={`col-md-6 pt-3 mt-md-3 d-flex justify-content-center ${
            rightInView
              ? "animate__animated animate__fadeInRight"
              : "pre-animate"
          }`}
        >
          <img src={image} alt="Mohamed Abdallah" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
