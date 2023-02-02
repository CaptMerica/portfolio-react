import projectsData from "../data/projects"



const ProjectDetails() {
  const { ProjectDetails } = useParams()
  const projectData = findProject(projectDetails)
  return (
    <>
      <h1>
        {projectData.title}
      </h1>
      <p>
        {projectData.description}
      </p>
      <img src={projectData.image} alt={projectData.title} />
      <a href={projectData.repositoryLink}><button>GitHub Repo</button></a>
      <a href={projectData.deploymentLink}><button>Test the App!</button></a>
    </>
    
  )
}

export default ProjectDetails