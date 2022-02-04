import { Link } from "react-router-dom";

const BlogList = (props) => {  ///// can be destructred also like({blogs,title})
    const title = props.title;
    const blogs = props.blogs;

    return ( 
        <div className = "BlogList">
         <h1>{title}</h1>
         {blogs.map((blog)=>(
       <div className = "blog - preview" key = {blog.id}>
           <Link to = {`/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
           </Link>
           
        </div>
    ))    
    }
        </div>
     );
}
 
export default BlogList;