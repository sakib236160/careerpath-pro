import { useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();
  const pageData = {
    "/service": {
      title: "Our Professional Services",
      description: "Get expert guidance in various fields to elevate your career and skills.",
    },
    "/my-profile": {
      title: "My Profile",
      description: "Manage your career profile and preferences.",
    },
    "/features": {
      title: "Our Features",
      description: "Hear from our satisfied clients about their experiences and success stories.",
    },
    "/details/:id": {
      title: "Service Details",
      description: "Get insights about this service in detail.",
    },
  };
  const currentPage = pageData[location.pathname];
  if (!currentPage) {
    return null;
  }

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold">{currentPage.title}</h1>
      <p className="text-gray-600 mt-2">{currentPage.description}</p>
    </div>
  );
};

export default PageHeader;
