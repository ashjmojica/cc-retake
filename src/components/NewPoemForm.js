import React, { useState } from "react";


const NewPoemForm = ({ setPoems }) => {

  const [title, setTitle] = useState("")
  const [id, setId] = useState("")
  const [content, setContent] = useState(0)




  const [myPoems, setMyPoems] = useState({
    id: '',
    title: '',
    content: ''
  })


  const handleChange = (event) => {
    setMyPoems({
      ...myPoems,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8004/poems', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'
    },
    body: JSON.stringify(myPoems)
  })
  .then(response => response.json())
  .then(data => setPoems(list => [...list,data]))
}


  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} />
      <input type="submit" onChange={handleChange} value="" />
    </form>
  )
}

export default NewPoemForm;
