import React from "react";
import { Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import API from "../../service/apiAxios.js";

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Limpa o token e outras informações do AsyncStorage
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userType");
      await AsyncStorage.removeItem("hasLoggedIn");

      await API.post("/logout");

      navigation.navigate("introduction");

      Alert.alert("Sucesso", "Você foi deslogado com sucesso!");
    } catch (error) {
      console.error("Erro ao deslogar:", error);
      Alert.alert("Erro", "Não foi possível realizar o logout.");
    }
  };

  return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;
