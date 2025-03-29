import { Alert } from "react-native";
import API from "../apiAxios.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLogin = async ({ data, navigateTo }) => {
  try {
    const { email, password } = data;

    const response = await API.post("/sessions", { email, password });

    if (response.data?.token && response.data?.type) {
      const { token, type } = response.data;

      // Armazenar token e tipo no AsyncStorage
      await AsyncStorage.setItem("userToken", token);
      await AsyncStorage.setItem("userType", type);
      await AsyncStorage.setItem("userData", JSON.stringify(data));

      if (type === "user") {
        navigateTo.navigate("home");
        Alert.alert("Sucesso", "Login realizado com sucesso para usuário!");
      } else if (type === "ong") {
        navigateTo.navigate("homeOng");
        Alert.alert("Sucesso", "Login realizado com sucesso para ONG!");
      }

      return { success: true, type };
    }

    throw new Error("Erro inesperado ao tentar realizar login.");
  } catch (error) {
    console.error("Erro ao logar ONG/USER:", error);
    return { success: false, error: error.message || "Erro ao fazer login" };
  }
};

export default getLogin;
