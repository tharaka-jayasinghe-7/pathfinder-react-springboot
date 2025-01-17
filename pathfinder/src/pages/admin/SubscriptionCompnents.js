import React from "react";
import NavbarUpdate from "../../components/landing/NavbarUpdate";

const SubscriptionCompnents = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <NavbarUpdate />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
          <h2 className="text-center text-2xl font-semibold text-teal-700 mb-6">
            Subscription Details
          </h2>
          <form className="space-y-6">
            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="duration"
              >
                Duration
              </label>
              <select
                id="duration"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="1-month">Per 1 Month</option>
                <option value="6-months">Per 6 Months</option>
                <option value="12-months">Per 12 Months</option>
              </select>
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="price"
              >
                Price (LKR)
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter price"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="features"
              >
                Features
              </label>
              <textarea
                id="features"
                rows="4"
                placeholder="Enter features (e.g., Premium Support, Ad-Free)"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-700"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCompnents;
