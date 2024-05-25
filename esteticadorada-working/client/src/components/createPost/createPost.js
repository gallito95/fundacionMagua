import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../blogEditor/blogEditor.js"

const CreatePost = () =>  {

  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

ev.preventDefault();
    const response = await fetch('http://localhost:4000/projects/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  

 if(redirect) {
  return <Navigate to={'/blog'} />
}
  return(
    <div>
     <form onSubmit={createNewPost}>
        <input type="title" 
        placeholder={'Title'} 
        value={title} 
        onChange={e => setTitle(e.target.value)}/>
        <input type="summary" 
        placeholder={'Summary'}
        value={summary}
        onChange={e => setSummary(e.target.value)}/>
        <input type="file" 
        onChange={e => setFiles(e.target.files)} />
        <Editor className = "reactQuill" value={content} onChange={setContent} />
        <button> Create Post </button>
     </form>
    </div>
  )
}

export default CreatePost