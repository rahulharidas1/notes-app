import "./styles.css";

import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";
import uuid from "react-uuid";

export default function App() {
  const [notes, setNotes] = useState([]);
  const onAddCallBack = () => {
    var noteContent = {
      id: uuid(),
      title: "Untitled",
      body: "Random Text!",
      lastModified: Date.now()
    };
    setNotes([noteContent, ...notes]);
  };
  return (
    <div className="App">
      <Sidebar onAddCallBack={onAddCallBack} notes={notes} />
      <Main />
    </div>
  );
}
