


/* import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteProject = () => {
  const { id } = useParams(); // Obtenemos el ID del proyecto de la URL
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener detalles del proyecto a eliminar
    axios
      .get(`http://localhost:8080/api/v1/proyectos/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener detalles del proyecto:", error);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/proyectos/${id}`);
      getAllProjects();
      navigate("/"); // Redirigir de nuevo a la lista de proyectos después de eliminar
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  return (
    <div>
      {project ? (
        <div>
          <h1>Confirmar eliminación de proyecto</h1>
          <p>¿Seguro que deseas eliminar el proyecto "{project.name}"?</p>
          <button onClick={handleDelete}>Eliminar</button>
          <Link to="/">Cancelar</Link>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DeleteProject; */




