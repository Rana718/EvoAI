import type { NextApiRequest, NextApiResponse } from "next";
import fetch from 'node-fetch';

interface ErrorResponse {
    error: string;
}

const isErrorResponse = (data: unknown): data is ErrorResponse => {
    return typeof data === 'object' && data !== null && 'error' in data && typeof (data as any).error === 'string';
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        try {
            const API_KEY = process.env.NEXT_PUBLIC_GEN_IMAGE as string;
            const response = await fetch(
                "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev", {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ inputs: prompt }),
            });

            if (!response.ok) {
                const errorData: unknown = await response.json();
                if (isErrorResponse(errorData)) {
                    return res.status(response.status).json({ error: errorData.error });
                } else {
                    return res.status(response.status).json({ error: 'Unknown error occurred' });
                }
            }

            const blob = await response.blob();
            const buffer = Buffer.from(await blob.arrayBuffer());
            res.setHeader('Content-Type', 'image/png');
            res.setHeader('Content-Disposition', 'inline; filename="generated_image.png"');
            res.send(buffer);
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ error: 'Failed to generate image' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
