import { Link } from "react-router";

function Nav()
{
    return(
        <>
            <Link to="/">Login</Link>
            <Link to="/Signup">Signup</Link>
            <Link to="/home">home</Link>
        </>
    )
}

export default Nav