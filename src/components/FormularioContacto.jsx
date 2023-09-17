import { useState } from 'react';
import "./FormularioContacto.css"
import "./CommonStyles.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        console.log('Datos del formulario:', formData);

    };

    return (
        <div className='conten-contact'>
            <div className="contact-form">
            <form 
                action="https://formspree.io/f/mrgwlpez" 
                method="POST"
                onSubmit={handleSubmit}
            >
                <label>
                    Nombre:
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email"
                        name="_replyto" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Mensaje:
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </div>
        
    );
};

export default ContactForm;

