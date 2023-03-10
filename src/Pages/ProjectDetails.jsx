import { useParams } from "react-router-dom"
import findProject from "../utilities/findProject"



const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const projectData = findProject(projectDetails)
  console.log(projectData);
  return (
    <>
      <h1>{projectData[0].title}</h1>
      <p>{projectData[0].description}</p>
      <img src={projectData[0].image} alt={projectData.title} />
      <a href={projectData.repositoryLink}><button>GitHub Repo</button></a>
      <a href={projectData.deploymentLink}><button>Test the App!</button></a>
    </>
    
  )
}

export default ProjectDetails