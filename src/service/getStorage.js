import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserData = async () => {
  const userDataString = await AsyncStorage.getItem("userData");

  if (!userDataString) {
    throw new Error("Dados do usuário não encontrados no AsyncStorage");
  }

  const user = JSON.parse(userDataString);
  return user;
};

export const getUserType = async () => {
  const userType = await AsyncStorage.getItem("userType");

  if (!userType) {
    throw new Error("Tipo de usuário não encontrado no AsyncStorage");
  }

  return userType;
};
