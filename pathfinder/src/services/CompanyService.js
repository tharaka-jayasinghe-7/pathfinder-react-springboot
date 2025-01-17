import axios from "axios";

const BASE_COMPANY_URL = "http://localhost:8080/company";

export const getAllCompanies = () => axios.get(BASE_COMPANY_URL);

export const deleteCompany = (companyId) =>
  axios.delete(BASE_COMPANY_URL + "/deleteCompany" + "/" + companyId);
