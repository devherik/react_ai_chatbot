import { useState } from "react";
import TextAreaAutosize from "react-textarea-autosize";

import styles from "./Controls.module.css";

export function Controls({ isDisabled = false, onSend }) {
  const [content, setContent] = useState("");

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleContentSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      handleContentSend();
    }
  }

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <TextAreaAutosize
          className={styles.TextArea}
          disabled={isDisabled}
          placeholder="Message AI ChatBot"
          value={content}
          minRows={1}
          maxRows={4}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
        />
      </div>
      <button
        disabled={isDisabled}
        className={styles.Button}
        onClick={handleContentSend}
      >
        <SendIcon />
      </button>
    </div>
  );
  function SendIcon(params) {
    return <img src="/send.png" className={styles.SendIcon}></img>;
  }
}
