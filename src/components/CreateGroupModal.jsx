import { useState, useRef } from "react";
import { GROUP_COLORS }      from "../utils/constants";


const styles = {
  overlay: {
    position:       "fixed",
    inset:          0,
    background:     "rgba(0,0,0,0.50)",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    zIndex:         200,
  },

  modal: {
    background:   "#FFFFFF",
    borderRadius: 16,
    padding:      "36px 42px",
    width:        520,
    maxWidth:     "92vw",
    boxShadow:    "0 8px 52px rgba(0,0,0,0.22)",
    overflowX:    "hidden",
  },

  title: {
    margin:     "0 0 30px",
    fontSize:   24,
    fontWeight: 700,
    color:      "#1A1A1A",
  },

  fieldRow: {
    display:     "flex",
    alignItems:  "center",
    flexWrap:    "wrap",
    gap:         10,
    marginBottom: 20,
  },

  fieldLabel: {
    width:      126,
    minWidth:   126,
    fontSize:   15,
    fontWeight: 600,
    color:      "#333",
    flexShrink: 0,
  },

  textInput: {
    flex:         1,
    minWidth:     0,
    width:        "100%",
    padding:      "10px 14px",
    borderRadius: 8,
    border:       "1.5px solid #CCC",
    fontSize:     15,
    outline:      "none",
    fontFamily:   "inherit",
  },

  colorRow: {
    display:  "flex",
    gap:      12,
    flexWrap: "wrap",
  },

  colorDot: {
    width:        36,
    height:       36,
    borderRadius: "50%",
    cursor:       "pointer",
    border:       "none",
    padding:      0,
    transition:   "transform 0.1s",
    flexShrink:   0,
  },

  errorMsg: {
    color:      "#D93025",
    fontSize:   13,
    margin:     "-6px 0 12px 0",
    width:      "100%",
  },

  footer: {
    display:        "flex",
    justifyContent: "flex-end",
    gap:            12,
    marginTop:      30,
  },

  btnCancel: {
    padding:      "10px 28px",
    borderRadius: 8,
    border:       "1.5px solid #CCC",
    background:   "#FFF",
    fontSize:     15,
    fontWeight:   500,
    cursor:       "pointer",
    fontFamily:   "inherit",
  },

  btnCreate: {
    padding:      "10px 28px",
    borderRadius: 8,
    border:       "none",
    background:   "#001F8B",
    color:        "#FFF",
    fontSize:     15,
    fontWeight:   600,
    cursor:       "pointer",
    fontFamily:   "inherit",
  },
};


export function CreateGroupModal({ onClose, onCreate, existingNames }) {
  const [name,  setName]  = useState("");
  const [color, setColor] = useState(GROUP_COLORS[0]);
  const [error, setError] = useState("");
  const overlayRef        = useRef(null);

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  function handleCreate() {
    const trimmed = name.trim();

    if (trimmed.length < 2) {
      setError("Group name must be at least 2 characters.");
      return;
    }
    if (existingNames.includes(trimmed.toLowerCase())) {
      setError("A group with this name already exists.");
      return;
    }

    onCreate({ name: trimmed, color });
  }

  return (
    <div ref={overlayRef} onClick={handleOverlayClick} style={styles.overlay}>
      <div className="modal-inner" style={styles.modal}>

        <h2 style={styles.title}>Create New group</h2>

        <div className="field-row" style={styles.fieldRow}>
          <span className="field-label" style={styles.fieldLabel}>Group Name</span>
          <input
            autoFocus
            value={name}
            onChange={e => { setName(e.target.value); setError(""); }}
            onKeyDown={e => e.key === "Enter" && handleCreate()}
            placeholder="Enter group name"
            className="field-input"
            style={styles.textInput}
          />
        </div>

        <div className="field-row" style={styles.fieldRow}>
          <span className="field-label" style={styles.fieldLabel}>Choose colour</span>
          <div className="color-row" style={styles.colorRow}>
            {GROUP_COLORS.map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                style={{
                  ...styles.colorDot,
                  background:    c,
                  outline:       color === c ? "3px solid #222" : "none",
                  outlineOffset: 2,
                }}
              />
            ))}
          </div>
        </div>

        {error && (
          <p className="error-msg" style={styles.errorMsg}>{error}</p>
        )}

        <div style={styles.footer}>
          <button onClick={onClose}      style={styles.btnCancel}>Cancel</button>
          <button onClick={handleCreate} style={styles.btnCreate}>Create Now</button>
        </div>

      </div>
    </div>
  );
}