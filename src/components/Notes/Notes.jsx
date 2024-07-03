import './Notes.css';
import NoteItem from './NoteItem';
import NoteFilter from './NoteFilter';
import {useState} from "react"

const Notes = (props) => {
    const [filteredTitle, setFilteredTitle] = useState("");
    const changeFilterHandler = (data) => {
        setFilteredTitle(data)
    }
    const filteredNotes = props.notes.filter((note)=> {
        const mul = note.title.toLowerCase();
        const val = filteredTitle.toLowerCase();
        if(mul.indexOf(val) != -1){
            return true;
        }
        return false;
    })
  return<>
  <NoteFilter selected={filteredTitle} onChangeFilter={changeFilterHandler}/>
  {filteredNotes.map((note) => {
    return (
        
      <div className="notes">
        <NoteItem title={note.title} description={note.description} />
      </div>
    );
  })};
  </>
   
};

export default Notes;
