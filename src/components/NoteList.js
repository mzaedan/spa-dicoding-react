import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onToggleArchive, pageType }) {
  if (!notes || notes.length === 0) {
    return (
      <p className="notes-list__empty-message">
        {pageType === "archived" ? "Arsip kosong" : "Tidak ada catatan"}
      </p>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onToggleArchive={onToggleArchive}
          showArchiveAction={pageType === "archived"}
        />
      ))}
    </div>
  );
}

export default NoteList;
