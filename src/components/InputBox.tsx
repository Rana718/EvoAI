import React, { useState } from 'react';

type InputBoxProps = {
  onSend: (text: string) => void;
};

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-0 w-full p-4 bg-white border-t border-gray-300 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border rounded-l-lg focus:outline-none"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white p-2 rounded-r-lg"
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
