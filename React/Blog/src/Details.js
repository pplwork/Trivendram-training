import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const Details = () => {
  const {id} = useParams();
  const {data:blog,error,isPending}  = useFetch(' http://localhost:8000/blogs/'+id);
  const navigate = useNavigate();
  const handleClick = ()=>{
    fetch('http://localhost:8000/blogs/' + blog.id,{
      method:'DELETE'
    }).then(()=>{
       navigate('/')
    })
  }
    return (
        <div className="blogdetails">
          {isPending && <div>...loading</div>}
          {error && <div>{error}</div>}
          {blog &&
           (
            <article>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <div>
              {blog.body}
              </div>
              <button onClick={handleClick}>Delete</button>
            </article>
           ) 
          }
        blogDetails - {id};
        </div>
      );
}
 
export default Details;