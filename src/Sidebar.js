import "./styles.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h1>Notes</h1>
          <button className="button-style">Add</button>
        </div>
        <div className="sidebar-notes">
          <div className="sidebar-note">
            <div className="sidebar-note-header">
              <h4>Note header</h4>
              <button className="button-style">Delete</button>
            </div>
            <div className="note-content">this is a random note.</div>
            <div className="last-modified">Last Modified: date</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
