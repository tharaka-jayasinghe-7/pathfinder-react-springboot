import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { getAllPayment } from "../../services/PaymentService";
import NavbarUpdate from "../../components/landing/NavbarUpdate";

const GetPayment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    listPayments();
  }, []);

  function listPayments() {
    getAllPayment()
      .then((response) => {
        setPayments(response.data);
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
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Payment List</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
          <div className="p-4 flex justify-between items-center"></div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Payment Id</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Payment Method</th>
                  <th className="py-2 px-4">Card Number</th>
                  <th className="py-2 px-4">Code</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr
                    key={payment.paymentId}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-100`}
                  >
                    <td className="py-2 px-4">{payment.paymentId}</td>
                    <td className="py-2 px-4">{payment.amount}</td>
                    <td className="py-2 px-4">{payment.paymentMethod}</td>
                    <td className="py-2 px-4">{payment.cardNumber}</td>
                    <td className="py-2 px-4">{payment.code}</td>
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

export default GetPayment;
