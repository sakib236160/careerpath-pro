import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Career Counseling</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a>
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
                                    className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-500 underline" : "text-gray-900 dark:text-white hover:underline"}
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/service" 
                                    className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-500 underline" : "text-gray-900 dark:text-white hover:underline"}
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/profile" 
                                    className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-500 underline" : "text-gray-900 dark:text-white hover:underline"}
                                >
                                    My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/features" 
                                    className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-500 underline" : "text-gray-900 dark:text-white hover:underline"}
                                >
                                    Features
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
