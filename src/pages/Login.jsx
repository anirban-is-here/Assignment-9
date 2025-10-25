import React, {  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { loginUser, googleSignIn } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      form.reset();
      navigate("/");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate("/");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  from-base-200 via-base-300 to-base-100">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
        {/* Left Side — Image or Illustration */}
        <div className="hidden md:flex items-center justify-center  from-primary to-secondary">
          <img
            src="https://illustrations.popsy.co/blue/work-from-home.svg"
            alt="Login Illustration"
            className="w-3/4"
          />
        </div>

        {/* Right Side — Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
              <label className="label mt-1">
                <Link
                  to="/forgot-password"
                  className="label-text-alt link link-hover text-secondary"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            {error && (
              <p className="text-error text-sm text-center mt-2">{error}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 font-semibold tracking-wide rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-base-content/60">or</div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full rounded-full hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-base-content/80 mt-5">
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
