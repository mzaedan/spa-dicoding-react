import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNotePage({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert('Judul dan isi catatan tidak boleh kosong!');
      return;
    }

    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    onAddNote(newNote);
    navigate('/'); // Redirect to active notes page
  };

  return (
    <section className="add-note-page">
      <h2>Tambah Catatan Baru</h2>
      <form onSubmit={handleSubmit} className="add-note-form">
        <div className="form-group">
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Judul catatan..."
            maxLength="50" // Optional: add a max length for title
          />
          <small className="char-limit">Sisa karakter: {50 - title.length}</small>
        </div>
        <div className="form-group">
          <label htmlFor="body">Isi Catatan</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Tulis catatanmu di sini..."
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="add-note-button">Tambah Catatan</button>
      </form>
    </section>
  );
}

export default AddNotePage;
