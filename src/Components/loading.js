import "../css/loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <i className="loading-completedIcon fa-regular fa-square-check"></i>
      <p className="loading-text">Loading Tasks...</p>
      <i className="loading-deleteIcon fa-regular fa-trash"></i>
    </div>
  );
}

export { Loading };
