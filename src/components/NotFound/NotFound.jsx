import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <NavLink to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition">
        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
