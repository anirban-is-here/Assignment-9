import React from "react";
import { Link, useNavigate } from "react-router";
import { UserPlus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const { createUser, googleSignIn, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => {
        toast.success("Account created successfully!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Signed in with Google!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/80 via-base-300/40 to-base-content/5">
      {/* Spotify-like background blur + shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary blur-[120px] opacity-20 rounded-full"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-secondary blur-[150px] opacity-25 rounded-full"></div>
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="backdrop-blur-xl bg-base-100/20 border border-white/10 p-10 rounded-2xl shadow-2xl w-full max-w-md transition-transform hover:scale-[1.02] duration-300">
        <Toaster />

        {/* Logo or Icon */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-primary/10 p-3 rounded-full mb-2">
            <UserPlus className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-base-content">
            Create Account
          </h2>
          <p className="text-base-content/60 mt-1 text-sm">
            Join the rhythm — start your journey today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="input input-bordered w-full bg-base-100/30 border-base-content/20 focus:border-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input input-bordered w-full bg-base-100/30 border-base-content/20 focus:border-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-base-100/30 border-base-content/20 focus:border-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="input input-bordered w-full bg-base-100/30 border-base-content/20 focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-base-content/20"></div>
          <span className="px-2 text-sm text-base-content/60">or</span>
          <div className="flex-1 h-px bg-base-content/20"></div>
        </div>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleSignin}
          className="btn w-full bg-base-100 text-base-content border-base-content/20 hover:bg-base-200 hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          <img
            alt="Google"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-base-content/60 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
