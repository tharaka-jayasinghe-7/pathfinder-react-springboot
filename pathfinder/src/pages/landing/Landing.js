import React from "react";
import Navbar from "../../components/landing/Navbar";
import lotusImage from "../../images/landing/lotus_tower3.jpg";
import welderImage from "../../images/landing/welder1.jpg";
import chefImage from "../../images/landing/chef1.jpg";
import mechanicImage from "../../images/landing/mechanic1.jpg";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen "
        style={{
          backgroundImage: `url(${lotusImage})`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            TODAY IS THE BEST DAY TO BE AN{" "}
            <span className="text-blue-400">EXPERT</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join with us today on PATHFINDER
          </p>
        </div>
      </section>

      {/* Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          <div className="p-8 bg-white shadow-lg rounded-lg w-[500px] h-[300px] flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-4">
              If you are looking for guidance or a job
            </h2>
            <p className="mb-6">
              You can join Pathfinder as a job seeker. Post your profile and
              land your dream job.
            </p>
            <button
              onClick={() => navigate("/userLogin")}
              className="bg-blue-500 mb-3 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
            >
              Login Now
            </button>
            <ul className="flex space-x-4">
              <li>
                <Link to="#" className="text-orange-500 hover:text-orange-400">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg w-[500px] h-[300px] flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-4">If you want to hire</h2>
            <p className="mb-6">
              Your company can hire employees. Promote your business and find
              the best talents.
            </p>
            <button
              onClick={() => navigate("/userLogin")}
              className="bg-blue-500 mb-3 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
            >
              Login Now
            </button>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-orange-500 hover:text-orange-400">
                  Register here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="mb-20 text-gray-600">
            At Pathfinder, we believe in empowering students to shape their
            future by providing free, high-quality educational resources and
            guidance. Our platform is designed to bridge the gap between
            learning and employment, offering students the tools they need to
            thrive in today’s competitive job market. We provide access to a
            wide range of free online courses, expert advice, and mentorship
            programs, helping students build the skills and confidence necessary
            to succeed. Whether you're looking to enhance your knowledge,
            sharpen your expertise, or explore new career paths, we have the
            resources to guide you every step of the way. Once you've built your
            foundation, we make it easy to transition from education to
            employment. Our job portal connects you with top companies seeking
            fresh talent, ensuring that you can apply your newfound skills in
            real-world scenarios. From internships to full-time roles, we
            provide opportunities that align with your passion and career
            aspirations. Our mission is simple: to remove barriers to education
            and employment, enabling students from all walks of life to achieve
            their dreams. At Pathfinder, your future starts here – and it starts
            for free.
          </p>
          <div className="grid grid-cols-1 gap-7 mt-4">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={welderImage}
              alt="Construction Worker"
            />
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={chefImage}
              alt="Chef"
            />
            <img
              className="w-full h-auto rounded-lg shadow-lg "
              src={mechanicImage}
              alt="Engineer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
