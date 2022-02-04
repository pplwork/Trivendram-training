import { useState } from "react";
////in react router dom useHistory is replaced with use Navigate
import { useNavigate } from 'react-router-dom'

const Add = () => {

  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('person1');
  const[isPending,setIsPending] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e)=>{
     e.preventDefault();
     const blog = {title,body,author};

     ////Post request
     setIsPending(true);
     fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(blog)
     }).then(()=>{
       console.log("added")
       setIsPending(false)
       //To got back -1, to go forward 1
       navigate('/');
     })

    
  }
    return (
        <div className="ADD">
        <div className="container">
        <form onSubmit={handleSubmit} >
            <div className="top-box">
                <label className="label">Title</label>
                <input type = "text" value = {title} onChange = {(e)=>setTitle(e.target.value)}className="input" required/>
            </div>
            <div className="top-box">
                <label  className="label">Content</label>
                <textarea  value = {body} onChange = {(e)=>setBody(e.target.value)} className = "input">
                </textarea>
            </div>
            <div className="author">
              <select value = {author} onChange={(e) =>setAuthor(e.target.author)}>
                <option>person1</option>
                <option>person2</option>
              </select>
            </div>
            {!isPending && <button type="submit" className="button">Submit</button>}
            {isPending && <button disabled>Adding blog...</button>}
            
        </form>

    </div>
        </div>
      );
}
 
export default Add;