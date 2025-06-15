import API from "../apiAxios.js";
import { Alert } from "react-native";

export const CreateUser = async ({ userData, navegarTo }) => {
  try {
    const { email, password, confirmPassword } = userData;

    const response = await API.post("/users", {
      email,
      password,
      confirmPassword,
    });

    if (response && response.data) {
      navegarTo.navigate("login");
      return response.data;
    } else {
      Alert.alert("Erro", "Não foi possível criar o usuário.");
      return;
    }
  } catch (error) {
    Alert.alert("Erro", "Não foi possível criar o usuário.");
    throw error;
  }
};

export const CreateOng = async ({ data }) => {
  try {
    const response = await API.post("/ongs", {
      name: data.name,
      email: data.email,
      password: data.password,
      number: data.number,
      especies: data.especies,
      cidadeId: data.cidadeId,
    });

    if (response && response.data) {
      data.navegarTo.navigate("login");
      return response.data;
    } else {
      Alert.alert("Erro", "Não foi possível criar a ONG.");
      return;
    }
  } catch (error) {
    Alert.alert("Erro", "Não foi possível criar a ONG.");
    throw error;
  }
};
