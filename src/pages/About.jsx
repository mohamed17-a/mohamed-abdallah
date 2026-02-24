/* skill -- name:display , key: CoreUI icon class name */
const skills = [
  { name: "HTML",             key: "cib-html5" },
  { name: "CSS",              key: "cib-css3" },
  { name: "JavaScript",       key: "cib-js" },
  { name: "TypeScript",       key: "cib-typescript" },
  { name: "React",            key: "cib-react" },
  { name: "Next.js",          key: "cib-next-js" },
  { name: "Angular",          key: "cib-angular" },
  { name: "Bootstrap",        key: "cib-bootstrap" },
  { name: "Ant Design",       key: "cil-object-group" },
  { name: "Liquid / Shopify", key: "cib-shopify" },
  { name: "Git",              key: "cib-git" },
  { name: "Postman",          key: "cib-postman" },
  { name: "Jira",             key: "cib-atlassian" },
  { name: "Upwork",           key: "cib-upwork" },
  { name: "OOP",              key: "cil-object-group" },
  { name: "Problem Solving",  key: "cib-leetcode" },
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
            <p className="text-uppercase text-secondary fw-bold small mb-3 ls-wide">
              Skills &amp; Tools
            </p>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s.key + s.name} className="skill-pill">
                  <i className={s.key}></i>
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="row mb-5 pb-5">
          {/* Bio */}
          <div className="col-md-4 col-lg-4 pt-3 my-md-5 animate__animated animate__fadeInLeft">
            <h2 className="text-break fs-1 fw-bolder">
              I AM MOHAMED
              <span className="text-primary"> A FRONT-END </span>
              WEB DEVELOPER
            </h2>
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

          {/* Education */}
          <div className="col-md-4 col-lg-4 pt-3 my-md-5 animate__animated animate__zoomInUp">
            <h2 className="text-center">Education</h2>
            <div className="border-start">
              <span className="badge text-bg-primary fs-6 pe-3 text-wrap">
                Bachelor&apos;s Degree In Computer Science
              </span>
              <p className="px-2">
                <span className="fw-bolder">Helwan University</span> — 2018 /
                2022
              </p>
              <p className="px-1">
                GPA 3.1/4.0 · Grade: Very Good · Graduation Project: Skin
                Cancer Classification (Excellent)
              </p>

              <span className="badge text-bg-primary fs-6 text-wrap">
                Professional Front-End Web Development Nano Degree
              </span>
              <p className="px-2">
                <span className="fw-bolder">Udacity</span> — (09/2022) /
                (12/2022)
              </p>
              <p className="px-1">
                Credential:{" "}
                <a
                  className="text-decoration-none text-light text-break"
                  href="https://www.udacity.com/certificate/CMDAZQU6"
                  target="_blank"
                  rel="noreferrer"
                >
                  udacity.com/certificate/CMDAZQU6
                </a>
              </p>

              <span className="badge text-bg-primary fs-6 pe-3 text-wrap">
                React Web Developer Trainee — DEPI
              </span>
              <p className="px-2">
                <span className="fw-bolder">YAT Learning Center</span> —
                (03/2024) / (10/2024)
              </p>
              <p className="px-1">
                Graduate of the React Web Developer track from the Digital Egypt
                Pioneers Initiative (DEPI) by MCIT. Covered React.js, Node.js,
                Express.js, MongoDB, and Business English.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="col-md-4 col-lg-4 pt-3 mt-md-5 ps-3 animate__animated animate__zoomInUp">
            <h2 className="text-center">Experience</h2>
            <div className="border-start">
              {/* Techademics */}
              <span className="badge text-bg-primary fs-6 text-wrap">
                STEAM Instructor — Part-time
              </span>
              <p className="px-2">
                <span className="fw-bolder">Techademics</span> · On-site —
                (09/2025) / Now
              </p>
              <p className="px-1">
                Training students (ages 6–18) for Robotics competitions (FLL),
                covering robotics design, basic programming, and teamwork.
              </p>

              {/* Shopify Bits */}
              <span className="badge text-bg-primary fs-6 text-wrap">
                Shopify Developer — Full-time
              </span>
              <p className="px-2">
                <span className="fw-bolder">Shopify Bits</span> · Remote —
                (11/2024) / Now
              </p>
              <p className="px-1">
                Developed and customized 90+ Shopify stores — Liquid theme
                customization, metafields, app integrations, store migrations,
                and performance optimization achieving high Google Lighthouse
                scores.
              </p>

              {/* ILLA Holding */}
              <span className="badge text-bg-primary fs-6 text-wrap">
                Front-End Developer — Intern
              </span>
              <p className="px-2">
                <span className="fw-bolder">ILLA Holding</span> · Hybrid —
                (08/2024) / (10/2024)
              </p>
              <p className="px-1">
                Resolved 8 layout bugs and implemented 2 new features using
                React.js, Next.js, and Ant Design. Collaborated with
                cross-functional teams across transportation, logistics, and
                supply chain domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
