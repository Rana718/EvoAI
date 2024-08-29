
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from 'node-fetch'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Promt is Required ' });
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
            }
            );
            const blob = await response.blob();
            const buffer = Buffer.from(await blob.arrayBuffer());
            res.setHeader('Content-Type', 'image/png');
            res.setHeader('Content-Disposition', 'inline; filename="generated_image.png"');
            res.send(buffer);
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ error: 'Failed to generate image' });
        }
    }
}