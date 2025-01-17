import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CompanyNavbar from "../../components/company/CompanyNavbar";

const CompanyPayment = () => {
  const location = useLocation();
  const selectedPackage = location.state?.package;
  const navigate = useNavigate();

  // State Management
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!selectedPackage?.companyId) {
      alert("Company ID is missing. Cannot process payment.");
      return;
    }

    const payment = {
      paymentMethod,
      cardNumber,
      expirationMonth,
      expirationYear,
      cvvCode,
      billingAddress,
      email,
      phone,
    };
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <CompanyNavbar />
      <div className="flex items-center justify-center py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">
            Payment for {selectedPackage?.name}
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            {selectedPackage?.price}
          </p>

          <form onSubmit={handlePayment}>
            {/* Payment Method Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="" disabled>
                  Choose card type
                </option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">American Express</option>
                <option value="discover">Discover</option>
              </select>
            </div>

            {/* Credit Card Details */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 mt-3 border rounded-lg"
                required
              />
              <div className="flex mt-3 space-x-3">
                <select
                  value={expirationMonth}
                  onChange={(e) => setExpirationMonth(e.target.value)}
                  className="w-1/2 p-3 border rounded-lg"
                  required
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select
                  value={expirationYear}
                  onChange={(e) => setExpirationYear(e.target.value)}
                  className="w-1/2 p-3 border rounded-lg"
                  required
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option
                      key={i + new Date().getFullYear()}
                      value={i + new Date().getFullYear()}
                    >
                      {i + new Date().getFullYear()}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                placeholder="CVV"
                value={cvvCode}
                onChange={(e) => setCvvCode(e.target.value)}
                className="w-full p-3 mt-3 border rounded-lg"
                required
              />
            </div>

            {/* Billing Address */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Billing Address</h2>
              <input
                type="text"
                placeholder="Billing Address"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                className="w-full p-3 mt-3 border rounded-lg"
                required
              />
            </div>

            {/* Contact Details */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Contact Details</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-3 border rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 mt-3 border rounded-lg"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-lg"
              >
                Pay
              </button>
              <button
                type="button"
                onClick={handleGoBack}
                className="bg-gray-300 text-black py-3 px-6 rounded-lg"
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyPayment;
