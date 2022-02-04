import BlogList from './BlogList'
import useFetch from './usefetch';

const Home = () => {
  
    const {data:blogs,isPending,isError} = useFetch('http://localhost:8000/blogs')

    return (<div className = "Home">
    {isError && <div>{isError}</div>  }
    {isPending && <div>Loading...</div>}
   {blogs && <BlogList blogs = {blogs.filter((blog)=> blog.author === 'mario' )} title="Mario's Blogs"/>}
    </div>  );
}
 
export default Home;