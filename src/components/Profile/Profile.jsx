import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const MyProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation Check
    if (!name.trim()) {
      toast.error("Name cannot be empty!");
      setLoading(false);
      return;
    }
    if (!photoURL.trim()) {
      toast.error("Profile image URL is required!");
      setLoading(false);
      return;
    }
    if (!/^https?:\/\/.+\..+/.test(photoURL)) {
      toast.error("Please enter a valid image URL!");
      setLoading(false);
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile successfully updated!");
      setName("");
      setPhotoURL("");
    } catch (error) {
      toast.error("Failed to update profile!");
    }

    setLoading(false);
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white rounded-lg shadow-md mt-10">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto border border-white"
        />
        <p className="text-lg font-semibold mt-2">{user?.displayName || "Your Name"}</p>
        <p className="text-gray-400">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdateProfile} className="mt-6">
        <label className="block text-gray-300">Change Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 bg-transparent text-white border border-gray-400 rounded mt-1"
          placeholder="Enter new name"
        />

        <label className="block text-gray-300 mt-4">Profile Image (URL):</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full p-2 bg-transparent text-white border border-gray-400 rounded mt-1"
          placeholder="Enter profile image URL"
        />

        <button
          type="submit"
          className="w-full  bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 mt-4 rounded transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
