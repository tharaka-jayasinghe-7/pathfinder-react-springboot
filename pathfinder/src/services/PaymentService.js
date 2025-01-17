import axios from "axios";

const BASE_PAYMENT_URL = "http://localhost:8080/payment";

export const getAllPayment = () => axios.get(BASE_PAYMENT_URL + "/getPayments");
