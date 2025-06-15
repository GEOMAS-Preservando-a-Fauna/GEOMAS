import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text,} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./buttonBackPage.style.js";

function ButtonBackPage({ text, Page }) {
  const navigation = useNavigation();
  const texto = text.toUpperCase();

  const handlePress = () => {
    console.log("navegação back funcionando");
    if (Page) {
      navigation.navigate(Page);
    } else {
      console.warn("Página não especificada!");
    }
  };

  return (
      <TouchableOpacity style={styles.btnBack} onPress={handlePress}>
        <Ionicons name="arrow-back-circle" color="#006400" size={55} />
        <Text style={styles.text}>{texto}</Text>
      </TouchableOpacity>
  );
}

export default ButtonBackPage;
