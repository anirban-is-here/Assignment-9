import { Link, NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
    console.log(user)
  const handleLogOut = () => {
    logoutUser();
  };
  return (
    <nav className="fixed top-0 z-50 container mx-auto bg-base-200 py-1 px-6 shadow-md flex justify-between items-center">
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
          <NavLink to={user?'/profile':'/login'}>
          <li>
            <a>My Profile</a>
          </li>
          </NavLink>
        </ul>
      </div>

      {/* right part */}

      {user ? (
        <div className="flex gap-5 items-center">
            <div className="tooltip tooltip-bottom " data-tip={user?.displayName || "User"}>
                <img
              src={user.photoURL || "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar.png"}
              alt={user.displayName || "User Avatar"}
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-primary"
            />
            </div>
            <button onClick={handleLogOut} className="btn btn-neutral btn-outline">LogOut</button>
        </div>
      ) : (
        <div className="flex gap-3">
          <NavLink to="/login">
            <button className="btn btn-primary">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
