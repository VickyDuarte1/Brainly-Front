import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createUser } from "../../Redux/actions";
import FormNavBar from './FormNavBar'
import styles from "../Form/Form.module.css";

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
    const [activeUser, setActiveUser] = useState(localStorage.getItem("activeUser") );
   

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

      useEffect(() => {
        localStorage.getItem("activeUser", JSON.stringify(activeUser));
    }, [activeUser]);

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
        localStorage.setItem("activeUser", JSON.stringify(form));
        navigate('/home');
      }


    return (
     <div className={styles.container}>

        <FormNavBar/>
 
        <div className={styles.form}>
            <h3 className={styles.title}>Ingresa tus datos</h3>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form} >
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Rol: </label>
                    <select className={styles.select} id="optionSelected" onChange={(e) => handleDoctor(e)}>
                        <option disabled="">Selecciona una opción</option>
                        <option value="doctor">Médico</option>
                        <option value="paciente">Paciente</option>
                    </select>
                    <div className={styles.errors}>{errors.tipo_usuario}</div>
                </div>
                    <div id="medicalInputs" className={styles.itemsContainer}>
                        <div>
                            <label className={styles.label}>Especialidad: </label>
                            <div>
                            <input className={styles.input}type="text" name="especialidad" value={form.especialidad} onChange={(e) => handleChange(e)} placeholder="Especialidad"/>
                            <div className={styles.errors}>{errors.especialidad}</div>
                            </div>
                        </div>
                        <div>
                            <label className={styles.label}>Credenciales: </label>
                            <div>
                            <input  className={styles.input} type="text" name="credenciales" value={form.credenciales} onChange={(e) => handleChange(e)} placeholder="Crdenciales"/>
                            <div className={styles.errors}>{errors.credenciales}</div>
                            </div>
                        </div>
                    </div>
               

                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Nombre: </label>
                    <div>
                    <input className={styles.input} type="text" name="nombre" value={form.nombre} onChange={(e) => handleChange(e)} placeholder="Nombre"/>
                    <div className={styles.error}>{errors.nombre}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Apellido: </label>
                    <div>
                    <input className={styles.input} type="text" name="apellido" value={form.apellido} onChange={(e) => handleChange(e)} placeholder="Apellido"/>
                    <div className={styles.error}>{errors.apellido}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Usuario: </label>
                    <div>
                    <input className={styles.input} type="text" name="usuario" value={form.usuario} onChange={(e) => handleChange(e)} placeholder="Usuario"/>
                    <div className={styles.error}>{errors.usuario}</div> 
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Email: </label>
                    <div>
                    <input className={styles.input} type="text" name="correo" value={form.correo} onChange={(e) => handleChange(e)} placeholder="Email"/>
                    <div className={styles.error}>{errors.correo}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Contraseña: </label>
                    <div>
                    <input  className={styles.input} type="password" name="contraseña" value={form.contraseña} onChange={(e) => handleChange(e)} placeholder="Contraseña"/>
                    <div className={styles.error}>{errors.contraseña}</div>
                    </div>
                </div>
                <div  className={styles.itemsContainer}>
                    <label className={styles.label}>Confirma tu contraseña: </label>
                    <div>
                    <input className={styles.input} type="password" name="passwordconfirm" value={form.passwordconfirm} onChange={(e) => handleChange(e)}  placeholder="Contraseña"/>
                    <div className={styles.error}>{errors.passwordconfirm} </div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Imagen: </label>
                    <div>
                    <input className={styles.image} type="url" name="imagen" value={form.imagen} onChange={(e) => handleChange(e)} placeholder="Link a la imagen"/>
                    <div className={styles.error}>{errors.imagen}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Edad: </label>
                    <div>
                    <input className={styles.input} type="number" min="1" max="100" step="1" name="edad" value={form.edad} onChange={(e) => handleChange(e)} placeholder="Edad"/>
                    <div className={styles.errors}>{errors.edad}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Género: </label>
                    <div>
                    <input className={styles.check} type='checkbox' name="genero" value={form.genero} onChange={(e) => handleChange(e)} /> Femenino
                    <input className={styles.check} type='checkbox' name="genero" value={form.genero} onChange={(e) => handleChange(e)} /> Masculino
                    <div className={styles.errors}>{errors.genero}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Fecha de nacimiento: </label>
                    <div>
                    <input className={styles.input} type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={(e) => handleChange(e)}/>
                    <div className={styles.errors}>{errors.fecha_nacimiento}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Dirección: </label>
                    <div>
                    <input className={styles.input} type="text" name="direccion" value={form.direccion} onChange={(e) => handleChange(e)} placeholder="Dirección"/>
                    <div className={styles.errors}>{errors.direccion}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Teléfono: </label>
                    <div>
                    <input  className={styles.input} type="text" name="telefono" value={form.telefono} onChange={(e) => handleChange(e)} placeholder="Teléfono"/>
                    <div className={styles.errors}>{errors.telefono}</div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <label className={styles.label}>Detección: </label>
                    <div>
                    <input className={styles.input} type="text" name="resultado" value={form.resultado} onChange={(e) => handleChange(e)} placeholder="Detección"/>
                    <div className={styles.errors}>{errors.resultado}</div>
                    </div>
                </div>
               
                <div>
                <button className={styles.button2} disabled={Object.keys(errors).length > 0 || form.nombre==="" }>Crear usuario</button>                </div>
            </form>
        </div>
     </div>   
    )
}

export default Form;
