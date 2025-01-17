import React, { useEffect, useState } from "react";
import { deleteCompany, getAllCompanies } from "../../services/CompanyService";
import AdminNavbar from "../../components/admin/AdminNavbar";
import NavbarUpdate from "../../components/landing/NavbarUpdate";

const GetCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    listCompanies();
  }, []);

  function listCompanies() {
    getAllCompanies()
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function removeCompany(companyId) {
    deleteCompany(companyId)
      .then((response) => {
        listCompanies();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex">
      <NavbarUpdate />
      {/* Sidebar/Navbar */}
      <AdminNavbar />

      {/* Main Content */}
      <div className="p-8 bg-gray-100 min-h-screen ml-64 w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Companies List
        </h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
          <div className="p-4 flex justify-between items-center"></div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Company Id</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Phone</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr
                    key={company.companyId}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-100`}
                  >
                    <td className="py-2 px-4">{company.companyId}</td>
                    <td className="py-2 px-4">{company.companyName}</td>
                    <td className="py-2 px-4">{company.email}</td>
                    <td className="py-2 px-4">{company.mobile}</td>
                    <td className="py-2 px-4">{company.address}</td>
                    <button
                      onClick={() => removeCompany(company.companyId)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCompanies;
