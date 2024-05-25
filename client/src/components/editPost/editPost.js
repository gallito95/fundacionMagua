import { useEffect, useState } from "react";
import Editor from "../blogEditor/blogEditor";
import { useParams } from "react-router";
import { Navigate } from "react-router";
import './editPost.css'
const EditPost = () => {
     
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect,setRedirect] = useState(false);
  

    useEffect(() => {
        fetch('http://localhost:4000/projects/post/'+id)
        .then(response => {
          response.json().then( postInfo => {
            setTitle(postInfo.title);
            setContent(postInfo.content);
            setSummary(postInfo.summary);

          })
        })
    }, [])
    
   
    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if(files?.[0]){
            data.set('file', files?.[0]);
        }
        
      const response = await fetch('http://localhost:4000/projects/post/' , {
        method: 'PUT',
        body: data,
        credentials: 'include',

      });
      if(response.ok){
         setRedirect(true);
      }

   
    }

    if(redirect) {
        return <Navigate to={'/projects/post/'+id} />
      }

 return(
    <div className="editPost">
     <form onSubmit={updatePost}>
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
        <button> Update Post </button>
     </form>
    </div>
  )
    
}

export default EditPost