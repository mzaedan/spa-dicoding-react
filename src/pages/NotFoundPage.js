import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h1>404</h1>
      <p>Oops! Halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/" className="button-link">Kembali ke Beranda</Link>
    </section>
  );
}

export default NotFoundPage;
