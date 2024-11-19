/* skill -- name:display , key: refers to icon Class Name in CoreUI icons */
const skills = [
  { name: "HTML", key: "cib-html5" },
  { name: "CSS", key: "cib-css3" },
  { name: "Bootstrap", key: "cib-bootstrap" },
  { name: "JavaScript", key: "cib-js" },
  { name: "TypeScript", key: "cib-typescript" },
  { name: "React", key: "cib-react" },
  { name: "Postman", key: "cib-postman" },
  { name: "Angular", key: "cib-angular" },
  { name: "Jira Atlassian", key: "cib-atlassian" },
  { name: "Slack", key: "cib-slack" },
  { name: "Git", key: "cib-git" },
  { name: "Problem Solving", key: "cib-leetcode" },
  { name: "OOP", key: "cil-object-group" },
  { name: "Ant Design", key: "cil-object-group" },
  { name: "Next.js", key: "cib-next-js" },
];
const About = () => {
  return (
    <>
      <div className="container mb-4 overflow-hidden">
        <div className="row">
          <div className="col-md-3 col-lg-3 pt-3 mt-md-5">
            <span
              className="fs-5 rounded-1 mt-5 px-3"
              style={{ backgroundColor: "var(--main-light)" }}
            >
              ABOUT ME
            </span>
          </div>
          <div className="col-md-9 col-lg-9 pt-3 mt-md-5">
            <span className="badge text-bg-secondary fs-6 rounded-5 animate__fadeInLeft">
              Skills & Tools
            </span>
            {skills.map((s) => (
              <span
                key={s.key}
                className="badge text-bg-primary fw-bolder rounded-5 ms-2 animate__fadeInDown"
              >
                {s.name}
                <i className={`${s.key} ms-1 `}></i>
              </span>
            ))}
          </div>
        </div>
        <div className="row mb-5 pb-5">
          <div className="col-md-4 col-lg-4 pt-3 my-md-5 animate__fadeInLeft">
            <h1 className="text-break fs-1 fw-bolder">
              I AM MOHAMED
              <span className="text-primary"> A FRONT-END </span>
              WEB DEVELOPER
            </h1>
            <p className="fw-bolder">
              A software developer who graduated from FCAI-HU. I&apos;ve got a
              bedrock in web development, with proficiency and hands-on
              experience in HTML, CSS, JavaScript, React.js, Next.js, and
              Node.js. My expertise extends to essential skills such as
              problem-solving, object-oriented programming (OOP), and Agile
              frameworks. I&apos;m familiar with Angular, unit testing,
              express.js, MySQL, and MongoDB. Now, I graduated from the DEPI
              program provided by MCIT. I also worked as a front-end developer
              intern at ILLA Holding.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 pt-3 my-md-5 animate__zoomInUp">
            <h1 className="text-center">Education</h1>
            <div className="border-start">
              {/* first education */}
              <span className="badge text-bg-primary fs-6 pe-3 text-wrap">
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
              <span className="badge text-bg-primary fs-6 text-wrap">
                Professional Front-End Web Development Nano Degree
              </span>
              <p className="px-2">
                <span className="fw-bolder ">Udacity</span> - (09/2022) /
                (12/2022)
              </p>
              <p className="px-1">
                Credential: <br />
                <a
                  className="text-decoration-none text-light text-break"
                  href="https://www.udacity.com/certificate/CMDAZQU6"
                  target="_blank"
                >
                  https://www.udacity.com/certificate/CMDAZQU6
                </a>
              </p>
              {/* third education */}
              <span className="badge text-bg-primary fs-6 pe-3 text-wrap">
                React Web Developer Trainee - DEPI
              </span>
              <p className="px-2">
                <span className="fw-bolder ">YAT Learning Center</span> -
                (03/2024) / (10/2024)
              </p>
              <p className="px-1">
                I am a graduate of the React Web Developer track from the
                Digital Egypt Pioneers Initiative (DEPI). This program honed my
                expertise in HTML5, CSS3, JavaScript, and React.js, enabling me
                to build responsive and interactive web applications.
                Additionally, I gained back-end development knowledge using
                Node.js, Express.js, and MongoDB. The initiative also enhanced
                my business English communication skills, preparing me for
                professional roles in tech industries and collaborative
                environments
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 pt-3 mt-md-5 ps-3 animate__zoomInUp">
            <h1 className="text-center">Experience</h1>
            <div className="border-start">
              {/* first work experience */}
              <span className="badge text-bg-primary fs-6 ">
                Front-End developer - Intern
              </span>
              <p className="px-2">
                <span className="fw-bolder ">ILLA Holding</span> - (08/2024) /
                (11/2024)
              </p>
              <p className="px-1">
                Contributed to the codebase, enhancing functionality and user
                experience using Next.js and Ant Design. Collaborated closely
                with product managers, product designers, backend engineers, and
                QAs to ensure high-quality, industry-focused solutions.
                Experience in logistics and warehousing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
