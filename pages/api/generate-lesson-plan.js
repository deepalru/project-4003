// pages/api/generate-lesson-plan.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.AIzaSyBQOZAaSf5ATfK0NDICRvVAFIRU-rEJwko;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});

      const result = await model.generateContent(`Create a lesson plan about ${topic}`);
      const response = await result.response;
      const lessonPlan = response.text();

      res.status(200).json({ lessonPlan });
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      res.status(500).json({ error: 'Failed to generate lesson plan' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
