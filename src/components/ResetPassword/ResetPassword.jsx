import { useState } from "react";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { EyeIcon, EyeOffIcon } from "lucide-react";

const ResetPassword = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const oobCode = queryParams.get("oobCode");

  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePassword = (password) => {
    return (
      /[A-Z]/.test(password) && 
      /[a-z]/.test(password) && 
      password.length >= 6      
    );
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!oobCode || !newPassword) {
      toast.error("Invalid request or empty password!");
      setLoading(false);
      return;
    }

    if (!validatePassword(newPassword)) {
      toast.error("Password must contain at least 6 characters, an uppercase letter, and a lowercase letter.");
      setLoading(false);
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      toast.success("Password reset successfully!");
      
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-[#124E66] to-[#1E88A8] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">
          Reset Your Password
        </h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <label className="block text-white">Enter New Password:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input input-bordered w-full p-3 rounded-xl focus:ring-2 focus:ring-[#124E66] bg-transparent text-white border-white pr-10"
              required
            />
             <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
          </div>
          <button
            type="submit"
            className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white w-full rounded-full hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

