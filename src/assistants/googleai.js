import { GoogleGenerativeAI } from "@google/generative-ai";

const googleAi = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export class Assintant {
  #chat;
  constructor(model = "gemini-1.5-flash") {
    const gemini = googleAi.getGenerativeModel({ model });
    this.#chat = gemini.startChat({ history: [] });
  }
  async chat(content) {
    try {
      const result = await this.#chat.sendMessage(content);
      return result.response.text();
    } catch (error) {
      throw error;
    }
  }
  async *chatStream(content) {
    try {
      const result = await this.#chat.sendMessageStream(content);
      for await (const chunk of result.stream) {
        yield chunk.text();
      }
    } catch (error) {
      throw error;
    }
  }
}
