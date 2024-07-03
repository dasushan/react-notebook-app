import "./NoteForm.css"
import {useState} from "react";
const NoteForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const noteData= {
            title : enteredTitle,
            description : enteredDescription,
        }
        
        props.onSaveNoteData(noteData);
        setEnteredTitle("");
        setEnteredDescription("");
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="note-controls">
                <div className="note-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="note-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" value={enteredDescription} onChange={descriptionChangeHandler}></input>
                </div>
            </div>
            <div className="note-actions">
                <button type="submit">Add Note</button>
            </div>
        </form>
    )
}
export default NoteForm;