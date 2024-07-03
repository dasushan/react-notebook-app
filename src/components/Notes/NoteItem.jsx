const NoteItem = (props) => {
    const clickHandler= () => {
        props.onNoteDelete(props.id)
    }
    return(<div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        
        <button onClick={clickHandler}>Delete</button>
        
    </div>)
}

export default NoteItem;
