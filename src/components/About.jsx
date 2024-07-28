const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 pt-3 mt-md-5">
            <span
              className="fs-5 rounded-1 mt-5 px-3"
              style={{ backgroundColor: "var(--main-light)" }}
            >
              ABOUT ME
            </span>
          </div>
        </div>
        <div className="row mb-5 pb-5">
          <div className="col-md-4 col-lg-4 pt-3 my-md-5">
            <h1 className="text-break fs-1 fw-bolder">
              I AM MOHAMED
              <span className="text-primary"> A FRONT-END </span>
              WEB DEVELOPER
            </h1>
            <p className="fw-bolder">
              A software developer who graduated from FCAI-HU, I have a wide set
              of technical and professional skills in web development, including
              proficiency in HTML, CSS, JavaScript, Node.js, Angular and
              React.js. My expertise extends to essential skills such as
              problem-solving, object-oriented programming (OOP), and Agile
              frameworks. Having completed my year of military service in
              December 2023. Now, I am a trainee at Yat Learning Centers, part
              of DEPI from MCIT.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 pt-3 my-md-5">
            <h1 className="text-center">Education</h1>
            <div className="border-start">
              {/* first education */}
              <span className="badge text-bg-primary fs-6 pe-3">
                Bachelor&apos;s Degree In Computer Science
              </span>
              <p className="px-2">
                <span className="fw-bolder">Helwan University</span> - 2018 /
                2022
              </p>
              <p className="px-1">
                I got my university degree with a very good overall grade and a
                cumulative GPA of 3.1/4.0.
              </p>
              {/* second education */}
              <span className="badge text-bg-primary fs-6 ">
                Professional Front-End Web Development Nano Degree
              </span>
              <p className="px-2">
                <span className="fw-bolder ">Udacity</span> - (09/2022) /
                (12/2022)
              </p>
              <p className="px-1">
                Credential: <br />
                <a
                  className="text-decoration-none text-light"
                  href="https://www.udacity.com/certificate/CMDAZQU6"
                  target="_blank"
                >
                  https://www.udacity.com/certificate/CMDAZQU6
                </a>
              </p>
              {/* third education */}
              <span className="badge text-bg-primary fs-6 pe-3">
                React Web Developer Trainee - DEPI
              </span>
              <p className="px-2">
                <span className="fw-bolder ">YAT Learning Center</span> -
                (03/2024) / (present)
              </p>
              <p className="px-1">
                A 6-months initiative from the Egyptian Ministry of
                Communications to learn how to develop front-end applications
                using React, and Node js.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 pt-3 mt-md-5 ps-4">
            <h1 className="text-center">Experience</h1>
            <div className="border-start">
              {/* first work experience */}
              <span className="badge text-bg-primary fs-6 ">
                Front-End developer - Intern
              </span>
              <p className="px-2">
                <span className="fw-bolder ">
                  ILLA Trucking & Logistics Solutions
                </span>{" "}
                <br />
                (08/2024) - (present)
              </p>
              <p className="px-1">
                A 3-months React web developement internship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
