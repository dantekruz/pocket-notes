import welcomeIllustration from "../assets/welcome-illustration.svg";

// ─────────────────────────────────────────────────────────────────────────────
//  STYLES
// ─────────────────────────────────────────────────────────────────────────────
const styles = {
  panel: {
    flex:           1,
    background:     "#DAE5F5",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
  },

  box: {
    textAlign:      "center",
    maxWidth:       540,
    padding:        "0 32px",
    display:        "flex",
    flexDirection:  "column",
    alignItems:     "center",
  },

  illustration: {
    width:        320,
    height:       "auto",
    marginBottom: 24,
    maxWidth:     "100%", // responsive — shrinks on small screens
  },

  title: {
    fontSize:      44,
    fontWeight:    800,
    color:         "#1A1A1A",
    margin:        "0 0 16px",
    letterSpacing: "-0.5px",
  },

  subtitle: {
    fontSize:   16,
    color:      "#4A4A4A",
    lineHeight: 1.8,
    margin:     "0 0 28px",
  },

  encryptRow: {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
  },

  encryptText: {
    fontSize: 13,
    color:    "#555",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

/**
 * WelcomeScreen — shown in the right panel when no group is selected.
 *
 * The illustration is loaded from:
 *   src/assets/welcome-illustration.svg
 *
 * React (via webpack/Vite) handles the import and resolves the
 * correct path at build time — no manual path strings needed.
 */
export function WelcomeScreen() {
  return (
    <main style={styles.panel}>
      <div style={styles.box}>

        {/* ── Illustration from assets folder ── */}
        <img
          src={welcomeIllustration}
          alt="People collaborating around a notepad"
          style={styles.illustration}
        />

        {/* ── App title ── */}
        <h1 style={styles.title}>Pocket Notes</h1>

        {/* ── Tagline ── */}
        <p style={styles.subtitle}>
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>

        {/* ── End-to-end encrypted badge ── */}
        <div style={styles.encryptRow}>
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            style={{ marginRight: 6 }}
            aria-hidden="true"
          >
            <rect x="0.5" y="6.5" width="12" height="8" rx="1.5" fill="#555" />
            <path
              d="M3 6.5V4.5a3.5 3.5 0 017 0v2"
              stroke="#555"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span style={styles.encryptText}>end-to-end encrypted</span>
        </div>

      </div>
    </main>
  );
}