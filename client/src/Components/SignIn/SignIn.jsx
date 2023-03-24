import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors, getUsers } from "../../Redux/actions";
import "./signin.css";

export default function SignIn() {
  const [activeUser, setActiveUser] = useState(null);

  const pacientes = useSelector((state) => state.pacientes);

    const doctores = useSelector((state)=> state.doctores);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getDoctors());
  }, [dispatch]);

  function findUser(username, password) {
    const user = pacientes.find(
      (user) => user.usuario === username && user.contraseña === password
    )
    if (user) {
      setActiveUser({ nombre: user.nombre, activeUser: true });
      console.log(user);
      console.log(pacientes);
      console.log(doctores);
      return user;
    } else {
    const  doctor = doctores.find(
        (doctor) => doctor.usuario === username && doctor.contraseña === password
      )
      if (doctor) {
        setActiveUser({ nombre: doctor.nombre, activeUser: true });
        console.log(doctor);
        return doctor;
      }
    }
    
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const usuario = event.target.usuario.value;
    const contraseña = event.target.contraseña.value;
    const usuarioact = findUser(usuario, contraseña)
    

    if (!usuarioact) {
      // Muestra mensaje de error si el usuario no existe
      alert("Usuario o contraseña incorrectos");

    return usuarioact;
  }
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <form onSubmit={handleSignIn}>
        <div className="top">
          <label>Usuario:</label>
        </div>
        <div className="signin">
          <input type="text" name="usuario" placeholder="Usuario" />
        </div>
        <div>
          <label>Contraseña:</label>
          <div>
            <input type="password" name="contraseña" placeholder="Contraseña" />
          </div>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {activeUser && <p>Bienvenido {activeUser.nombre}</p>}
    </div>
  );
}