import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
  // etec
  // baseURL: "http://192.168.15.141:3000",
  // casa
  baseURL: "http://192.168.1.4:3000",
});

API.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("userToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Erro ao recuperar token:", error);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
