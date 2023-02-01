import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";
function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = reverArray(props.notes);
  return (
    <div className="note-container ms-5">
      <h2>Project Guidelines/Instruction</h2>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h4>No Guidelines Added yet</h4>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
