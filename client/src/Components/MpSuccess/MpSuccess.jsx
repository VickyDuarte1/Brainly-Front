import axios from 'axios';
import React, { useState, useEffect } from 'react';


const MpSuccess = () => {

    const [ data, setData ] = useState({})

    useEffect(() => {
        const queryMp = async () => {
            const dataMp = (await axios('https://brainly-back.onrender.com/pago_exitoso')).data
            setData(dataMp)
        }
    }, [])

    return (
        <div>
            <h1>Muchas gracias por suscribirte al plan premium de BRAINLY</h1>
        </div>
    )
}

export default MpSuccess;