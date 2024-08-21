import React, { useState, FormEvent } from "react";
import Card from "./card";

const InputBox: React.FC = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [messages, setMessages] = useState<{ userInput: string, backendResponse: string }[]>([]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        try {
            const res = await fetch('/api/aitext', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText: userInput }),
            });
            const data = await res.json();
            setMessages([...messages, { userInput, backendResponse: `AI: ${data.aitext}` }]);
        } catch (e) {
            console.error('Error fetching backend response:', e);
            setMessages([...messages, { userInput, backendResponse: "Error fetching backend response." }]);
        }

        setUserInput('');
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <Card
                        key={index}
                        userInput={message.userInput}
                        backendResponse={message.backendResponse}
                    />
                ))}
            </div>
            <form
                onSubmit={handleSubmit}
                className="bg-white border-t border-gray-200 p-4 fixed bottom-0 left-0 w-full flex items-center"
            >
                <input
                    type="text"
                    className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type your query..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default InputBox;
