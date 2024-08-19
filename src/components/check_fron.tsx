import { useState, FormEvent } from "react"
export default function Godcheck() {
    const [inputtext, setInputText] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputtext }),
        });
        const data = await res.json();
        setResponseMessage(data.message);
    };

    return (
        <div>
            <input type="text" value={inputtext} onChange={(e) => setInputText(e.target.value)} />
            <button onClick={handleSubmit}>Check</button>

            {responseMessage && <p>{responseMessage}</p>}
            
        </div>
    )
}