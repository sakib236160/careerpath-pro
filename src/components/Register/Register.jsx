// import { useContext, useState } from "react";
// import { authContext } from "../AuthProvider/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { EyeIcon, EyeOffIcon } from "lucide-react";

// const Register = () => {
//   const { handleRegister, manageProfile, handleGoogleLogin } =
//     useContext(authContext);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     const name = e.target.name.value;
//     const image = e.target.image.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const conPassword = e.target.conPassword.value;

//     if (password.length < 6) {
//       toast.error("Password must contain at least 6 characters");
//       return;
//     }
//     if (password !== conPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
//     if (!/[a-z]/.test(password)) {
//       toast.error("Password must contain at least one lowercase letter");
//       return;
//     }
//     if (!/[A-Z]/.test(password)) {
//       toast.error("Password must contain at least one uppercase letter");
//       return;
//     }

//     handleRegister(email, password)
//       .then(() => {
//         manageProfile(name, image);
//         toast.success("Account created successfully!", {
//           autoClose: 3000,
//           onClose: () => {
//             navigate("/");
//           },
//         });
//       })
//       .catch((err) => {
//         setError(err.message);
//         toast.error(err.message);
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="bg-white p-10 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
//           Create an Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               name="name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Profile Picture URL
//             </label>
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               name="image"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               name="email"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 name="password"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//               >
//                 {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
//               </button>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 name="conPassword"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//               >
//                 {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
//               </button>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
//           >
//             Sign Up
//           </button>
//         </form>
//         {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//         <p className="text-center mt-4 text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-500">
//             Log In
//           </Link>
//         </p>
//         <div className="mt-6">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
//           >
//             Sign Up with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Register = () => {
  const { handleRegister, manageProfile, handleGoogleLogin } =
    useContext(authContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    if (password.length < 6) {
      toast.error("Password must contain at least 6 characters");
      return;
    }
    if (password !== conPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }

    handleRegister(email, password)
      .then(() => {
        manageProfile(name, image);
        toast.success("Account created successfully!", {
          autoClose: 3000,
          onClose: () => {
            navigate("/");
          },
        });
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-gradient-to-r from-[#124E66] to-[#1E88A8] p-8 rounded-2xl shadow-lg w-96 max-w-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Profile Picture URL
            </label>
            <input
              type="text"
              className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white"
              name="image"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white"
                name="password"
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
          <div>
            <label className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white"
                name="conPassword"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white w-full rounded-full hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <p className="text-center mt-4 text-white">
          Already have an account?{" "}
          <Link to="/login" className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white w-full rounded-full hover:opacity-90 transition">
            Log In
          </Link>
        </p>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full mt-6 text-[#124E66] border-[#124E66] rounded-full hover:bg-[#124E66] hover:text-white transition"
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
