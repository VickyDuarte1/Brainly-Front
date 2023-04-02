const Modal = ({ doctor, onClose }) => {
    return (
      <div className="modal">
        <h2>{doctor.nombre}</h2>
        <p>{doctor.correo}</p>
        <p>{doctor.direccion}</p>
        <p>{doctor.telefono}</p>
        <p>{doctor.especialidad}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    );
  };