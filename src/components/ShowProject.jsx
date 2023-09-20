import { useEffect, useState } from "react";
import axios from "axios";
import EditProject from "../components/EditProjrct";

import "./CommonStyles.css";
import CreateProject from "../components/CreateProject";
import "./ShowProject.css";

const url = "http://localhost:8080/api/v1/proyectos";

const ShowProject = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getAllProjects();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex + projects.length - 1) % projects.length);
  };

  const getAllProjects = async () => {
    try {
      const response = await axios.get(url);
      setProjects(response.data);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await axios.delete(`${url}/${projectId}`);
      getAllProjects();
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };



  return (
    <div>
      <div className="common-component">
        <button className="boton-siguiente" onClick={handlePrevious}>Anterior</button>
        <div className="contenedor">
          {projects.length > 0 && (
            <div className="project-item" key={projects[currentIndex].id}>

              <div className="image-container">
                <img className="imafenproject" src={projects[currentIndex].imagePath} alt={projects[currentIndex].imagePath} />

                <button className="action-button" onClick={() => {
                  setSelectedProject(projects[currentIndex]);
                  setShowUpdateForm(true);
                }}>
                  Actualizar
                </button>

                <button className="action-button" onClick={() => handleDelete(projects[currentIndex].id)}>
                  Eliminar
                </button>
              </div>

              <div className="contenedor-datos">
                <h3 className="showproject-titulo">{projects[currentIndex].name}</h3>
                <h4 className="showproject-technology">{projects[currentIndex].technology}</h4>
                <p className="showpriject-descrip">{projects[currentIndex].description}</p>
              </div>

              <div className="boton-crear">
                <button onClick={() => setShowForm(true)}>Crear nuevo proyecto</button>
              </div>

            </div>



          )}
        </div>


        <button className="boton-siguiente" onClick={handleNext}>Siguiente</button>
      </div>

      <div className="form-container">
        {showForm && <CreateProject onCloseForm={() => setShowForm(false)} />}
        {showUpdateForm && (
          <EditProject
            project={selectedProject}
            onClose={() => setShowUpdateForm(false)} />
        )}
      </div>


    </div>
  );
};

export default ShowProject;





