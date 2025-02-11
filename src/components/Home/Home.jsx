import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner></Banner>

      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-gray-600 mt-2">
          We provide expert guidance to shape your career.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {services.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <NavLink to={'/service'} className="btn btn-primary">Show More</NavLink>
      </div>
    </div>
  );
};

export default Home;
