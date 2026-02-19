import { formatDate, formatTime } from "../utils/helpers";


const styles = {
  card: {
    background:   "#FFFFFF",
    borderRadius: 10,
    padding:      "18px 20px 12px",
    boxShadow:    "0 1px 4px rgba(0,0,0,0.06)",
    border:       "1px solid #EEE",
  },

  text: {
    margin:     "0 0 12px",
    fontSize:   15,
    color:      "#1A1A1A",
    lineHeight: 1.7,
    whiteSpace: "pre-wrap",
    wordBreak:  "break-word",
  },

  footer: {
    display:        "flex",
    justifyContent: "flex-end",
    alignItems:     "center",
    gap:            6,
  },

  date: {
    fontSize:   12,
    color:      "#8A9BB0",
    fontWeight: 500,
  },

  dot: {
    fontSize: 12,
    color:    "#8A9BB0",
  },

  time: {
    fontSize:   12,
    color:      "#8A9BB0",
    fontWeight: 500,
  },
};


export function NoteCard({ note }) {
  const timestamp = note.updatedAt || note.createdAt;

  return (
    <div style={styles.card}>
      <p style={styles.text}>{note.text}</p>
      <div style={styles.footer}>
        <span style={styles.date}>{formatDate(timestamp)}</span>
        <span style={styles.dot}>•</span>
        <span style={styles.time}>{formatTime(timestamp)}</span>
      </div>
    </div>
  );
}