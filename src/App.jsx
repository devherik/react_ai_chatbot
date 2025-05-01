import { useState } from 'react'
import { Chat } from './components/Chat/Chat.jsx'
import styles from './App.module.css'

function App() {
  const [messages, setMessages] = useState(MESSAGES);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='/chat-bot.png' />
        <h2 className={styles.Title}>AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
    </div>
  );
}

const MESSAGES = [
  {
    role: 'user',
    content: 'Hola, ¿cómo estás?',
  },
  {
    role: 'assistant',
    content: '¡Hola! ¿En qué puedo ayudarte hoy?',
  },
  {
    role: 'user',
    content: 'Hola, ¿cómo estás?',
  },
  {
    role: 'assistant',
    content: '¡Hola! ¿En qué puedo ayudarte hoy?',
  },{
    role: 'user',
    content: 'Hola, ¿cómo estás?',
  },
  {
    role: 'assistant',
    content: '¡Hola! ¿En qué puedo ayudarte hoy?',
  },{
    role: 'user',
    content: 'Hola, ¿cómo estás?',
  },
  {
    role: 'assistant',
    content: '¡Hola! ¿En qué puedo ayudarte hoy?',
  },{
    role: 'user',
    content: 'Hola, ¿cómo estás?',
  },
  {
    role: 'assistant',
    content: '¡Hola! ¿En qué puedo ayudarte hoy?',
  },
]

export default App
