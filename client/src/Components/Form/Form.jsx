import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createUser } from "../../Redux/actions";
import FormNavBar from './FormNavBar'

///VALIDACIONES :)
const validate = (form) => {
    let errors = {};
    
    if (!form.nombre) {
        errors.nombre = 'Por favor ingresa un nombre';
    }
    else if (!form.apellido) {
        errors.apellido = 'Por favor ingresa un apellido';
    }

    else if (!form.usuario) {
        errors.usuario = 'Por favor genere un nombre de usuario';
    }

    else if (!form.correo) {
        errors.correo = 'Por favor ingresa un email';
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.correo)) {
        errors.correo = "Ingresa un email válido"
    }

    else if (!form.contraseña) {
        errors.contraseña = 'Por favor ingresa una contraseña';
    }
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(form.contraseña)) {
        errors.contraseña = "La contraseña debe de tener mínimo 8 caracteres, al menos un número, una letra minúscula, una letra mayúscula y un carácter especial."
    }
    else if (form.contraseña !== form.passwordconfirm) {
        errors.passwordconfirm = "Las contraseñas no coinciden"
    }
   
    return errors;
}


///FORMULARIO :)
const Form = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
                tipo_usuario:"",
                especialidad:"",
                credenciales:"",
                nombre:"",
                apellido:"",
                usuario:"",
                correo:"",
                contraseña:"",
                passwordconfirm:"",
                imagen:"",
                edad:"",
                fecha_nacimiento:"",
                genero:"",
                direccion:"",
                telefono:"",
                resultado:""
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

      function handleDoctor(e) {
        const optionSelected = e.target.value;
        if (optionSelected === "doctor") {
          document.getElementById("medicalInputs").style.display = "block";
        } else {
          document.getElementById("medicalInputs").style.display = "none";
        }
        setForm({
          ...form,
          tipo_usuario: optionSelected,
        });
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
        dispatch(createUser(form));
        alert("¡Tu usuario ha sido creado!");
        setForm({
            tipo_usuario:"",
        especialidad:"",
        credenciales:"",
        nombre:"",
        apellido:"",
        usuario:"",
        correo:"",
        contraseña:"",
        passwordconfirm:"",
        imagen:"",
        edad:"",
        fecha_nacimiento:"",
        genero:"",
        direccion:"",
        telefono:"",
        resultado:""
        });
        navigate('/home');
      }


    return (
     <div>

        <FormNavBar/>
 
        <div>
            <h3>Ingresa tus datos</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Rol: </label>
                    <select id="optionSelected" onChange={(e) => handleDoctor(e)}>
                        <option disabled="">Selecciona una opción</option>
                        <option value="doctor">Médico</option>
                        <option value="paciente">Paciente</option>
                    </select>
                    <div>{errors.tipo_usuario}</div>
                </div>
                    <div id="medicalInputs">
                        <div>
                            <label>Especialidad: </label>
                            <div>
                            <input type="text" name="especialidad" value={form.especialidad} onChange={(e) => handleChange(e)} placeholder="Especialidad"/>
                            <div>{errors.especialidad}</div>
                            </div>
                        </div>
                        <div>
                            <label>Credenciales: </label>
                            <div>
                            <input type="text" name="credenciales" value={form.credenciales} onChange={(e) => handleChange(e)} placeholder="Crdenciales"/>
                            <div>{errors.credenciales}</div>
                            </div>
                        </div>
                    </div>
               

                <div>
                    <label>Nombre: </label>
                    <div>
                    <input type="text" name="nombre" value={form.nombre} onChange={(e) => handleChange(e)} placeholder="Nombre"/>
                    <div>{errors.nombre}</div>
                    </div>
                </div>
                <div>
                    <label>Apellido: </label>
                    <div>
                    <input type="text" name="apellido" value={form.apellido} onChange={(e) => handleChange(e)} placeholder="Apellido"/>
                    <div>{errors.apellido}</div>
                    </div>
                </div>
                <div>
                    <label>Usuario: </label>
                    <div>
                    <input type="text" name="usuario" value={form.usuario} onChange={(e) => handleChange(e)} placeholder="Usuario"/>
                    <div>{errors.usuario}</div>
                    </div>
                </div>
                <div>
                    <label>Email: </label>
                    <div>
                    <input type="text" name="correo" value={form.correo} onChange={(e) => handleChange(e)} placeholder="Email"/>
                    <div>{errors.correo}</div>
                    </div>
                </div>
                <div>
                    <label>Contraseña: </label>
                    <div>
                    <input type="password" name="contraseña" value={form.contraseña} onChange={(e) => handleChange(e)} placeholder="Contraseña"/>
                    <div>{errors.contraseña}</div>
                    </div>
                </div>
                <div>
                    <label>Confirma tu contraseña: </label>
                    <div>
                    <input type="password" name="passwordconfirm" value={form.passwordconfirm} onChange={(e) => handleChange(e)}  placeholder="Contraseña"/>
                    <div>{errors.passwordconfirm} </div>
                    </div>
                </div>
                <div>
                    <label>Imagen: </label>
                    <div>
                    <input type="url" name="imagen" value={form.imagen} onChange={(e) => handleChange(e)} placeholder="Link a la imagen"/>
                    <div>{errors.imagen}</div>
                    </div>
                </div>
                <div>
                    <label>Edad: </label>
                    <div>
                    <input type="number" min="1" max="100" step="1" name="edad" value={form.edad} onChange={(e) => handleChange(e)} placeholder="Edad"/>
                    <div>{errors.edad}</div>
                    </div>
                </div>
                <div>
                    <label>Género: </label>
                    <div>
                    <input type='checkbox' name="genero" value={form.genero} onChange={(e) => handleChange(e)} /> Femenino
                    <input type='checkbox' name="genero" value={form.genero} onChange={(e) => handleChange(e)} /> Masculino
                    <div>{errors.genero}</div>
                    </div>
                </div>
                <div>
                    <label>Fecha de nacimiento: </label>
                    <div>
                    <input type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={(e) => handleChange(e)}/>
                    <div>{errors.fecha_nacimiento}</div>
                    </div>
                </div>
                <div>
                    <label>Dirección: </label>
                    <div>
                    <input type="text" name="direccion" value={form.direccion} onChange={(e) => handleChange(e)} placeholder="Dirección"/>
                    <div>{errors.direccion}</div>
                    </div>
                </div>
                <div>
                    <label>Teléfono: </label>
                    <div>
                    <input type="text" name="telefono" value={form.telefono} onChange={(e) => handleChange(e)} placeholder="Teléfono"/>
                    <div>{errors.telefono}</div>
                    </div>
                </div>
                <div>
                    <label>Detección: </label>
                    <div>
                    <input type="text" name="resultado" value={form.resultado} onChange={(e) => handleChange(e)} placeholder="Detección"/>
                    <div>{errors.resultado}</div>
                    </div>
                </div>
               
                <div>
                    <button type="submit" >CREAR USUARIO</button>
                </div>
            </form>
        </div>
     </div>   
    )
}

export default Form;
