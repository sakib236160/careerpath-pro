

const ServiceCard = ({service}) => {
    console.log(service)
    const {image,service_name,category,pricing,counselor} = service;
    return (
        <>
        <div className="card  bg-base-100 shadow-xl rounded-2xl overflow-hidden mt-12">
        <figure>
          <img src={image} alt={service_name} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-bold">{service_name}</h2>
          <p className="text-sm text-gray-500">{category}</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">${pricing}</p>
          <p className="text-sm text-gray-600">Counselor: {counselor}</p>
          <div className="card-actions mt-4">
            <button className="btn btn-primary w-full">Learn More</button>
          </div>
        </div>
      </div>
      </>
    );
};

export default ServiceCard;