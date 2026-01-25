import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateModelingProblem = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a unique mathematical modeling problem statement related to "${topic}". 
      The problem should be suitable for undergraduate students (similar to MCM/ICM contest problems).
      Format the output with Markdown:
      1. Title
      2. Problem Background
      3. Specific Task/Question
      4. Suggested Mathematical Approaches (e.g., Differential Equations, Graph Theory, Monte Carlo).
      Keep it concise but inspiring.`,
      config: {
        systemInstruction: "You are a senior professor of Applied Mathematics at The Ohio State University. You help students practice for the Mathematical Contest in Modeling (MCM).",
        temperature: 0.7,
      }
    });
    
    return response.text || "Could not generate a problem at this time.";
  } catch (error) {
    console.error("Error generating problem:", error);
    return "An error occurred while communicating with the AI. Please check your API key.";
  }
};
