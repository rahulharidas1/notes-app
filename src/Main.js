import "./styles.css";

const Main = () => {
  return (
    <div className="main-app-area">
      <div className="note-edit-area">
        <input type="text" className="note-header-input" />
        <textarea className="note-content-input" />
      </div>
      <div className="markdown-area">
        This is where the markdown will be displayed!
      </div>
    </div>
  );
};

export default Main;
