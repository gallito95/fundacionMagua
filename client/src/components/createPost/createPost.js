import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import './createPost.scss'
import axios from 'axios'

const CreatePost = () =>  {
  const [value, setValue] = useState( "");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState( "");
  
  const navigate = useNavigate()

  const upload = async () => {
      if(!file) return ""
      try {
        const formData = new FormData()
        formData.append("file", file)
        const res = await axios.post("https://ecomagua.org/api/upload", formData);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const imgUrl = await upload();
      try {
       await axios.post(`https://ecomagua.org/api/posts/`, {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
            });
            navigate("/projects" )
      } catch (err) {
        console.log(err);
      }
     };

     const modules = {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
      ],
      clipboard: {
        matchVisual: false, // Verhindert zusätzliche Zeilenumbrüche
      },
    };
  
    return (
      <div className="add">
        <div className="createPostContent">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules} // Modules hier einbinden
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <div className="image-upload-container">
  {/* Vorschau des neuen Bildes */}
  {file && (
    <img
      src={URL.createObjectURL(file)}
      alt="New"
      className="small-image-preview"
    />
  )}

  <input
    style={{ display: "none" }}
    type="file"
    id="file"
    name=""
    onChange={(e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile); // Neues Bild setzen
    }}
  />
      <label className="file" htmlFor="file">
        Upload Image
      </label>
    </div>

            <div className="buttons">
              {/* <button>Save as a draft</button> */}
              <button onClick={handleSubmit}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "education"}
                name="cat"
                value="education"
                id="education"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="education">Education</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "mangrove"}
                name="cat"
                value="mangrove"
                id="mangrove"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="mangrove">Mangrove</label>
            </div>
            <div className="cat">
            <input
              type="radio"
              checked={cat === "scuba"}
              name="cat"
              value="scuba"
              id="scuba"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="scuba">Scuba Diving</label>
            </div>
            <div className="cat">
            <input
              type="radio"
              checked={cat === "unicorn"}
              name="cat"
              value="unicorn"
              id="unicorn"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="unicorn">Project Unicorn</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                checked={cat === "corals"}
                name="cat"
                value="corals"
                id="corals"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="corals">Corals</label>
            </div>
            <div className="cat">
            <input
              type="radio"
              checked={cat === "other"}
              name="cat"
              value="other"
              id="other"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreatePost