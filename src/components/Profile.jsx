import { useState } from 'react';
import AddProject from './AddProject';
import ShowProjects from './ShowProjects';

const Profile = ({ userDetails }) => {
    const [addingProject, setAddingProject] = useState(false);
    const [showingProjects, setShowingProjects] = useState(false);

    const [projectList, setProjectList] = useState('');

    const handleAdd = () => {
        setAddingProject(true);
    };

    const handleShow = async () => {
        
        const response = await fetch('http://localhost:3000/project/' + userDetails.username, {
            method: 'GET'
        })
        
        const json = await response.json();
        setProjectList(json);

        setShowingProjects(true);
    };

    return (
        <div className="container">
            {!addingProject && !showingProjects && (
                <div>
                    <h1>Profile View</h1>
                    <div className="profile-wrapper">
                        <div className="profile-details">
                            <h3>
                                <span>Name:</span> {userDetails.name}
                            </h3>
                            <h3>
                                <span>Email:</span> {userDetails.email}
                            </h3>
                            <h3>
                                <span>Phone:</span> {userDetails.phone}
                            </h3>
                            <h3>
                                <span>City:</span> {userDetails.city}
                            </h3>
                            <h3>
                                <span>DOB:</span> {userDetails.dob.slice(0, 10)}
                            </h3>
                        </div>
                        <div className="profile-buttons">
                            <button className="btn pfp" onClick={handleAdd}>
                                Add Project
                            </button>
                            <button className="btn pfp" onClick={handleShow}>
                                Show Projects
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {addingProject && (
                <AddProject
                    userDetails={userDetails}
                    addingProject={addingProject}
                    setAddingProject={setAddingProject}
                />
            )}
            {showingProjects && <ShowProjects userDetails={userDetails} projectList={projectList} showingProjects={showingProjects} setShowingProjects={setShowingProjects} />}
        </div>
    );
};

export default Profile;
