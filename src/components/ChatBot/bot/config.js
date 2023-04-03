import { createChatBotMessage } from "react-chatbot-kit";
import { createCustomMessage } from "react-chatbot-kit";

const botName = "ExcitementBot";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  state: {
    myCustomProperty: "Bikershorts",
  },
};

export default config;
