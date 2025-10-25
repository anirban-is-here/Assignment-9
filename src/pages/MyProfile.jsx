import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-start py-10">
      <div className="bg-base-100 rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* User Image */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt={user?.displayName || "User Avatar"}
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
          />
        </div>

        {/* User Info */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-base-content">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-base-content/70 mt-1">{user?.email}</p>
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-center">
          <Link to='/updateProfile'>
          <button className="btn btn-primary w-full hover:scale-105 transition-transform duration-300">
            Update Profile
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
