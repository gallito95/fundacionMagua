import ReactQuill from "react-quill";
import './blogEditor.css'

export default function Editor({value,onChange}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3,false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  return (
    <div className="content">
    <ReactQuill className="reactQuill"
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules} />
    </div>
  );
}