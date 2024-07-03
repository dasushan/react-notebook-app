import './NewNote.css';
import NoteForm from './NoteForm';
const NewNote = (props) => {
  const saveNoteDataHandler = (data) => {
    props.onAddNoteData(data);
  };
  return (
    <div className="new-note">
      <NoteForm onSaveNoteData={saveNoteDataHandler} />
    </div>
  );
};
export default NewNote;
