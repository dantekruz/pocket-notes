import { Avatar } from "./Avatar";


const styles = {
  sidebar: {
    width:        400,
    minWidth:     400,
    background:   "#FFFFFF",
    borderRight:  "1px solid #E0E0E0",
    display:      "flex",
    flexDirection: "column",
    position:     "relative",
    overflow:     "hidden",
  },

  header: {
    padding: "32px 36px 20px",
  },

  title: {
    fontSize:      26,
    fontWeight:    800,
    color:         "#1A1A1A",
    letterSpacing: "-0.3px",
  },

  groupList: {
    listStyle: "none",
    margin:    0,
    padding:   "4px 0 88px", 
    overflowY: "auto",
    flex:      1,
  },

  groupItem: {
    display:    "flex",
    alignItems: "center",
    gap:        20,
    padding:    "14px 24px",
    cursor:     "pointer",
    transition: "background 0.13s",
    margin:     "0 10px",
    borderRadius: 10,
  },

  groupName: {
    fontSize:     19,
    fontWeight:   700,
    color:        "#1A1A1A",
    whiteSpace:   "nowrap",
    overflow:     "hidden",
    textOverflow: "ellipsis",
  },

  fab: {
    position:     "absolute",
    bottom:       26,
    right:        26,
    width:        56,
    height:       56,
    borderRadius: "50%",
    background:   "#001F8B",
    color:        "#FFFFFF",
    fontSize:     34,
    fontWeight:   300,
    lineHeight:   1,
    border:       "none",
    cursor:       "pointer",
    boxShadow:    "0 4px 20px rgba(0,31,139,0.38)",
    display:      "flex",
    alignItems:   "center",
    justifyContent: "center",
    zIndex:       10,
    transition:   "transform 0.15s, box-shadow 0.15s",
  },
};


export function Sidebar({ groups, activeGroup, onSelect, onNewGroup }) {
  return (
    <aside className="desktop-sidebar" style={styles.sidebar}>

      
      <div style={styles.header}>
        <span style={styles.title}>Pocket Notes</span>
      </div>

      <ul className="sidebar-scroll" style={styles.groupList}>
        {groups.map(group => (
          <li
            key={group.id}
            onClick={() => onSelect(group)}
            style={{
              ...styles.groupItem,
              background: activeGroup?.id === group.id ? "#E8E8E8" : "transparent",
            }}
          >
            <Avatar name={group.name} color={group.color} size={60} fontSize={18} />
            <span style={styles.groupName}>{group.name}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onNewGroup}
        style={styles.fab}
        title="Create new group"
        aria-label="Create new group"
      >
        +
      </button>

    </aside>
  );
}