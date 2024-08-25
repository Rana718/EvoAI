import React from 'react';
import ReactMarkdown from 'react-markdown';

type Message = {
  text: string;
  isUser: boolean;
};

type ChatContainerProps = {
  messages: Message[];
};

const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => {
  return (
    <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-full bg-gray-50 rounded-lg shadow-inner">
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-full md:max-w-[70%] p-4 rounded-lg shadow-md transform transition-transform ${
              message.isUser
                ? 'bg-blue-500 text-white animate-slideInRight'
                : 'bg-gray-200 text-black animate-slideInLeft'
            }`}
          >
            {!message.isUser ? (<p>GODX: </p>) : (<p>User: </p>)}
            <ReactMarkdown>
              {message.text}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
