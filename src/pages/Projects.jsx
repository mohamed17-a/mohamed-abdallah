import project from "../projects.service";
import useInView from "../hooks/useInView";

const Projects = () => {
  const [gridRef, gridInView] = useInView();

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <span
            className="fs-5 rounded-1 px-3"
            style={{ backgroundColor: "var(--main-light)" }}
          >
            PROJECTS
          </span>
        </div>
      </div>

      <div
        ref={gridRef}
        className={`rounded-3 p-4 ${gridInView ? "animate__animated animate__fadeInUp" : "pre-animate"}`}
        style={{ backgroundColor: "var(--main-transparent)" }}
      >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4">
          {project.map((item) => (
            <div className="col" key={item.title}>
              <div
                className="project-card card h-100 border-0 text-white"
                style={{ backgroundColor: "var(--main-dark)" }}
              >
                {/* Image + hover overlay */}
                <div className="project-card__img-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="project-card__img"
                  />
                  <div className="project-card__overlay"></div>
                </div>

                {/* Body */}
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-primary rounded-pill d-block text-center py-2 mb-3 fs-6">
                    {item.title}
                  </span>
                  <p className="card-text small text-secondary flex-grow-1 project-card__desc">
                    {item.descrip}
                  </p>
                  <div className="d-flex gap-2 flex-wrap justify-content-center mt-auto pt-2">
                    <a
                      href={item.repo}
                      className="btn btn-sm btn-outline-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github me-1"></i>GitHub
                    </a>
                    {item.Api && (
                      <a
                        href={item.Api}
                        className="btn btn-sm btn-outline-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>API
                      </a>
                    )}
                    {item.upwork && (
                      <a
                        href={item.upwork}
                        className="btn btn-sm btn-upwork"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="cib-upwork me-1"></i>Upwork
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
