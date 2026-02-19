import { useState }            from "react";
import { GlobalStyle }         from "./styles/globalStyles";
import { useNotes }            from "./hooks/useNotes";
import { useWindowSize }       from "./hooks/useWindowSize";
import { Sidebar }             from "./components/Sidebar";
import { NotesPanel }          from "./components/NotesPanel";
import { WelcomeScreen }       from "./components/WelcomeScreen";
import { CreateGroupModal }    from "./components/CreateGroupModal";


const styles = {
  shell: {
    display:    "flex",
    width:      "100vw",
    height:     "100vh",
    overflow:   "hidden",
    background: "#fff",
  },
};

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const {
    groups,
    activeGroup,
    activeNotes,
    existingNames,
    setActiveGroup,
    createGroup,
    addNote,
  } = useNotes();

  const { isMobile } = useWindowSize(680);

  const showSidebar = !isMobile || !activeGroup;
  const showNotes   = !isMobile || !!activeGroup;

  function handleGroupSelect(group) {
    setActiveGroup(group);
  }

  function handleGroupCreate(data) {
    createGroup(data);
    setShowModal(false);
  }

  return (
    <>
      <GlobalStyle />

      <div style={styles.shell}>

        {showSidebar && (
          <Sidebar
            groups={groups}
            activeGroup={activeGroup}
            onSelect={handleGroupSelect}
            onNewGroup={() => setShowModal(true)}
          />
        )}

        {showNotes && (
          activeGroup
            ? (
              <NotesPanel
                group={activeGroup}
                notes={activeNotes}
                onAdd={addNote}
                onBack={() => setActiveGroup(null)}
              />
            )
            : <WelcomeScreen />
        )}

        {showModal && (
          <CreateGroupModal
            onClose={() => setShowModal(false)}
            onCreate={handleGroupCreate}
            existingNames={existingNames}
          />
        )}

      </div>
    </>
  );
}