// import React from 'react';
// import MercadoPago from 'https://sdk.mercadopago.com/js/v2';

// const Premium=()=>{
   
//     const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
//         locale: 'es'
//       });
//       const bricksBuilder = mp.bricks();

//       const renderCardPaymentBrick = async (bricksBuilder) => {
//         const settings = {
//           initialization: {
//             amount: 100, // monto a ser pago
//             payer: {
//               email: "",
//             },
//           },
//           customization: {
//             visual: {
//               style: {
//                 theme: 'default', // | 'dark' | 'bootstrap' | 'flat'
//               }
//             },
//           },
//           callbacks: {
//             onReady: () => {
//               // callback llamado cuando Brick esté listo
//             },
//             onSubmit: (cardFormData) => {
//               //  callback llamado cuando el usuario haga clic en el botón enviar los datos
//               //  ejemplo de envío de los datos recolectados por el Brick a su servidor
//               return new Promise((resolve, reject) => {
//                 fetch("/process_payment", {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify(cardFormData)
//                 })
//                   .then((response) => {
//                     // recibir el resultado del pago
//                     resolve();
//                   })
//                   .catch((error) => {
//                     // tratar respuesta de error al intentar crear el pago
//                     reject();
//                   })
//               });
//             },
//             onError: (error) => {
//               // callback llamado para todos los casos de error de Brick
//             },
//           },
//         };
//         window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
//       };

//     return (


// <div>
// renderCardPaymentBrick(bricksBuilder);
// </div>

//     )
// }

// export default Premium;






