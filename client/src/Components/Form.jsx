import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


///VALIDACIONES :)
const validate = (form) => {
    let errors = {};

    if (!form.role) {
        errors.password = 'Por favor selecciona un rol';
    }
    else if (!form.name) {
        errors.name = 'Por favor ingresa un nombre';
    }
    else if (!form.lastname) {
        errors.lastname = 'Por favor ingresa una contraseña';
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
   
    return errors;
}



///FORMULARIO :)
const Form = () => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})

    const [form, setForm] = useState({
        role:"",
        name:"",
        lastname:"",
        user:"",
        email:"",
        password:"",
        image:"",
        age:"",
        birthday:"",
        gender:"",
        adress:"",
        phone:"",
        detection:""
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
                    <label>Rol: </label>
                    <select>
                        <option disabled="">Selecciona una opción</option>
                        <option value="medico">Médico</option>
                        <option value="paciente">Paciente</option>
                    </select>
                    <p>{errors.role}</p>
                </div>
                <div>
                    <label>Nombre: </label>
                    <p>
                    <input type="text" name="name" value={form.name} onChange={(e) => handleChange(e)}/>
                    <p>{errors.name}</p>
                    </p>
                </div>
                <div>
                    <label>Apellido: </label>
                    <p>
                    <input type="text" name="name" value={form.lastname} onChange={(e) => handleChange(e)}/>
                    <p>{errors.lastname}</p>
                    </p>
                </div>
                <div>
                    <label>Usuario: </label>
                    <p>
                    <input type="text" name="user" value={form.user} onChange={(e) => handleChange(e)}/>
                    <p>{errors.user}</p>
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
                    <input type="text" name="password" value={form.password} onChange={(e) => handleChange(e)}/>
                    <p>{errors.password}</p>
                    </p>
                </div>
                <div>
                    <label>Imagen: </label>
                    <p>
                    <input type="text" name="image" value={form.image} onChange={(e) => handleChange(e)}/>
                    <p>{errors.image}</p>
                    </p>
                </div>
                <div>
                    <label>Edad: </label>
                    <p>
                    <input type="number" min="1" max="100" step="1" name="age" value={form.age} onChange={(e) => handleChange(e)}/>
                    <p>{errors.age}</p>
                    </p>
                </div>
                <div>
                    <label>Género: </label>
                    <p>
                    <input type='checkbox' name="genre" value={form.genre} onChange={(e) => handleChange(e)} /> Femenino
                    <input type='checkbox' name="genre" value={form.genre} onChange={(e) => handleChange(e)} /> Masculino
                    <p>{errors.genre}</p>
                    </p>
                </div>
                <div>
                    <label>Fecha de nacimiento: </label>
                    <p>
                    <input type="date" name="birthday" value={form.birthday} onChange={(e) => handleChange(e)}/>
                    <p>{errors.birthday}</p>
                    </p>
                </div>
                <div>
                    <label>Dirección: </label>
                    <p>
                    <input type="text" name="adress" value={form.adress} onChange={(e) => handleChange(e)}/>
                    <p>{errors.adress}</p>
                    </p>
                </div>
                <div>
                    <label>Teléfono: </label>
                    <p>
                    <input type="number" name="phone" value={form.phone} onChange={(e) => handleChange(e)}/>
                    <p>{errors.phone}</p>
                    </p>
                </div>
                <div>
                    <label>Detección: </label>
                    <p>
                    <input type="text" name="detection" value={form.detection} onChange={(e) => handleChange(e)}/>
                    <p>{errors.detection}</p>
                    </p>
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