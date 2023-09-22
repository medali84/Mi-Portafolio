
import { useState, useEffect } from "react";
import axios from "axios"
import "./EditProject.css"

const url = "https://mi-portafolio-backend-production.up.railway.app/api/v1/proyectos";

const EditProject = ({ project, onClose }) => {
    const [nombre, setNombre] = useState("");
    const [tecnologia, setTecnologia] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (project) {
            setNombre(project.name);
            setTecnologia(project.technology);
            setDescripcion(project.description);
        }
    }, [project]);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const update = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", nombre);
        data.append("technology", tecnologia);
        data.append("description", descripcion);
        if (imageFile) {
            data.append("img", imageFile);
        }

        try {
            await axios.put(`${url}/${project.id}`, data)
                .then(response => {
                    console.log('Respuesta del servidor:', response.data);
                    if (onClose) onClose();
                })
                .catch(error => {
                    console.error('Error al actualizar el proyecto:', error);
                });
        } catch (err) {
            console.error("Error al enviar el formulario:", err);
        }
    };

    return (
        <>
        <div className="contenedor-edit">
            <h1>Actualizar Proyecto</h1>
            <form onSubmit={update}>
                <div>
                    <label>Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label>Tecnología</label>
                    <input type="text" value={tecnologia} onChange={(e) => setTecnologia(e.target.value)} />
                </div>
                <div>
                    <label>Descripción</label>
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div>
                    <label>Actualizar Imagen</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                <button type="submit">Actualizar proyecto</button>
            </form>  
        </div>

        </>
    );
}

export default EditProject;
