import { useState } from "react";

const styles = {
  wrapper: {
    padding:    "14px 20px 18px",
    background: "#001F8B",
    flexShrink: 0,
  },

  inner: {
    display:      "flex",
    alignItems:   "flex-end",
    background:   "#FFFFFF",
    borderRadius: 12,
    padding:      "8px 12px 8px 16px",
    gap:          8,
    boxShadow:    "0 2px 8px rgba(0,0,0,0.12)",
  },

  textarea: {
    flex:       1,
    border:     "none",
    outline:    "none",
    fontSize:   15,
    resize:     "none",
    fontFamily: "inherit",
    lineHeight: 1.55,
    background: "transparent",
    color:      "#1A1A1A",
    paddingTop: 6,
  },

  sendBtn: {
    background:   "none",
    border:       "none",
    display:      "flex",
    alignItems:   "center",
    justifyContent: "center",
    padding:      "6px",
    borderRadius: 8,
    flexShrink:   0,
    transition:   "color 0.2s",
    marginBottom: 2,
  },
};

export function NoteInput({ onSend }) {
  const [text, setText] = useState("");

  const hasText = text.trim().length > 0;

  function handleSend() {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your text here........"
          style={styles.textarea}
          rows={2}
          aria-label="Note input"
        />

        <button
          onClick={handleSend}
          disabled={!hasText}
          title="Send note (Enter)"
          aria-label="Send note"
          style={{
            ...styles.sendBtn,
            cursor: hasText ? "pointer" : "not-allowed",
          }}
        >

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 2L11 13"
              stroke={hasText ? "#001F8B" : "#BFBFBF"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke={hasText ? "#001F8B" : "#BFBFBF"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>
    </div>
  );
}