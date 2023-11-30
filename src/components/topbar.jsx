import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <label tabIndex={0} className="btn btn-neutral btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1701318643~exp=1701319243~hmac=5aa3bd8943dd0a0ad005f4873da29be402d28fd62d9b872760311872572efce9" alt="avatar" />
          </div>
        </label>
        <Link to="/" className="btn btn-neutral normal-case text-xl flex items-center">
          Library dashboard
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-xl  px-1">
          <li className="btn btn-outline">
            <Link to="/books" className=" m-1 p-1 text-center">
              Books
            </Link>
          </li>
          <li className="btn btn-outline">
            <Link to="/booksadd" className=" m-1 p-1 text-center">
              Add Book
            </Link>
          </li>
          <li className="btn btn-outline">
            <Link to="/author" className=" m-1 p-1 text-center">
              Author
            </Link>
          </li>
          <li className="btn btn-outline">
            <Link to="/authoradd" className=" m-1 p-1 text-center">
              Add Author
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}