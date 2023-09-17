import { useState } from 'react';
import CreateProject from '../components/CreateProject';
import EditProject from '../components/EditProject';
import "./MainComponent.css"

const MainComponent = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null); 

    return (
        <div>
            <div className="contenedor-principal clearfix">
                
                <button onClick={() => { setShowCreateForm(true); setShowEditForm(false); }}>Crear</button>
                <button onClick={() => { setShowEditForm(true); setShowCreateForm(false); setSelectedProject(projectToEdit); }}>Actualiza</button> 
                
            </div>

            {showCreateForm && 
                <div className="form-container">
                    <CreateProject />
                </div>
            }

            {showEditForm && 
                <div className="form-container">
                    <EditProject project={selectedProject} />
                </div>
            }
        </div>
    );
}

export default MainComponent;
