// import { useContext, useState } from "react";
// import { authContext } from "../AuthProvider/AuthProvider";

// const Register = () => {
//     const {handleRegister,manageProfile} = useContext(authContext)
//     const [error,setError] =useState("")
//     const handleSubmit =(e)=>{

//         e.preventDefault()
//         setError("")

//         const name =e.target.name.value
//         const image = e.target.image.value 
//         const email = e.target.email.value 
//         const password = e.target.password.value
//         const conPassword = e.target.conPassword.value
//         if(password.length <6){
//             setError("password must contain at least 6 char")
//             return;
//         }
//         if(password !== conPassword){
//             setError("password didn't match")
//             return;
//         }
//         if(!/[a-z]/.test(password)){
//             setError("password must contain at least one Lowercase Letter")
//             return;
//         }
//         if(!/[A-Z]/.test(password)){
//             setError("password must contain at least one Uppercase Letter")
//             return;
//         }
//         console.log(name,image,email,password,conPassword)
//         handleRegister(email,password)
//         .then(res=>{
//             manageProfile(name, image)
//         })
//     }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//             Name
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-primary w-full max-w-xs"
//             name="name"
//             required
//           />
//         </div>
//         <div>
//             Image
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-primary w-full max-w-xs"
//             name="image"
//             required
//           />
//         </div>
//         <div>
//           Email <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-primary w-full max-w-xs"
//             name="email"
//             required
//           />
//         </div>
//         <div>
//           Password <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-primary w-full max-w-xs"
//             name="password"
//             required
//           />
//         </div>
//         <div>
//           Confirm Password <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-primary w-full max-w-xs"
//             name="conPassword"
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {
//         error && <p className="text-red-500">{error}</p>
//       }
//     </div>
//   );
// };

// export default Register;




import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const { handleRegister, manageProfile, handleGoogleLogin } = useContext(authContext);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        if (password.length < 6) {
            setError("Password must contain at least 6 characters");
            return;
        }
        if (password !== conPassword) {
            setError("Passwords do not match");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return;
        }

        handleRegister(email, password)
            .then(() => {
                manageProfile(name, image);
            })
            .catch(err => setError(err.message));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" name="name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
                        <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" name="image" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" name="email" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" name="password" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" name="conPassword" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Sign Up</button>
                </form>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                <p className="text-center mt-4 text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500">Log In</Link>
                </p>
                <div className="mt-6">
                    <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600">Sign Up with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;