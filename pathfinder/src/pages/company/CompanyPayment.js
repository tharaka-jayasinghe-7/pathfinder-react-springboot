import React, { useState } from "react";
import axios from "axios";
import CompanyNavbar from "../../components/company/CompanyNavbar";
import { useLocation } from "react-router-dom";

const CompanyPayment = () => {
  const location = useLocation();
  const { amount: passedAmount } = location.state || {};
  const [amount, setAmount] = useState(passedAmount || "");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [code, setCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const companyId = localStorage.getItem("company_id");

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentData = {
      amount: parseFloat(amount),
      paymentMethod,
      cardNumber,
      code: parseInt(code),
    };

    axios
      .post(
        `http://localhost:8080/payment/company/${companyId}/addPayment`,
        paymentData
      )
      .then((response) => {
        setSuccessMessage("Payment added successfully!");
        setErrorMessage("");
        setAmount("");
        setPaymentMethod("");
        setCardNumber("");
        setCode("");
      })
      .catch((error) => {
        setErrorMessage("Failed to add payment. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <div>
      <CompanyNavbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-1/2">
          <h2 className="text-lg font-semibold mb-4">Add Payment</h2>
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                disabled // Makes it read-only
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Payment Method</label>
              <input
                type="text"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Security Code</label>
              <input
                type="number"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded-md"
              >
                Submit Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyPayment;
