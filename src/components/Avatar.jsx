import { getInitials } from "../utils/helpers";


export function Avatar({ name, color, size = 60, fontSize = 18 }) {
  return (
    <span
      style={{
        width:          size,
        height:         size,
        minWidth:       size,
        borderRadius:   "50%",
        background:     color,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        color:          "#FFFFFF",
        fontWeight:     700,
        fontSize:       fontSize,
        letterSpacing:  "0.5px",
        userSelect:     "none",
        flexShrink:     0,
      }}
    >
      {getInitials(name)}
    </span>
  );
}