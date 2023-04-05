import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('1')) {
      actions.option1();
    }
    if (message.includes('2')) {
      actions.option2();
    }
    if (message.includes('3')) {
      actions.option3();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;