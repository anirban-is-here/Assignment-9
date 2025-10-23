import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  if (!user) return <p className="text-center mt-10">Please log in to view your profile.</p>;

  return (
    <div className="text-center mt-10">
      <img
        src={user.photoURL || "https://i.ibb.co/0Jmshvb/user.png"}
        alt="avatar"
        className="w-24 h-24 mx-auto rounded-full mb-3"
      />
      <h2 className="text-2xl font-semibold">{user.displayName || "User"}</h2>
      <p>{user.email}</p>
    </div>
  );
};
export default Profile;
