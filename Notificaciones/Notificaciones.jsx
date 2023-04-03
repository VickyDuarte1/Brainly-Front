import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import io from "socket.io-client";
import axios from "axios";

const ENDPOINT = "https://brainly-back.onrender.com"; // Ruta del servidor SocketIO
const socket = io(ENDPOINT, { path: "/socket.io", transports: ["websocket"] });

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]); // Estado de la lista de notificaciones
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false); // Estado de la visibilidad del menú desplegable
  const [haySocket, setHaySocket] = useState(false);

  useEffect(() => {
    // Escuchar eventos del servidor SocketIO
    socket.on("notificacion", (mensaje) => {
      axios
        .then((response) => {
          setNotificaciones((prev) => [...prev, mensaje]);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    setHaySocket(true);

    // Cerrar conexión del socket al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, []);

  const toggleMostrarNotificaciones = () => {
    setMostrarNotificaciones(!mostrarNotificaciones);
  };

  const handleRead = () => {
    setNotificaciones([]);
    setMostrarNotificaciones(false);
  };

  return (
    <div>
      <div className="icon" onClick={toggleMostrarNotificaciones}>
        <FontAwesomeIcon icon={faBell} />
        {notificaciones.length > 0 && (
          <div className="counter">{notificaciones.length}</div>
        )}
      </div>
      {mostrarNotificaciones && haySocket && (
        <div className="notificaciones-menu">
          {notificaciones.map((notificacion, index) => (
            <li className="n" key={index}>
              <span className="notification">{notificacion}</span>
            </li>
          ))}
          {notificaciones.length === 0 && (
            <li className="notification">No hay notificaciones sin leer</li>
          )}
          <li>
            <Button className="nButton" onClick={handleRead}>
              Marcar como leído
            </Button>
          </li>
        </div>
      )}
    </div>
  );
};

export default Notificaciones;
