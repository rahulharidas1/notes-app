import "./styles.css";

import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";
import uuid from "react-uuid";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddCallback = () => {
    var noteContent = {
      id: uuid(),
      title: "Untitled",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a dolor nibh. Aliquam eu ex enim. Cras egestas eros non auctor bibendum. Etiam feugiat ligula vel ullamcorper porttitor. Praesent at accumsan erat. Donec in pulvinar velit. Sed vitae urna ac velit fringilla dapibus. Praesent justo leo, dapibus a nunc sed, suscipit mollis libero. Nullam id fringilla magna.",
      lastModified: Date.now()
    };
    console.log("Hey!");
    setNotes([noteContent, ...notes]);
  };
  const onDeleteCallback = (id) => {
    setNotes(notes.filter((note) => id !== note.id));
  };
  return (
    <div className="App">
      <Sidebar
        onAddCallback={onAddCallback}
        notes={notes}
        onDeleteCallback={onDeleteCallback}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}
