import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Brainly";

const config = {
  initialMessages: [
    createChatBotMessage(`Hola! Yo soy ${botName}.`),
    createChatBotMessage(`Escriba 1 Para saber que es Brainly`),
    createChatBotMessage(`Escriba 2 Para informarse de cómo funciona Brainly`),
    createChatBotMessage(`Escriba 3 Para conocer nuestras características`),
  ],
  botName: botName,
  headerTitle: "My Chatbot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1d8cf8",
    },
    chatButton: {
      backgroundColor: "#ba54f5",
    },
  },
};

export default config;
