import { useEffect, useRef } from "react";
import { Avatar }    from "./Avatar";
import { NoteCard }  from "./NoteCard";
import { NoteInput } from "./NoteInput";

const styles = {
  panel: {
    flex:           1,
    display:        "flex",
    flexDirection:  "column",
    background:     "#F0F2F5",
    overflow:       "hidden",
  },

  header: {
    display:    "flex",
    alignItems: "center",
    gap:        16,
    padding:    "14px 28px",
    background: "#001F8B",
    boxShadow:  "0 2px 8px rgba(0,0,0,0.15)",
    flexShrink: 0,
  },

  backBtn: {
    background:     "none",
    border:         "none",
    cursor:         "pointer",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    padding:        4,
    marginRight:    4,
    borderRadius:   "50%",
    color:          "#FFF",
  },

  headerTitle: {
    fontSize:   20,
    fontWeight: 700,
    color:      "#FFFFFF",
  },

  list: {
    flex:          1,
    overflowY:     "auto",
    padding:       "20px 24px",
    display:       "flex",
    flexDirection: "column",
    gap:           14,
  },

  emptyHint: {
    textAlign: "center",
    color:     "#90A0B7",
    fontSize:  14,
    marginTop: 60,
  },
};

export function NotesPanel({ group, notes, onAdd, onBack }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [notes]);

  return (
    <main style={styles.panel}>

      <div style={styles.header}>
        <button
          className="back-btn"
          onClick={onBack}
          style={styles.backBtn}
          title="Back to groups"
          aria-label="Back to group list"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Avatar name={group.name} color={group.color} size={48} fontSize={17} />
        <span style={styles.headerTitle}>{group.name}</span>
      </div>

      <div className="notes-scroll" style={styles.list}>
        {notes.length === 0 ? (
          <p style={styles.emptyHint}>
            No notes yet — type below and press Enter ↵
          </p>
        ) : (
          notes.map(note => <NoteCard key={note.id} note={note} />)
        )}
    
        <div ref={bottomRef} />
      </div>

      
      <NoteInput onSend={onAdd} />

    </main>
  );
}