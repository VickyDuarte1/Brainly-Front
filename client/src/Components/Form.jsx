import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { createUser } from "../Redux/actions";

///VALIDACIONES :)
const validate = (form) => {
    let errors = {};
    
   
    if (!form.name) {
        errors.name = 'Por favor ingresa un nombre';
    }
    else if (!form.lastname) {
        errors.lastname = 'Por favor ingresa un apellido';
    }

    else if (!form.user) {
        errors.user = 'Por favor genere un nombre de usuario';
    }

    else if (!form.email) {
        errors.email = 'Por favor ingresa un email';
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        errors.email = "Ingresa un email válido"
    }

    else if (!form.password) {
        errors.password = 'Por favor ingresa una contraseña';
    }
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(form.password)) {
        errors.password = "La contraseña debe de tener mínimo 8 caracteres, al menos un número, una letra minúscula, una letra mayúscula y un carácter especial."
    }
    else if (form.password !== form.passwordconfirm) {
        errors.passwordconfirm = "Las contraseñas no coinciden"
    }
   
    return errors;
}


///FORMULARIO :)
const Form = () => {

    const dispatch = useDispatch();
    // const history = useHistory;
    const [errors, setErrors] = useState({})

    const [form, setForm] = useState({
        role:"",
        speciality:"",
        credentials:"",
        name:"",
        lastname:"",
        user:"",
        email:"",
        password:"",
        passwordconfirm:"",
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

      function handleDoctor(e) {
        var optionSelected = document.getElementById("optionSelected").value;
        if(optionSelected === "medico") {
            document.getElementById("medicalInputs").style.display = "block"
      } else {
        document.getElementById("medicalInputs").style.display = "none"
      }
      }

      function handleSubmit(e) {
        e.preventDefault();
        dispatch(createUser(form));
        alert("¡Tu usuario ha sido creado!");
        setForm({
            role:"",
            speciality:"",
            credentials:"",
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
        // history.push("/home");
      }


    return (
     <div>
        <div>
            <h3>Ingresa tus datos</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Rol: </label>
                    <select id="optionSelected" onChange={(e) => handleDoctor(e)}>
                        <option disabled="">Selecciona una opción</option>
                        <option value="medico">Médico</option>
                        <option value="paciente">Paciente</option>
                    </select>
                    <p>{errors.role}</p>
                </div>
                    <div id="medicalInputs">
                        <div>
                            <label>Especialidad: </label>
                            <p>
                            <input type="text" name="speciality" value={form.speciality} onChange={(e) => handleChange(e)} placeholder="Especialidad"/>
                            <p>{errors.speciality}</p>
                            </p>
                        </div>
                        <div>
                            <label>Credenciales: </label>
                            <p>
                            <input type="text" name="credentials" value={form.credentials} onChange={(e) => handleChange(e)} placeholder="Crdenciales"/>
                            <p>{errors.credentials}</p>
                            </p>
                        </div>
                    </div>
               

                <div>
                    <label>Nombre: </label>
                    <p>
                    <input type="text" name="name" value={form.name} onChange={(e) => handleChange(e)} placeholder="Nombre"/>
                    <p>{errors.name}</p>
                    </p>
                </div>
                <div>
                    <label>Apellido: </label>
                    <p>
                    <input type="text" name="lastname" value={form.lastname} onChange={(e) => handleChange(e)} placeholder="Apellido"/>
                    <p>{errors.lastname}</p>
                    </p>
                </div>
                <div>
                    <label>Usuario: </label>
                    <p>
                    <input type="text" name="user" value={form.user} onChange={(e) => handleChange(e)} placeholder="Usuario"/>
                    <p>{errors.user}</p>
                    </p>
                </div>
                <div>
                    <label>Email: </label>
                    <p>
                    <input type="text" name="email" value={form.email} onChange={(e) => handleChange(e)} placeholder="Email"/>
                    <p>{errors.email}</p>
                    </p>
                </div>
                <div>
                    <label>Contraseña: </label>
                    <p>
                    <input type="password" name="password" value={form.password} onChange={(e) => handleChange(e)} placeholder="Contraseña"/>
                    <p>{errors.password}</p>
                    </p>
                </div>
                <div>
                    <label>Confirma tu contraseña: </label>
                    <p>
                    <input type="password" name="passwordconfirm" placeholder="Contraseña"/>
                    <p>{errors.passwordconfirm}</p>
                    </p>
                </div>
                <div>
                    <label>Imagen: </label>
                    <p>
                    <input type="url" name="image" value={form.image} onChange={(e) => handleChange(e)} placeholder="Link a la imagen"/>
                    <p>{errors.image}</p>
                    </p>
                </div>
                <div>
                    <label>Edad: </label>
                    <p>
                    <input type="number" min="1" max="100" step="1" name="age" value={form.age} onChange={(e) => handleChange(e)} placeholder="Edad"/>
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
                    <input type="text" name="adress" value={form.adress} onChange={(e) => handleChange(e)} placeholder="Dirección"/>
                    <p>{errors.adress}</p>
                    </p>
                </div>
                <div>
                    <label>Teléfono: </label>
                    <p>
                    <input type="text" name="phone" value={form.phone} onChange={(e) => handleChange(e)} placeholder="Teléfono"/>
                    <p>{errors.phone}</p>
                    </p>
                </div>
                <div>
                    <label>Detección: </label>
                    <p>
                    <input type="text" name="detection" value={form.detection} onChange={(e) => handleChange(e)} placeholder="Detección"/>
                    <p>{errors.detection}</p>
                    </p>
                </div>
               
                <div>
                    <button type="submit">CREAR USUARIO</button>
                </div>
            </form>
        </div>
     </div>   
    )
}

export default Form;