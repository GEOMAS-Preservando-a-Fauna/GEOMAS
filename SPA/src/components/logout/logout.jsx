import { Text, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import API from "../../service/apiAxios.js";
import styles from "../../screens/configuracao/configuracao.style.js";

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
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

  return (
    <TouchableOpacity
      title="Logout"
      onPress={handleLogout}
      style={styles.btnLogout}
    >
      <Text style={styles.btnLogoutText}>Sair da conta</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
