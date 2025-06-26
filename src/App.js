import React, { useState, useEffect } from 'react'; // Added useEffect for potential future use like localStorage
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getInitialData } from './utils/initialData';
import ActiveNotesPage from './pages/ActiveNotesPage';
import NoteDetailPage from './pages/NoteDetailPage';
import AddNotePage from './pages/AddNotePage';
import ArchivedNotesPage from './pages/ArchivedNotesPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const [notes, setNotes] = useState(getInitialData());

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleToggleArchiveStatus = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Aplikasi Catatan</h1>
          <nav>
            <ul>
              <li><Link to="/">Catatan Aktif</Link></li>
              <li><Link to="/add">Tambah Catatan</Link></li>
              <li><Link to="/archived">Arsip</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<ActiveNotesPage notes={notes.filter(note => !note.archived)} />}
            />
            <Route
              path="/notes/:id"
              element={
                <NoteDetailPage
                  notes={notes}
                  onDelete={handleDeleteNote}
                  onToggleArchive={handleToggleArchiveStatus}
                />
              }
            />
            <Route
              path="/add"
              element={<AddNotePage onAddNote={handleAddNote} />}
            />
            <Route
              path="/archived"
              element={
                <ArchivedNotesPage
                  notes={notes.filter(note => note.archived)}
                  onToggleArchive={handleToggleArchiveStatus}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
