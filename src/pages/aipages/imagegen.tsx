import '../../app/globals.css';
import { useState } from 'react';
import Aibar from '@/components/Aibar';

export default function Imagegen() {
    const [prompt, setPrompt] = useState('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/gen-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImageSrc(imageUrl);
        } else {
            console.error('Error generating image:', await response.json());
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Aibar />
            <div className="flex flex-col items-center justify-center py-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Generate Image</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter a prompt"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">
                        Generate
                    </button>
                </form>

                {imageSrc && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generated Image:</h2>
                        <img src={imageSrc} alt="Generated" className="max-w-full h-auto rounded-md shadow-md"/>
                    </div>
                )}
            </div>
        </div>
    );
}
