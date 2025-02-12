import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
// import Modal from "../Modal/Modal";

const Details = () => {
    const { image, service_name, category, description, pricing, duration, counselor, rating } = useLoaderData();

    const contextValue = useContext(authContext)
    console.log(contextValue);

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image || 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{service_name}</h1>
                        <p className="mb-5">{description}</p>
                        <p className="mb-5 text-start"><strong>Category:</strong> {category}</p>
                        <p className="mb-5 text-start"><strong>Pricing:</strong> {pricing}</p>
                        <p className="mb-5 text-start"><strong>Duration:</strong> {duration}</p>
                        <p className="mb-5 text-start"><strong>Counselor:</strong> {counselor}</p>
                        {/* <p className="mb-5 text-start"><strong>Rating:</strong> {rating}</p> */}
                        <button  onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <Modal></Modal> */}
        </div>
    );
};

export default Details;




