import { useState, useEffect } from "react";
import { STORAGE_KEY_GROUPS, STORAGE_KEY_NOTES } from "../utils/constants";
import { loadFromStorage, saveToStorage }         from "../utils/helpers";


export function useNotes() {
  const [groups,      setGroups]      = useState(() => loadFromStorage(STORAGE_KEY_GROUPS, []));
  const [notes,       setNotes]       = useState(() => loadFromStorage(STORAGE_KEY_NOTES,  {}));
  const [activeGroup, setActiveGroup] = useState(null);

  useEffect(() => saveToStorage(STORAGE_KEY_GROUPS, groups), [groups]);
  useEffect(() => saveToStorage(STORAGE_KEY_NOTES,  notes),  [notes]);

  
  function createGroup({ name, color }) {
    const newGroup = {
      id:        Date.now().toString(),
      name,
      color,
      createdAt: new Date().toISOString(),
    };
    setGroups(prev => [...prev, newGroup]);
    setActiveGroup(newGroup);
  }

  function addNote(text) {
    if (!activeGroup) return;
    const now     = new Date().toISOString();
    const newNote = {
      id:        Date.now().toString(),
      text,
      createdAt: now,
      updatedAt: now,
    };
    setNotes(prev => ({
      ...prev,
      [activeGroup.id]: [...(prev[activeGroup.id] || []), newNote],
    }));
  }

  const activeNotes = activeGroup ? (notes[activeGroup.id] || []) : [];

  const existingNames = groups.map(g => g.name.toLowerCase());

  return {
    groups,
    notes,
    activeGroup,
    activeNotes,
    existingNames,
    setActiveGroup,
    createGroup,
    addNote,
  };
}