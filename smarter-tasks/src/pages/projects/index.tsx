import ProjectList from "./ProjectList";
import NewProject from "./newProject";
 const Projects = () =>{
  // let [isOpen, setIsOpen] = useState(false)
    return (
        <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <NewProject  />
      </div>
      <ProjectList />
    </>
    ) 
}
export default Projects;