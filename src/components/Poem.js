import React from "react";


const Poem = ({ title, content, author }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>{author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
