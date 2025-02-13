const Features = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Personalized Counseling
          </h2>
          <p className="text-gray-600">
            Get one-on-one personalized career counseling to help you make
            informed decisions about your future.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Expert Guidance</h2>
          <p className="text-gray-600">
            Receive expert guidance from experienced counselors who have helped
            thousands of students succeed.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Workshops & Webinars</h2>
          <p className="text-gray-600">
            Attend workshops and webinars on various topics, including interview
            tips, resume building, and more.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Job Placement Assistance
          </h2>
          <p className="text-gray-600">
            We help you connect with top companies and organizations, offering
            job placement assistance after counseling.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Career Assessment</h2>
          <p className="text-gray-600">
            Take comprehensive career assessments to understand your strengths,
            weaknesses, and potential career paths.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Online Support</h2>
          <p className="text-gray-600">
            Access 24/7 online support for any career-related queries and
            guidance at any time from anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
