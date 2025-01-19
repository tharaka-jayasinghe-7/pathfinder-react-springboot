import axios from "axios";

const BASE_SUBCRIPTION_URL = "http://localhost:8080/subscription";

export const getAllsubscription = () => axios.get(BASE_SUBCRIPTION_URL);

export const deleteSubscription = (subscriptionId) =>
  axios.delete(
    BASE_SUBCRIPTION_URL + "/deleteSubscription" + "/" + subscriptionId
  );

export const addSubscription = (subscription) =>
  axios.post(BASE_SUBCRIPTION_URL + "/addSubscription", subscription);
