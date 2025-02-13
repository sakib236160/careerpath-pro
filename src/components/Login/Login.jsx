import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          onClick={googleLoginHandler}
          className="btn btn-outline w-full mt-4"
        >
          Google Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;



