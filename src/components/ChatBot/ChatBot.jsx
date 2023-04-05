import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./bot/config";
import MessageParser from "./bot/MessageParser.js";
import ActionProvider from "./bot/ActionProvider.js";
import imgrobot from "../../assets/img/robot.png";
import imgclose from "../../assets/img/close.png";

const ChatBot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showButton, setShowButton] = useState(window.innerWidth >= 950);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 995) {
        setShowChatbot(false);
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chatbotStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: showChatbot ? 1 : -1,
    transition: "transform 0.3s ease",
    transform: showChatbot ? "scale(1)" : "scale(0)",
  };

  return (
    <div style={{ position: "relative" }}>
      {showButton && (
        <img
          src={imgrobot}
          alt="Chatbot"
          onClick={toggleChatbot}
          style={{ cursor: "pointer" }}
        />
      )}
      <div style={chatbotStyle}>
        <img
          src={imgclose}
          alt="Close"
          onClick={closeChatbot}
          style={{ cursor: "pointer" }}
        ></img>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default ChatBot;
