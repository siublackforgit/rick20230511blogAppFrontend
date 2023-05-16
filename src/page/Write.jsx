import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div className="add">

      <div className="content">
        <div className="editorContainer">
          <input type="text" placeholder="title" />
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Public
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label htmlFor="file">Uploade Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Catergory</h1>
          <div className="cat">
            <input type="radio" name="art" value="art" id="art" />
            <label htmlFor="art">ART</label>
          </div>
          <div className="cat">
            <input type="radio" name="Science value=" Science id="Science" />
            <label htmlFor="Science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="technology" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cinema" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="design" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="food" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Write
