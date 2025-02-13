import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      setMessage("Profile successfully updated!");
    } catch (error) {
      setMessage("Failed to update!");
    }

    setLoading(false);
  };

  if (!user) {
    navigate("/login"); 
    return null;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      
      <div className="text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto border"
        />
        <p className="text-lg font-semibold mt-2">{user?.displayName}</p>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdateProfile} className="mt-6">
        <label className="block text-gray-700">Change Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          required
        />

        <label className="block text-gray-700 mt-4">Profile Image(URL):</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 mt-4 rounded"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>

      {message && <p className="text-center mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default MyProfile;
