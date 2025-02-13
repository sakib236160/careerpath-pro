import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Details = () => {
    const { image, service_name, category, description, pricing, duration, counselor, rating } = useLoaderData();
    const contextValue = useContext(authContext);
    
    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                {/* Image */}
                <div className="flex justify-center mb-4">
                    <img
                        src={image || 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'}
                        alt={service_name}
                        className="w-64 h-40 object-cover rounded-md"
                    />
                </div>

                {/* Details */}
                <h1 className="text-3xl font-bold text-center mb-4">{service_name}</h1>
                <p className="text-gray-700 text-center mb-4">{description}</p>

                <div className="text-left space-y-2">
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Pricing:</strong> {pricing}</p>
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Counselor:</strong> {counselor}</p>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6">
                    <button 
                        onClick={() => document.getElementById('my_modal_5').showModal()} 
                        className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white px-6 py-2 rounded-lg shadow-md"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;





