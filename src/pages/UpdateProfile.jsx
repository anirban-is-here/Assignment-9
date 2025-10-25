import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { useRef } from "react";

const UpdateProfile = () => {
  const { updateUserProfile } = useAuth();
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photoURL = event.target.photoUrl.value;

    if (!name || !photoURL) {
      toast.error("Please fill all fields");
      return;
    }

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        formRef.current.reset(); // reset fields after successful update
      })
      .catch((err) => {
        toast.error("Failed to update profile");
        console.error(err);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-base-200 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 my-20">
      <Toaster />
      <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            name="name"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
            name="photoUrl"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full hover:scale-105 transition-transform duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
