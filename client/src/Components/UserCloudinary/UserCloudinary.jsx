import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import style from './UserCloudinary.module.css'
import brainly4 from '../../Assets/brainly4.jpg'


const UserCloudinary = (props) => {
    const [image, setImage] = useState(""); 
    const [loading, setLoading] = useState(false);

    const uploadImage = async (event) => {
        const files = event.target.files 
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "brainlyapp");
        setLoading(true);
        const res = await fetch (
            "https://api.cloudinary.com/v1_1/brainlypf/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        console.log(res)
        setImage(file.secure_url)
        setLoading(false)
    }


    return (
        <div>
            <Container>
                <h1>
                    Subiendo tu imagen
                </h1>
                <FormGroup>
                    <Input
                    type="file"
                    name="file"
                    placeholder="Sube tu imagen aquí..."
                    onChange = {uploadImage}>
                    </Input>
                    { loading ? (<h3>Cargando imagen</h3>) : (<img src={image} style={{width:"300px"}}/>)}
                </FormGroup>
            </Container>
            <Link to='/home'>
          <img src={brainly4} className={style.logo}  width='100px' height='100px'/>
    </Link>
        </div>
    )
}


export default UserCloudinary;