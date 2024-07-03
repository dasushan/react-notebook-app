import './Notes.css';
import NoteItem from './NoteItem';
import NoteFilter from './NoteFilter';
import { useState } from 'react';

const Notes = (props) => {
  const [filteredTitle, setFilteredTitle] = useState('');
  const changeFilterHandler = (data) => {
    setFilteredTitle(data);
  };
  const filteredNotes = props.notes.filter((note) => {
    const mul = note.title.toLowerCase();
    const val = filteredTitle.toLowerCase();
    if (mul.indexOf(val) != -1) {
      return true;
    }
    return false;
  });

  const noteDeleteHandler = (data) => {
    props.onRemoveNoteData(data);
  };

  return (
    <>
    {"Showing :" + filteredNotes.length}
      <NoteFilter
        selected={filteredTitle}
        onChangeFilter={changeFilterHandler}
      />
      {filteredNotes.map((note) => {
        return (
          <div className="notes" key={note.id}>
            <NoteItem
              id={note.id}
              title={note.title}
              description={note.description}
              onNoteDelete={noteDeleteHandler}
            />
          </div>
        );
      })}
      ;
    </>
  );
};

export default Notes;
