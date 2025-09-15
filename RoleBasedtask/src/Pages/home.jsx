import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* <h1>Welcome</h1> */}
      <h2>Choose admin or user</h2>
      <Link to="/login/admin"><button>Admin</button></Link>
      <Link to="/login/user"><button>User</button></Link>

     
    </div>
  );
};
export default Home;
