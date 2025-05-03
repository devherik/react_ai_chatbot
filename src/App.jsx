import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Chat } from './components/Chat/Chat.jsx';
import { Controls } from './components/Controls/Controls.jsx';
import styles from './App.module.css';

const googleAi = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
const gemini = googleAi.getGenerativeModel({model: 'gemini-1.5-flash'});
const chat = gemini.startChat({ history: []});

function App() {
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  async function handleContentSend(content) {
    addMessage({content, role: 'user'});
    try {
      const result = await chat.sendMessage(content);
      addMessage({content: result.response.text(), role: 'assistant'});

    } catch (error) {
      addMessage({content: 'Sorry, I couldnt process your request. Please try again.', role: 'system'});
    }
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='/chat-bot.png' />
        <h2 className={styles.Title}>AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App
