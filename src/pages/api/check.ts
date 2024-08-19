"use server"

import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'POST'){
        const { text } = req.body as { text: string }; 

        if (text === "Godx"){
            res.status(200).json({ message: "God is Here" });
        } else {
            res.status(200).json({ message: "keout to hell 🤬🤬" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" }); // Handle non-POST methods
    }
}
