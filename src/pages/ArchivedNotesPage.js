import React from 'react';
import NoteList from '../components/NoteList';

function ArchivedNotesPage({ notes, onToggleArchive }) {
  return (
    <section className="archived-notes-page">
      <h2>Catatan Arsip</h2>
      <NoteList
        notes={notes}
        onToggleArchive={onToggleArchive}
        pageType="archived"
      />
    </section>
  );
}

export default ArchivedNotesPage;
