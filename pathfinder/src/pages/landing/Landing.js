import React from "react";
import Navbar from "../../components/landing/Navbar";
import lotusImage from "../../images/landing/lotus_tower3.jpg";
import welderImage from "../../images/landing/welder1.jpg";
import chefImage from "../../images/landing/chef1.jpg";
import mechanicImage from "../../images/landing/mechanic1.jpg";

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
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
            <button className="bg-blue-500 mb-3 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
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
          <div className="p-8 bg-white shadow-lg rounded-lg w-[500px] h-[300px] flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-4">If you want to hire</h2>
            <p className="mb-6">
              Your company can hire employees. Promote your business and find
              the best talents.
            </p>
            <button className="bg-blue-500 mb-3 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
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
            guidance...
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
