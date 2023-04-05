import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const option1 = () => {
    const botMessage = createChatBotMessage(
      "Brainly es la solución definitiva para la detección temprana de tumores cerebrales. Ingresa a nuestra aplicación hoy mismo y da el primer paso para proteger tu salud cerebral."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const option2 = () => {
    const botMessage = createChatBotMessage(
      "Utilizamos técnicas de aprendizaje profundo y aprendizaje automático para detectar el patrón de varias enfermedades con los registros electrónicos de salud del paciente y proporcionar información sobre diversas anomalías."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const option3 = () => {
    const botMessage = createChatBotMessage(
      "Brainly es una aplicación única que combina tecnología de inteligencia artificial de vanguardia con un enfoque en la detección temprana de tumores cerebrales."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            option1,
            option2,
            option3,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
