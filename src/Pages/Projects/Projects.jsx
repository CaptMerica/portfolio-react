import projectsData from "../../data/projects"

function Projects () {
  return (
    <main id="projects">
      <h1>Projects</h1>
      <ul>
        <li>
          <div>
            <ProjectsList projects={projectsData} />
          </div>
        </li>
      </ul>
    </main>
  )
}

export default Projects