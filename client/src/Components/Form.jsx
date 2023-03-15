import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


///VALIDACIONES :)
const validate = (form) => {
    let errors = {};
    if (!form.name) {
        errors.name = 'Por favor ingresa un nombre';
    }
    else if (!form.email) {
        errors.email = 'Por favor ingresa un email';
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        errors.email = "Ingresa un email válido"
    }
    else if (!form.password) {
        errors.password = 'Por favor ingresa una contraseña';
    }
    else if (!form.role) {
        errors.password = 'Por favor selecciona un rol';
    }
    return errors;
}



///FORMULARIO :)
const Form = () => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})

    const [form, setForm] = useState({
        name:"",
        email:"",
        password:"",
        role:"",
      });
    
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
      
        setErrors(
          validate({
            ...form,
            [e.target.name]: e.target.value,
          })
        );
      }

    return (
     <div>
        <div>
            <h2>Ingresa tus datos</h2>
            <form>
                <div>
                    <label>Nombre: </label>
                    <p>
                    <input type="text" name="name" value={form.nombre} onChange={(e) => handleChange(e)}/>
                    <p>{errors.name}</p>
                    </p>
                </div>
                <div>
                    <label>Email: </label>
                    <p>
                    <input type="text" name="email" value={form.email} onChange={(e) => handleChange(e)}/>
                    <p>{errors.email}</p>
                    </p>
                </div>
                <div>
                    <label>Contraseña: </label>
                    <p>
                    <input type="text" name="password" value={form.contraseña} onChange={(e) => handleChange(e)}/>
                    <p>{errors.password}</p>
                    </p>
                </div>
                <div>
                    <label>Rol: </label>
                    <select>
                        <option disabled="">Selecciona una opción</option>
                        <option value="medico">Médico</option>
                        <option value="paciente">Paciente</option>
                    </select>
                    <p>{errors.role}</p>
                </div>
                <div>
                    <button>CREAR USUARIO</button>
                </div>
            </form>
        </div>
     </div>   
    )
}

export default Form;