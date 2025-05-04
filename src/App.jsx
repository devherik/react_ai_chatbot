import { useState } from "react";
import { Assintant } from "./assistants/googleai.js";
import { Loader } from "./components/Loader/Loader.jsx";
import { Chat } from "./components/Chat/Chat.jsx";
import { Controls } from "./components/Controls/Controls.jsx";
import styles from "./App.module.css";

function App() {
  const assistant = new Assintant();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setLoading(true);
    try {
      const result = await assistant.chat(content);
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldnt process your request. Please try again.",
        role: "system",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.App}>
      {loading && <Loader />}
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls isDisabled={loading} onSend={handleContentSend} />
    </div>
  );
}

export default App;
