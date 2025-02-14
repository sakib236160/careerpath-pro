import { NavLink } from "react-router-dom";
import { Circle } from "lucide-react"; 

const ServiceCard = ({ service }) => {
  const { image, service_name, category, pricing, counselor, id, status } = service;

  return (
    <div className="card bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden mt-12 transition-all hover:shadow-xl hover:-translate-y-1">
      <figure className="relative">
        <img src={image} alt={service_name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold text-gray-800">{service_name}</h2>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          {category}
          <Circle
            size={14}
            fill="currentColor"
            className={`${
              status === "online" ? "text-green-500" : "text-gray-500"
            }`}
          />
        </p>
        <p className="text-lg font-semibold text-gray-800 mt-2">${pricing}</p>
        <p className="text-sm text-gray-600">Counselor: {counselor}</p>
        <NavLink to={`/details/${id}`}>
          <div className="card-actions mt-4">
            <button className="btn bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white w-full rounded-full hover:opacity-90 transition">
              Learn More
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
