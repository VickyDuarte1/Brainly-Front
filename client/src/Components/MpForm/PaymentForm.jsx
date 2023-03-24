import React, { useEffect } from 'react';
import "./PaymentForm.css"

const  PaymentForm = () => {
    const publicKey = "APP_USR-ef2d6a96-162e-4549-8966-4e747386889b";

    useEffect(() => {
        // Agrega el script de MercadoPago a la página
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => {
            // Crea la instancia de MercadoPago con tu clave pública
            const mp = new window.MercadoPago(publicKey);

            // Crea el formulario de tarjeta de crédito
            const cardForm = mp.cardForm({
                amount: "250",
                iframe: true,
                form: {
                    id: "form-checkout",
                    cardNumber: {
                        id: "form-checkout__cardNumber",
                        placeholder: "Numero de tarjeta",
                    },
                    expirationDate: {
                        id: "form-checkout__expirationDate",
                        placeholder: "MM/YY",
                    },
                    securityCode: {
                        id: "form-checkout__securityCode",
                        placeholder: "Código de seguridad",
                    },
                    cardholderName: {
                        id: "form-checkout__cardholderName",
                        placeholder: "Titular de la tarjeta",
                    },
                    issuer: {
                        id: "form-checkout__issuer",
                        placeholder: "Banco emisor",
                    },
                    installments: {
                        id: "form-checkout__installments",
                        placeholder: "Cuotas",
                    },
                    identificationType: {
                        id: "form-checkout__identificationType",
                        placeholder: "Tipo de documento",
                    },
                    identificationNumber: {
                        id: "form-checkout__identificationNumber",
                        placeholder: "Número del documento",
                    },
                    cardholderEmail: {
                        id: "form-checkout__cardholderEmail",
                        placeholder: "E-mail",
                    },
                },
                callbacks: {
                    onFormMounted: (error) => {
                        if (error)
                            return console.warn("Form Mounted handling error: ", error);
                        console.log("Form mounted");
                    },
                    onSubmit: (event) => {
                        event.preventDefault();

                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            amount,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = cardForm.getCardFormData();

                        fetch("http://localhost:5000/generar_pago", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                token,
                                issuer_id,
                                payment_method_id,
                                transaction_amount: Number(amount),
                                installments: Number(installments),
                                description: "Descripción del producto",
                                payer: {
                                    email,
                                    identification: {
                                        type: identificationType,
                                        number: identificationNumber,
                                    },
                                },
                            }),
                        })
                        .then(
                            response => response.json()
                        )
                        .then(data => window.location.href = data.link)
                    },
                    onFetching: (resource) => {
                        console.log("Fetching resource: ", resource);

                        // Animate progress bar
                        const progressBar = document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");

                        return () => {
                            progressBar.setAttribute("value", "0");
                        };
                    },
                },
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [publicKey]);

    return (
        <div>
            <form id="form-checkout">
                <div id="form-checkout__cardNumber" className="container"></div>
                <div id="form-checkout__expirationDate" className="container"></div>
                <div id="form-checkout__securityCode" className="container"></div>
                <input type="text" id="form-checkout__cardholderName" />
                <select id="form-checkout__issuer"></select>
                <select id="form-checkout__installments"></select>
                <select id="form-checkout__identificationType"></select>
                <input type="text" id="form-checkout__identificationNumber" />
                <input type="email" id="form-checkout__cardholderEmail" />

                <button type="submit" id="form-checkout__submit">Pagar</button>
                <progress value="0" className="progress-bar">Cargando...</progress>
            </form>
        </div>
    )

};

export default PaymentForm;