import students from "./assets/data.js";

export default function StudentsProjects() {
  const renderProject = (title, url, github) => (
    <div className="student-section">
      <h3>{title}</h3>

      {Array.isArray(url) ? (
        <div className="student-links">
          {url.map((link, index) => (
            <a
              key={link}
              className="student-button"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              🌐 Demo {index + 1}
            </a>
          ))}
        </div>
      ) : url ? (
        <div className="student-links">
          <a
            className="student-button"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            🌐 Demo
          </a>
        </div>
      ) : (
        <p className="no-data">No disponible</p>
      )}

      {github && (
        <div className="student-links">
          {typeof github === "string" ? (
            <a
              className="student-button"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              💻 Repositorio
            </a>
          ) : (
            <>
              {github.frontend && (
                <a
                  className="student-button"
                  href={github.frontend}
                  target="_blank"
                  rel="noreferrer"
                >
                  💻 Frontend
                </a>
              )}

              {github.backend && (
                <a
                  className="student-button"
                  href={github.backend}
                  target="_blank"
                  rel="noreferrer"
                >
                  ⚙️ Backend
                </a>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="page-header">
        <h1>PROYECTOS DEL CURSO DE PROGRAMACIÓN 2026 – TRAZOS</h1>
        <p>
          Accede a las demos y repositorios de todos los proyectos realizados.
        </p>
      </div>

      <div className="students-container">
        {students.map((student) => (
          <div className="student-card" key={student.name}>
            <h2>{student.name}</h2>

            {renderProject(
              "📘 Primer proyecto",
              student.url_first_project,
              student.github_first_project
            )}

            <div className="student-divider" />

            {renderProject(
              "👥 Segundo proyecto",
              student.url_second_project,
              student.github_second_project
            )}

            <div className="student-divider" />

            {renderProject(
              "🎓 Proyecto final",
              student.url_final_project,
              student.github_final_project
            )}
          </div>
        ))}
      </div>
    </>
  );
}