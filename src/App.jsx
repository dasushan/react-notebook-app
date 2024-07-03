import Header from './components/Header/Header';
import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';
import {useState} from "react"
import { v4 as uuidv4} from 'uuid'
function App() {
  const DUMMY_NOTES = [
    {
      title: 'Buy shorts',
      description: 'Buy shorts from smart bazaar tomorrow after lunch',
      id:uuidv4(),
    },
    {
      title: 'Buy groceries',
      description: 'Itenary includes dried chilli flakes, oats and milk',
      id:uuidv4(),
    },
    {
      title: 'Study react',
      description: 'Complete the react test on the sharpener platform',
      id:uuidv4(),
    },
  ];
  const [notes, setNotes] = useState(DUMMY_NOTES)
  const addNoteDataHandler = (data) => {
    setNotes((prevState) => {
        return [...prevState, data];
    })
  }
  const removeNoteDataHandler = (id) => {
    setNotes(notes.filter((note)=>{
      return note.id != id
    }))
  }
  return (
    <>
      <Header />
      {"Total notes :" + notes.length}
      <NewNote onAddNoteData={addNoteDataHandler}/>
      <Notes notes={notes} onRemoveNoteData={removeNoteDataHandler}/>
    </>
  );
}

export default App;
