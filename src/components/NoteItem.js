import React from 'react';
import { Link } from 'react-router-dom';

function NoteItem({ id, title, createdAt, body, archived, onToggleArchive, showArchiveAction }) {
  return (
    <article className="note-item">
      <h3><Link to={`/notes/${id}`}>{title}</Link></h3>
      <p className="note-item__createdAt">{new Date(createdAt).toLocaleDateString()}</p>
      <p className="note-item__body">{body.substring(0, 100) + (body.length > 100 ? '...' : '')}</p>
      {showArchiveAction && onToggleArchive && (
        <button
          onClick={() => onToggleArchive(id)}
          className="note-item__archive-button"
        >
          {archived ? 'Batal Arsip' : 'Arsip'}
        </button>
      )}
    </article>
  );
}

export default NoteItem;
