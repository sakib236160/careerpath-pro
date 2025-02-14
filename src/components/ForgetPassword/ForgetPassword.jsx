import { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // URL থেকে email নিয়ে আসা
  const queryParams = new URLSearchParams(location.search);
  const initialEmail = queryParams.get("email") || "";

  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  // Reset Password Function
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      toast.error("Please enter a valid email!");
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent! Check your email.");
      setTimeout(() => {
        window.location.href = "https://mail.google.com"; // Redirect to Gmail
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Forgot Password
        </h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <label className="block text-gray-600">Enter your Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
