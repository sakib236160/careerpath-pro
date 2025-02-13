import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";
import CareerTips from "../CareerTips/CareerTips";
import SuccessStories from "../SuccessStories/SuccessStories";


const Home = () => {
  const services = useLoaderData();
  //   console.log(services);
  const { servicesData, feedBackData } = services;
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner></Banner>
     

      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold">Our Professional Services</h1>
        <p className="text-gray-600 mt-2">
          Get expert guidance in various fields to elevate your career and
          skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <NavLink to={"/service"} className="btn btn-primary">
          Show More
        </NavLink>
      </div>

      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold">What Our Clients Say</h1>
        <p className="text-gray-600 mt-2">
          Hear from our satisfied clients about their experiences and success
          stories.
        </p>
      </div>

      <FeedBack feedBackData={feedBackData}></FeedBack>

      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold">Career Tips & Advice</h1>
        <p className="text-gray-600 mt-2">
        Get expert tips and insights to boost your career growth.
        </p>
      </div>
      <CareerTips></CareerTips>
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold">Success Stories</h1>
        <p className="text-gray-600 mt-2">
        Be inspired by real stories of people who achieved their dream careers.
        </p>
      </div>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
