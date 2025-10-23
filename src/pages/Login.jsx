import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center my-20 ">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <div className="card-body bg-base-200">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-primary mb-4">
            Welcome Back
          </h2>

          {/* Email */}
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered focus:input-primary w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered focus:input-primary w-full"
            />
            <label className="label">
              <Link
                to="/forgot-password"
                className="label-text-alt link link-hover text-secondary"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          {/* Login Button */}
          <div className="form-control mt-2">
            <button className="btn btn-primary w-full rounded-full shadow-md hover:shadow-lg transition">
              Log In
            </button>
          </div>

          {/* Divider */}
          <div className="divider text-sm text-base-content/60">or</div>

         

          {/* Signup Link */}
          <p className="text-center text-sm  text-base-content/80">
            Don’t have an account?{" "}
            <Link to="/signup" className="link text-secondary font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
