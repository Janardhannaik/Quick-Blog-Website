import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

function Navbar() {
  const user = false;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-xl font-extrabold">
        <Link to="/">CodSoft Blog</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p>
          <ImSearch />
        </p>
        <input
          className="rounded-2xl px-6"
          placeholder="Seach a post"
          type="text"
        />
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3>
            <Link to="/create">Create</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">login</Link>
          </h3>
        )}
        {user ? (
          <h3>Profile</h3>
        ) : (
          <h3 className="text-[#000000] hover:text-[#6d61db]">
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Navbar;
