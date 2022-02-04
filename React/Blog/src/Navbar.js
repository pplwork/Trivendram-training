import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>My-Blog</h1>
            <div className="links">
            <Link to= "/">Home</Link>
            <Link to="/Add">NewBlog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;