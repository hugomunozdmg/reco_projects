import projectsData from "./assets/data.js";

const Button = ({ href, children }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="student-button"
    >
      {children}
    </a>
  );
};

export default function StudentsProjects() {
  return (
    <div className="projects-page">
      {projectsData.map((section) => (
        <section className="project-section" key={section.id}>
          <div className="page-header">
            <h1>{section.title}</h1>
          </div>

          <div className="students-container">
            {section.projects.map((project, index) => (
              <article
                className="student-card"
                key={project.student || project.team.join("-") || index}
              >
                <h2>
                  {project.student ? (
                    project.student
                  ) : (
                    <>
                      👥 Equipo
                      <div className="team-members">
                        {project.team.map((member) => (
                          <span key={member} className="member-badge">
                            {member}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </h2>

                <div className="student-section">

                  {Array.isArray(project.demo) ? (
                    project.demo.map((url, i) => (
                      <Button key={url} href={url}>
                        Demo {i + 1}
                      </Button>
                    ))
                  ) : (
                    <Button href={project.demo}>🌐 Demo</Button>
                  )}
                </div>

                <div className="student-divider" />

                <div className="student-section">
                  <h3>💻 Repositorios</h3>

                  {project.github.repo && (
                    <Button href={project.github.repo}>
                      Repositorio
                    </Button>
                  )}

                  {project.github.frontend && (
                    <Button href={project.github.frontend}>
                      Frontend
                    </Button>
                  )}

                  {project.github.backend && (
                    <Button href={project.github.backend}>
                      Backend
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}