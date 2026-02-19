import { useEffect } from "react";


const CSS = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  /* ── Sidebar scrollbar ──────────────────────── */
  .sidebar-scroll::-webkit-scrollbar       { width: 5px; }
  .sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
  .sidebar-scroll::-webkit-scrollbar-thumb { background: #D0D0D0; border-radius: 99px; }
  .sidebar-scroll { scrollbar-width: thin; scrollbar-color: #D0D0D0 transparent; }

  /* ── Notes list scrollbar ───────────────────── */
  .notes-scroll::-webkit-scrollbar       { width: 5px; }
  .notes-scroll::-webkit-scrollbar-track { background: transparent; }
  .notes-scroll::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 99px; }
  .notes-scroll { scrollbar-width: thin; scrollbar-color: #CBD5E1 transparent; }

  /* ── Back button: hidden on desktop ────────── */
  .back-btn { display: none !important; }

  /* ── Mobile breakpoint: ≤ 680px ────────────── */
  @media (max-width: 680px) {
    .desktop-sidebar {
      width: 100% !important;
      min-width: 100% !important;
    }
    .back-btn {
      display: flex !important;
    }
  }

  /* ── Modal: tighter on small screens ───────── */
  @media (max-width: 540px) {
    .modal-inner {
      padding: 24px 18px !important;
    }
    .field-label {
      width: auto !important;
      min-width: unset !important;
    }
    .field-input {
      width: 100% !important;
      min-width: 0 !important;
    }
    .error-msg {
      margin-left: 0 !important;
    }
  }
`;

export function GlobalStyle() {
  useEffect(() => {
    const tag       = document.createElement("style");
    tag.id          = "pocket-notes-global";
    tag.innerHTML   = CSS;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return null;
}