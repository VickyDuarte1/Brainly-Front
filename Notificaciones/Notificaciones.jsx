import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import socketIOClient from "socket.io-client";

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);
  const [haySocket, setHaySocket] = useState(false);

  useEffect(() => {
    const socket = socketIOClient("https://brainly-back.onrender.com");

    socket.on("json", (data) => {
      setNotificaciones((prev) => [...prev, data.message]);
    });

    setHaySocket(true);

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
