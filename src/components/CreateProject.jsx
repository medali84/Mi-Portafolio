/* 

import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/api/v1/proyectos";

const CreateProject = ({onCloseForm}) => {

        const [nombre, setNombre] = useState("")
        const [tecnologia, setTecnologia] = useState("")
        const [descripcion, setDescripcion] = useState("")
        const [imagen, setImagen] = useState("")
        const [imageFile, setImageFile] = useState("");

        const handleImageChange = (e) => {
            setImageFile(e.target.files[0]);
        };
        


        const store = async (e) => {
            e.preventDefault();
    
            const data = new FormData();
            data.append("name", nombre);
            data.append("technology", tecnologia);
            data.append("description", descripcion);
            if (imageFile) {
                data.append("img", imageFile);
            }
    
            try {
                await axios.post(url, data, {headers: {  "Content-Type": "multipart/form-data"   }})
                    .then(response => {
                        console.log('Respuesta del servidor:', response.data);
                        if (onCloseForm) onCloseForm();
                    })
                    .catch(error => {
                        console.error('Error al crear el proyecto:', error);
                    });
            } catch (err) {
                console.error("Error al enviar el formulario:", err);
            }
        };

    return (
        <>
            <h1>Crear Proyecto</h1>

            <form onSubmit={store}>
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
        <label>Imagen</label>
        <input type="file" onChange={handleImageChange} />
    </div>
    <button type="submit"> Crear proyecto </button>
</form>
        </>
    );
}

export default CreateProject; 
*/



import { useState } from "react";
import axios from "axios";
import "./CreateProject.css"; 

const url = "https://mi-portafolio-backend-production.up.railway.app/api/v1/proyectos";

const CreateProject = ({ onCloseForm }) => {
  const [nombre, setNombre] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [imageFile, setImageFile] = useState("");

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const store = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", nombre);
    data.append("technology", tecnologia);
    data.append("description", descripcion);
    if (imageFile) {
      data.append("img", imageFile);
    }

    try {
      await axios
        .post(url, data, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
          console.log("Respuesta del servidor:", response.data);
          if (onCloseForm) onCloseForm();
        })
        .catch((error) => {
          console.error("Error al crear el proyecto:", error);
        });
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
    }
  };

  return (
    <div className="create-project-container">
      <h1 className="create-project-title">Crear Proyecto</h1>

      <form className="form-container" onSubmit={store}>
        <div className="form-input">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Tecnología</label>
          <input
            type="text"
            value={tecnologia}
            onChange={(e) => setTecnologia(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Imagen</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button className="form-button" type="submit">
          Crear proyecto
        </button>
      </form>
    </div>
  );
};

export default CreateProject;








