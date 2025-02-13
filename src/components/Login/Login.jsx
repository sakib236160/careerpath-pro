import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }
    if (!password) {
      toast.error("Please enter your password!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    handleLogin(email, password)
      .then(() => {
        toast.success("Login Successful! Redirecting...");
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        let errorMessage = "Something went wrong! Please try again.";
        if (err.code === "auth/invalid-credential") {
          errorMessage =
            "Invalid email or password! Please check and try again.";
        } else if (err.code === "auth/user-not-found") {
          errorMessage = "No account found with this email!";
        } else if (err.code === "auth/wrong-password") {
          errorMessage = "Incorrect password! Try again.";
        } else if (err.code === "auth/too-many-requests") {
          errorMessage = "Too many failed attempts. Please try again later.";
        }

        setError(errorMessage);
        toast.error(errorMessage);
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success("Google Login Successful! Redirecting...");
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />

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
