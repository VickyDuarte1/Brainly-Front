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

    const userFromStorage = localStorage.getItem("activeUser");
    if (userFromStorage) {
      setActiveUser(JSON.parse(userFromStorage));
    }
  }, [dispatch]);

  function findUser(username, password) {
    const user = pacientes.find(
      (user) => user.usuario === username && user.contraseña === password
    )
    if (user) {
      setActiveUser({ nombre: user.nombre, activeUser: true });
      localStorage.setItem("activeUser", JSON.stringify({ nombre: user.nombre, activeUser: true }));
      return user;
    } else {
    const  doctor = doctores.find(
        (doctor) => doctor.usuario === username && doctor.contraseña === password
      )
      if (doctor) {
        setActiveUser({ nombre: doctor.nombre, activeUser: true });
        localStorage.setItem("activeUser", JSON.stringify({ nombre: doctor.nombre, activeUser: true }));
        return doctor;
      }
    }
    
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const usuario = event.target.usuario.value;
    const contraseña = event.target.contraseña.value;
    const usuarioact = findUser(usuario, contraseña);
    if(usuarioact) console.log(usuarioact);

    if (!usuarioact) {
      // Muestra mensaje de error si el usuario no existe
      alert("Usuario o contraseña incorrectos");
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);
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
        {activeUser && (
          <button onClick={handleLogOut}>Cerrar sesión</button>
        )}
      </form>
      {activeUser && <p>Bienvenido {activeUser.nombre}</p>}
    </div>
  );
}