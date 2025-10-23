import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed z-50 container mx-auto bg-base-200 px-6 shadow-md flex">
      <div className="border-2">
        <a className="text-2xl font-bold text-primary">
          Skill<span className="text-secondary">Swap</span>
        </a>
      </div>

      {/* mid part */}
      <div className="flex-none border-2">
        <ul className="menu menu-horizontal px-1">
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
    </nav>
  );
};

export default Navbar;
