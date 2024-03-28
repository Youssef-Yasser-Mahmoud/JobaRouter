import { Link } from "react-router-dom";

const Notfound = () => {
    return ( <div>
        <h1>This Page is not found</h1>
        <p> Go to <Link to="/">Home.</Link> </p>
    </div> );
}
 
export default Notfound;