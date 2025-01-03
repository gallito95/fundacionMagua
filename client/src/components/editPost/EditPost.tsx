import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../../components/createPost/CreatePost.scss'
import axios from 'axios'
import "./EditPost.scss"


type EditPostStates ={
  id: number;
  title: string | undefined;
  desc: string | undefined;
  file: File | null ;
  cat: string |undefined;
  img : string | null;
  state: string
}

const EditPost = () => {
     
  const state = useLocation().state as EditPostStates | undefined;
  const [title, setTitle] = useState<string | undefined>(state?.title || "");
  const [value, setValue] = useState<string | undefined>(state?.desc || "");
  const [file, setFile] = useState<File |null>(null);
  const [cat, setCat] = useState<string |undefined>(state?.cat || "");
  const [existingImg, setExistingImg] = useState<string | null>(state?.img || "");
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
      console.log("picture upload not working")
    }
  };

  const handleSubmit = async (e:React.FormEvent): Promise<void>  => {
    e.preventDefault();
    const imgUrl = file ? await upload() : existingImg; // Nutze vorhandenes Bild, falls kein neues hochgeladen wird
  
    try {
      if (state) {
        await axios.put(`https://ecomagua.org/api/posts/${state.id}`, {
          title,
          desc: value,
          cat,
          img: imgUrl, // Sende neues oder vorhandenes Bild
        });
      } 
      navigate("/projects");
    } catch (err) {
      console.log(err);
      console.log("submit not working");
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
      <div className="editorContent">
        <h3> Title:</h3>
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
    {existingImg && !file && (
    <img
      src={`http://ecomagua.org:8800/api/uploads/${existingImg}`}
      alt="Current"
      className="small-image-preview"
    />
  )}

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
      const files = e.target.files
      if (files && files[0]){
      const selectedFile = files[0];
      setFile(selectedFile); // Neues Bild setzen
      setExistingImg(null); // Altes Bild entfernen
    }
    }}
  />
      <label className="file" htmlFor="file">
        Upload Image
      </label>
    </div>
    <div className="buttons">
      <button onClick={handleSubmit}>Publish</button>
    </div>
  </div>

        <div className="editCategoryContainer">
          <h3>Category</h3>
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

export default EditPost