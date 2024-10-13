import React from "react";
import CompanyNavbar from "../../components/company/CompanyNavbar"; // Import CompanyNavbar
import abouts1 from "../../images/landing/about1.png"; // Import your images
import abouts2 from "../../images/landing/about2.png";
import abouts3 from "../../images/landing/about3.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <CompanyNavbar />

      {/* Main Content */}
      <div className="container mx-auto py-12">
        {/* Content Box */}
        <div className="bg-white shadow-lg rounded-lg p-12">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-6">About PathFinder</h1>
            <p className="text-gray-600 text-center mb-8">
              Welcome to LinkedIn, the world’s largest professional network with
              more than 1 billion members in more than 200 countries and
              territories worldwide.
            </p>

            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-gray-700 text-center mb-6">
              Create economic opportunity for every member of the global
              workforce.
            </p>

            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-gray-700 text-center mb-6">
              Our mission is simple: connect students with the right guidance
              and tools, preparing them for the evolving demands of the job
              market.
            </p>

            <h2 className="text-2xl font-bold mb-4">Who are we?</h2>
            <p className="text-gray-700 text-center">
              Pathfinder was founded with the goal of bridging the gap between
              education and industry. Starting from a small team of educators
              and professionals, we have grown into a comprehensive platform
              that supports students at every stage of their journey.
            </p>
            <p className="text-gray-700 text-center mt-4">
              Today, Pathfinder collaborates with industry-leading companies to
              offer valuable insights, mentorship, and resources to students
              across the globe.
            </p>
          </div>

          {/* Section with Cards */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6 text-center">
              For more information about our company
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img
                  src={abouts1} // Replaced with abouts1
                  alt="Community"
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  Connect with a growing community
                </h3>
                <p className="text-gray-600">
                  Connect with a growing community of students and professionals
                  dedicated to shaping successful careers.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img
                  src={abouts2} // Replaced with abouts2
                  alt="Programs"
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  Programs and Resources
                </h3>
                <p className="text-gray-600">
                  Enhance your learning with our range of guidance programs,
                  tools, and expert resources tailored to your needs.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img
                  src={abouts3} // Replaced with abouts3
                  alt="Partnership"
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  Partnership Opportunities
                </h3>
                <p className="text-gray-600">
                  Explore how your company can benefit from collaborating with
                  Pathfinder and help shape the future workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
