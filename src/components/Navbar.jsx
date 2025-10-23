import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 container mx-auto bg-base-200 py-2 px-6 shadow-md flex justify-between items-center">
      <div className="">
        <a className="text-2xl font-bold text-primary">
          Skill<span className="text-secondary">Swap</span>
        </a>
      </div>

      {/* mid part */}
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <NavLink to="/home">
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <li>
            <a>My Profile</a>
          </li>



          
        </ul>

        
      </div>

      {/* right part */}

      <div>
            <NavLink to="/login">
            <button className="btn btn-primary">Login</button>
          </NavLink>
        </div>
    </nav>
  );
};

export default Navbar;
