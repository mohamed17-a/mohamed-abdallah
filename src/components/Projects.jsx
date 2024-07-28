import project from "../projects.service";

const Projects = () => {
  const ProjectList = project;
  return (
    <>
      <div className="container pb-5 ">
        <div className="row">
          <div className="col-md-3 col-lg-2 pt-3 mt-md-5">
            <span
              className="fs-5 rounded-1 mt-5 px-3"
              style={{ backgroundColor: "var(--main-light)" }}
            >
              PROJECTS
            </span>
          </div>
        </div>
        <div className="row pb-5 mb-5 mx-2">
          <div
            className="col-md-12 col-lg-12 pt-3 mt-md-5 rounded-3 d-flex flex-wrap pb-2 gap-3 justify-content-center text-center"
            style={{ backgroundColor: "var(--main-transparent)" }}
          >
            {ProjectList.map((item) => (
              <div
                className="card text-light rounded-3 pt-1 px-1"
                key={item.title}
                style={{ width: "18rem", backgroundColor: "var(--main-dark)" }}
              >
                <img src={item.img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h6 className="card-title text-bg-primary fw-bolder rounded-5">
                    {item.title}
                  </h6>
                  <p className="card-text">{item.descrip}</p>
                  <a href={item.repo} className="btn btn-dark m-1">
                    Github Repo <i className="bi bi-github"></i>
                  </a>
                  {item.Api && (
                    <a href={item.Api} className="btn btn-dark m-1">
                      API Docs <i className="bi bi-github"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
