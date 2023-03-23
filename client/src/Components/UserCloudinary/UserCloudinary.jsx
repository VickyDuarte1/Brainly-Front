import React, { useState } from "react";
import axios from "axios";

function ImageUploader() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/upload-image", formData);

    console.log(response.data);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleImageUpload}>Cargar Imagen</button>
    </div>
  );
}

export default ImageUploader;






// import React, { useState } from 'react';
// import { Container, FormGroup, Input } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import style from './UserCloudinary.module.css';
// import brainly4 from '../../Assets/brainly4.jpg';


// const UserCloudinary = (props) => {
//     const [image, setImage] = useState(""); 
//     const [loading, setLoading] = useState(false);
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const navigate = useNavigate();
 
//     const uploadImage = async (event) => {
//         const files = event.target.files 
//         const data = new FormData()
//         data.append("file", files[0])
//         data.append("upload_preset", "brainlyapp");
//         const imageUrl = URL.createObjectURL(files[0])
//         setImage(imageUrl);//imagen previa
//         setShowConfirmation(false);
//         setLoading(true);
//         alert ('Imagen cargada correctamente')
//         navigate('/home')
        
       
       
       
   
        
    
//         const res = await fetch (
//             "https://api.cloudinary.com/v1_1/brainlypf/image/upload",
//             {
//                 method: "POST",
//                 body: data,
//             }
//         )
//         const file = await res.json();
//         console.log(res)
//         setImage(file.secure_url)
//         setLoading(false)
//         } 
        
//         const handleShowConfirmation = () => {
//             setShowConfirmation(true)
    
         
//         }


//     return (
//         <div>
//             <Container>
//             <div className={style.logoContainer}>
//             <Link to='/home'>
//                 <img src={brainly4} className={style.logo}  width='100px' height='100px'/>
//             </Link>
//         </div>
//                 <h1 className={style.title}>
//                     Carga de imágenes
//                 </h1>
//                 <FormGroup className={style.formGroup}>
//                     <Input
//                     type="file"
//                     name="file"
//                     placeholder="Sube tu imagen aquí..."
//                     onChange = {handleShowConfirmation}>
//                     </Input>
//                     { loading ? (<h3>Cargando imagen</h3>) : (<img src={image} className={style.previewImage} style={{width:"300px"}}/>)}
//                     {image && <button className={style.buttonDelete} onClick={() => setImage("")}>X</button>}
//                     {showConfirmation && (
//                         <button className={style.buttonConfirmation} onClick={uploadImage}>Confirmar carga</button>
//                     )}
//                 </FormGroup>
//             </Container>
       
//         </div>
//     )
// }


// export default UserCloudinary;















