// import React, { useState } from "react";
// import axios from "axios";

// function ImageUploader() {
//   const [file, setFile] = useState(null);

//   const handleFileUpload = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleImageUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await axios.post("http://localhost:5000/upload-image", formData);

//     console.log(response.data);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />
//       <button onClick={handleImageUpload}>Cargar Imagen</button>
//     </div>
//   );
// }

// export default ImageUploader;






import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import style from './UserCloudinary.module.css';
import brainly4 from '../../Assets/brainly4.jpg';
import NavBar from '../NavBar/NavBar';

const UserCloudinary = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState(null)
  const navigate = useNavigate();

  const uploadImage = async () => {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/brainlypf/image/upload",
      {
        method: "POST",
        body: formData,
      }
    )
    const file = await res.json();
    console.log(res)
    setImage(file.secure_url)
    setLoading(false)
  }

  const handleShowConfirmation = (event) => {
    const files = event.target.files[0]
    const data = new FormData()
    data.append("file", files)
    data.append("upload_preset", "brainlyapp");
    setFormData(data)
    const imageUrl = URL.createObjectURL(files)
    setImage(imageUrl);//imagen previa
    setShowConfirmation(true);
    setLoading(true);
    alert('Imagen cargada correctamente')    
    setLoading(false)
  }


  return (
    <div>
      <NavBar/>
      
      <Container>
        <div className={style.logoContainer}>

        </div>
        <h1 className={style.title}>
          Carga de imágenes
        </h1>
        <FormGroup className={style.formGroup}>
          <Input
            type="file"
            name="file"
            placeholder="Sube tu imagen aquí..."
            onChange={handleShowConfirmation}>
          </Input>
          {
          loading 
          ? (<h3>Cargando imagen</h3>) 
          : (<img src={image} className={style.previewImage} style={{ width: "300px" }} />)
          }
          {
          image && <button className={style.buttonDelete} onClick={() => setImage("")}>X</button>
          }
          {
          showConfirmation && (
            <button className={style.buttonConfirmation} onClick={uploadImage}>Confirmar carga</button>
          )
          }
        </FormGroup>
      </Container>

    </div>
  )
}


export default UserCloudinary;















