import Header from './components/Header/Header';
import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';
import {useState} from "react"
function App() {
  const DUMMY_NOTES = [
    {
      title: 'Buy shorts',
      description: 'Buy shorts from smart bazaar tomorrow after lunch',
    },
    {
      title: 'Buy groceries',
      description: 'Itenary includes dried chilli flakes, oats and milk',
    },
    {
      title: 'Study react',
      description: 'Complete the react test on the sharpener platform',
    },
  ];
  const [notes, setNotes] = useState(DUMMY_NOTES)
  const addNoteDataHandler = (data) => {
    setNotes((prevState) => {
        return [...prevState, data];
    })
  }
  return (
    <>
      <Header />
      <NewNote onAddNoteData={addNoteDataHandler}/>
      <Notes notes={notes} />
    </>
  );
}

export default App;
