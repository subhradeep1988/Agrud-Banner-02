import { GoogleGenAI } from "@google/genai";
import { InsightTopic } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateFinancialInsight = async (topic: InsightTopic): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please provide a valid API key to generate insights.";
  }

  try {
    const prompt = `
      You are a senior financial analyst at Agrud, a leading financial technology and data intelligence firm. 
      Generate a concise, professional, and forward-looking executive summary (max 80 words) about the current trends in "${topic}".
      Focus on data-driven decision making, AI integration in finance, and market efficiency.
      Tone: Professional, Corporate, Innovative, Authoritative.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster simple text
      }
    });

    return response.text || "No insight generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to generate insight at this moment. Please try again later.";
  }
};