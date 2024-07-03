const NoteFilter = (props) =>{
    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    
    return<div className="notes">
        <input type="text" value={props.selected} onChange={filterChangeHandler}></input>
    </div>
}

export default NoteFilter;