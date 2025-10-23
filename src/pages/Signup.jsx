import React from "react";
import { Link } from "react-router";
import { UserPlus } from "lucide-react";

const Signup = () => {
  return (
    <div className=" flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 shadow-lg rounded-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-base-content">
            Create Account
          </h2>
          <p className="text-base-content/70 mt-2 text-sm">
            Join our community and start your journey today.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-medium text-base-content">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium text-base-content">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium text-base-content">
                Photo Url
              </span>
            </label>
            <input
              type="url"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium text-base-content">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </button>
          {/* Google */}
          <button className="w-full btn bg-secondary text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-base-content/70 mt-5">
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
