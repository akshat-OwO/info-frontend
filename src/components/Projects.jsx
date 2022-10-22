const Projects = ({projects}) => {
    return (
        <>
            {projects.map(project => (
                <div key={project._id}>
                    <h3>{project.name}</h3>
                    <span>{project.category}</span>
                    <p>{project.description}</p>
                    <p>Start Date: {project.startDate}</p>
                    <p>End Date: {project.endDate}</p>
                </div>
            ))}
        </>
    );
}
 
export default Projects;