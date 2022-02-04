import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>Page Not find</p>
            <Link to = "/">Back To Homepage...</Link>
        </div>
     );
}
 
export default NotFound;