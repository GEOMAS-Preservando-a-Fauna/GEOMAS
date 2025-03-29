import { PermissionsAndroid, Platform } from "react-native";

export default async function RequestLocationPermission() {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão de Localização",
          message:
            "O aplicativo precisa acessar sua localização para melhorar sua experiência.",
          buttonNeutral: "Perguntar Depois",
          buttonNegative: "Cancelar",
          buttonPositive: "OK",
        }
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permissão de localização negada.");
        return false;
      }

      if (Platform.Version >= 29) {
        const backgroundGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
          {
            title: "Permissão de Localização em Segundo Plano",
            message:
              "O aplicativo precisa acessar sua localização em segundo plano para funcionalidades contínuas.",
            buttonNeutral: "Perguntar Depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK",
          }
        );

        if (backgroundGranted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Permissão de localização em segundo plano negada.");
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error("Erro ao solicitar permissão de localização:", error);
      return false;
    }
  }

  return true;
}
