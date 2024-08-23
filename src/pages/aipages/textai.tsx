import '../../app/globals.css';
import React, { FormEvent, useState } from 'react';
import ChatContainer from '@/components/ChatContainer';
import InputBox from '@/components/InputBox';
import Aibar from '@/components/Aibar';

const AIPage: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages([...messages, { text, isUser: true }]);

    try {
      const res = await fetch('/api/aitext', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText: text }),
      });
      const data = await res.json();
      setMessages([...messages, { text, isUser: true }, { text: `AI: ${data.aitext}`, isUser: false }]);
    } catch (e) {
      console.error('Error fetching backend response:', e);
      setMessages([...messages, { text, isUser: true }, { text: 'Error fetching backend response.', isUser: false }]);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Aibar/>
      <div className="flex-1 overflow-y-auto p-1 mb-16">
        <ChatContainer messages={messages} />
      </div>
      <InputBox onSend={handleSendMessage} />
    </div>
  );
};

export default AIPage;
