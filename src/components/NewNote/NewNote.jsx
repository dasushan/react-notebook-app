import './NewNote.css';
import {v4 as uuidv4} from 'uuid'
import NoteForm from './NoteForm';
const NewNote = (props) => {
  const saveNoteDataHandler = (data) => {
    const newData = {...data, id: uuidv4()}
    props.onAddNoteData(newData);
  };
  return (
    <div className="new-note">
      <NoteForm onSaveNoteData={saveNoteDataHandler} />
    </div>
  );
};
export default NewNote;
