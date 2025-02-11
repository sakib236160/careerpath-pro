import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Title and Description */}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-gray-800 transition-all duration-300 transform hover:scale-105">
          Our Professional Services
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Get expert guidance in various fields to elevate your career and skills.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
