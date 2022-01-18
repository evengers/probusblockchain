import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export default boot(({ app }) => {
  app.config.globalProperties.$api = api;
});

export { api };
