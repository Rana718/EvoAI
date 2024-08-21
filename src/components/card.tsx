import React, { useEffect, useState } from "react";

interface CardProps {
    backendResponse: string | string[];
    userInput: string;
}

const Card: React.FC<CardProps> = ({ backendResponse, userInput }) => {
    const [displayedResponse, setDisplayedResponse] = useState<string>("");
    const responseArray = Array.isArray(backendResponse)
        ? backendResponse
        : backendResponse
            ? [backendResponse]
            : [];

    const formatResponse = (response: string) => {
        return response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    };

    useEffect(() => {
        if (responseArray.length > 0) {
            let currentCharIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentCharIndex < responseArray[0].length) {
                    setDisplayedResponse((prev) => prev + responseArray[0][currentCharIndex]);
                    currentCharIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 20); 
            return () => clearInterval(typingInterval);
        }
    }, [backendResponse]);

    return (
        <div className="flex flex-col space-y-4">
            {/* Display User's Input on the Right */}
            {userInput && (
                <div className="self-end bg-blue-600 text-white p-3 rounded-lg max-w-[80%] break-words">
                    {userInput}
                </div>
            )}
            {/* Display Backend Responses on the Left */}
            {displayedResponse && (
                <div className="self-start bg-gray-200 text-gray-900 p-3 rounded-lg max-w-[80%] break-words">
                    <p dangerouslySetInnerHTML={{ __html: formatResponse(displayedResponse) }} />
                </div>
            )}
        </div>
    );
}

export default Card;
