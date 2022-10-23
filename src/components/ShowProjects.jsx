const ShowProjects = ({ userDetails, projectList, showingProjects, setShowingProjects }) => {

    const goBack = () => {
        setShowingProjects(false);
    }

    return (
        <div className="container">
            <h1>{userDetails.username}'s Project List</h1>
            {projectList.projects.map(project => (
                <div className="project">
                    <div className="project-header">
                        <h2>{project.projectName}</h2>
                        <p>{project.category}</p>
                    </div>
                    <p className="description">{project.description}</p>
                    <div className="date-wrapper">
                        <p><span className="date">Start Date:</span> {project.startDate.slice(0, 10)}</p>
                        <p><span className="date">End Date:</span> {project.endDate.slice(0, 10)}</p>
                    </div>
                </div>
            ))}
            <button className="btn" onClick={goBack}>Go Back</button>
        </div>
    );
}
 
export default ShowProjects;