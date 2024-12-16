import React from 'react';
import './Message.css';

const Message = ({ text }) => {
  return (
    <div className="message-container">
      {text}
    </div>
  );
};

export default Message;