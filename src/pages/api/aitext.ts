import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.NEXT_PUBLIC_TEXT_KEY as string;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { inputText } = req.body;
        console.log(inputText);
        if (!inputText) {
            res.status(400).json({ error: "Text not found" });
            return;
        }
        try {
            const result = await model.generateContent(inputText);
            const response = await result.response;
            const text = await response.text();
            res.status(200).json({ aitext: text });
            console.log(text);
        } catch (e) {
            console.log("Error generating content:", e);
            res.status(500).json({ error: "Error generating content" });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
