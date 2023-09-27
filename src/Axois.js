import axios from "axios";
const instance = axios.create({
  // baseURL: 'https://staging.thehuntr.com/api/v1',
  baseURL: "https://sheet.best/api/sheets/64a870e1-2c9e-4020-9234-c70b3a11c56a",
  // timeout: 1000,
  // headers: {'Authorization': 'Bearer '+token}
});
export default instance;
