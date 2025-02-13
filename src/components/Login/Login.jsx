// import React, { useContext, useState } from "react";
// import { authContext } from "../AuthProvider/AuthProvider";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

// const Login = () => {
//   const { handleGoogleLogin, handleLogin } = useContext(authContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (!email) {
//       toast.error("Please enter your email address!");
//       return;
//     }
//     if (!password) {
//       toast.error("Please enter your password!");
//       return;
//     }
//     if (password.length < 6) {
//       toast.error("Password must be at least 6 characters long!");
//       return;
//     }

//     handleLogin(email, password)
//       .then(() => {
//         toast.success("Login Successful! Redirecting...");
//         navigate(location.state?.from || "/");
//       })
//       .catch((err) => {
//         let errorMessage = "Something went wrong! Please try again.";
//         if (err.code === "auth/invalid-credential") {
//           errorMessage =
//             "Invalid email or password! Please check and try again.";
//         } else if (err.code === "auth/user-not-found") {
//           errorMessage = "No account found with this email!";
//         } else if (err.code === "auth/wrong-password") {
//           errorMessage = "Incorrect password! Try again.";
//         } else if (err.code === "auth/too-many-requests") {
//           errorMessage = "Too many failed attempts. Please try again later.";
//         }

//         setError(errorMessage);
//         toast.error(errorMessage);
//       });
//   };

//   const googleLoginHandler = () => {
//     handleGoogleLogin()
//       .then(() => {
//         toast.success("Google Login Successful! Redirecting...");
//         navigate(location.state?.from || "/");
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="bg-gradient-to-r from-[#124E66] to-[#1E88A8] p-8 rounded-2xl shadow-lg w-96">
//         <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-600">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66]"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66]"
//               required
//             />
//           </div>
//           <button type="submit" className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white w-full rounded-full hover:opacity-90 transition">
//             Login
//           </button>
//         </form>

//         <button
//           onClick={googleLoginHandler}
//           className="btn btn-outline w-full mt-6 text-[#124E66] border-[#124E66] rounded-full hover:bg-[#124E66] hover:text-white transition"
//         >
//           Google Login
//         </button>

//         <p className="mt-6 text-center text-white">
//           Don't have an account?{" "}
//           <NavLink to="/register" className="text-white hover:underline">
//             Register here
//           </NavLink>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="bg-gradient-to-r from-[#124E66] to-[#1E88A8] p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white"
              required
            />
          </div>
          <div>
            <label className="block text-white">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white w-full rounded-full hover:opacity-90 transition">
            Login
          </button>
        </form>

        <button
          onClick={googleLoginHandler}
          className="btn btn-outline w-full mt-6 text-[#124E66] border-[#124E66] rounded-full hover:bg-[#124E66] hover:text-white transition"
        >
          Google Login
        </button>

        <p className="mt-6 text-center text-white">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-white hover:underline">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

