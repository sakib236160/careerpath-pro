import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Career Counseling
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:01780619346"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              (+88) 01780-619346
            </a>
            {user?.email ? (
              <div className="relative group items-center gap-4 flex">
                <div className="relative">
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
                  />
                  <div className="absolute  left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {user.displayName}
                  </div>
                </div>

                <NavLink
                  onClick={handleLogout}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                >
                  Log Out
                </NavLink>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={handleLogout}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 dark:text-blue-500 underline"
                    : "text-gray-900 dark:text-white hover:underline"
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                >
                  Service
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
