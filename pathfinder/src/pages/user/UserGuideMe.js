import React from "react";
import UserNavbar from "../../components/user/UserNavbar";
import vImage from "../../images/landing/v_img2.jpg";
import { useNavigate } from "react-router-dom";

const UserGuideMe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <UserNavbar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Career Path Section */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-4xl mt-32 mb-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How to chose your career path?
            </h2>
            <p className="text-gray-600 mb-6">
              At Pathfinder, we believe in empowering students to shape their
              future by providing free, high-quality educational resources and
              guidance. Our platform is designed to bridge the gap between
              learning and employment, offering students the tools they need to
              thrive in today’s competitive job market.
            </p>
            <p className="text-gray-600 mb-6">
              We provide access to a wide range of free online courses, expert
              advice, and mentorship programs, helping students build the skills
              and confidence necessary to succeed. Whether you’re looking to
              enhance your knowledge, sharpen your expertise, or explore new
              career paths, we have the resources to guide you every step of the
              way.
            </p>
            <button
              onClick={() => navigate("/userFindCourse")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded"
            >
              Click here to find free courses
            </button>
          </div>
        </section>

        <section
          className="relative mt-8 bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${vImage})`,
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              We are here to guide you to be the best version of you!
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserGuideMe;
