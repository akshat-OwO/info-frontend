import { useState } from "react";

const AddProject = ({ userDetails, addingProject, setAddingProject }) => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [category, setCategory] = useState('');

    const add = async (e) => {
        e.preventDefault();

        const projectDetails = {projectName, description, startDate, endDate, category};

        const response = await fetch('https://blush-nightingale-hose.cyclic.app/project/' + userDetails.username, {
            method: 'PATCH',
            body: JSON.stringify(projectDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setAddingProject(false);
    }

    const goBack = () => {
        setAddingProject(false);
    }

    return (
        <div className="container">
            <h1>Add Project</h1>
            <form onSubmit={add}>
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="projectName"
                        id="projectName"
                        className="form-input"
                        placeholder="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <label htmlFor="projectName" className="form-label">
                        Project Name
                    </label>
                </div>
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="form-input"
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                </div>
                <div className="input-wrapper">
                    <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        className="form-input"
                        placeholder="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label htmlFor="startDate" className="form-label">
                        Start Date
                    </label>
                </div>
                <div className="input-wrapper">
                    <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        className="form-input"
                        placeholder="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <label htmlFor="endDate" className="form-label">
                        End Date
                    </label>
                </div>
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="category"
                        id="category"
                        className="form-input"
                        placeholder="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                </div>
                <button className="btn">Add</button>
            </form>
            <button className="btn" onClick={goBack}>Go Back</button>
        </div>
    );
};

export default AddProject;
