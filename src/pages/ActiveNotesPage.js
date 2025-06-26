import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

function ActiveNotesPage({ notes }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialKeyword = searchParams.get('keyword') || '';
  const [keyword, setKeyword] = useState(initialKeyword);

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="active-notes-page">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} pageType="active" />
    </section>
  );
}

export default ActiveNotesPage;
