import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function NoteDetailPage({ notes, onDelete, onToggleArchive }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === id || note.id === parseInt(id)); // Handle string or number ID

  if (!note) {
    return (
      <section className="note-detail-page">
        <h2>Catatan Tidak Ditemukan</h2>
        <p>Catatan yang Anda cari tidak ada atau telah dihapus.</p>
        <Link to="/">Kembali ke Daftar Catatan</Link>
      </section>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
      onDelete(note.id);
      navigate("/");
    }
  };

  const handleToggleArchive = () => {
    onToggleArchive(note.id);
    navigate("/");
  };

  return (
    <section className="note-detail-page">
      <h2 className="note-detail__title">{note.title}</h2>
      <p className="note-detail__createdAt">
        {new Date(note.createdAt).toLocaleDateString()}
      </p>
      <p className="note-detail__body">{note.body}</p>
      <div className="note-detail__actions">
        <button
          onClick={handleDelete}
          className="note-detail__button note-detail__button--delete"
        >
          Hapus
        </button>
        <button
          onClick={handleToggleArchive}
          className="note-detail__button note-detail__button--archive"
        >
          {note.archived ? "Batal Arsip" : "Arsip"}
        </button>
      </div>
    </section>
  );
}

export default NoteDetailPage;
