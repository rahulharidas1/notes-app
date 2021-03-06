import "./styles.css";

const Sidebar = ({
  onAddCallback,
  notes,
  onDeleteCallback,
  activeNote,
  setActiveNote
}) => {
  return (
    <>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h1>Notes</h1>
          <button className="button-style" onClick={onAddCallback}>
            Add
          </button>
        </div>
        <div className="sidebar-notes">
          {notes.map((note, id) => {
            return (
              <div
                className={`sidebar-note ${note.id === activeNote && "active"}`}
                key={id}
                onClick={() => setActiveNote(note.id)}
              >
                <div className="sidebar-note-header">
                  <h4>{note.title}</h4>
                  <button
                    className="button-style"
                    onClick={() => onDeleteCallback(note.id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="note-content">
                  {note.body && note.body.substr(0, 100) + " ..."}
                </div>
                <div className="last-modified">
                  Last Modified:{" "}
                  {new Date(note.lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
