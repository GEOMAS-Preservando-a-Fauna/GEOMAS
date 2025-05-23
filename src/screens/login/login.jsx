import { View, Text, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import TelaContainer from "../../components/telaContainer/telaContainer";
import styles from "./login.style";
import Icones from "../../constants/icones";
import BtnIntro from "../../components/btnIntro/btnIntro";
import { useNavigation } from "@react-navigation/native";
import getLogin from "../../service/login/login";
import Carregamento from "../../components/carregamento/carregamento";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigation = useNavigation();

  const login = async () => {
    if (!email || !password) {
      return Alert.alert("Erro", "Preencha todas as informações!");
    }

    try {
      setCarregando(true);
      const response = await getLogin({
        data: { email, password },
        navigateTo: navigation,
      });

      setCarregando(false);

      if (!response.success) {
        Alert.alert("Erro", response.error || "Não foi possível fazer login.");
      }
    } catch (error) {
      setCarregando(false);
      console.log("Erro ao logar usuário:", error);
      Alert.alert("Erro", "Não foi possível fazer login.");
    }
  };

  return (
    <TelaContainer barStyle="dark-content" backgroundColor={"#FFFFFF"}>
      <View style={styles.container}>
        <Image source={Icones.logo} style={styles.logo} />
        <Text style={styles.titulo}>Acesse sua conta</Text>
        <View style={styles.form}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um e-mail válido"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text style={styles.text}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Mínimo 5 dígitos"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <BtnIntro texto="ENTRAR" backgroundColor="#256c42" onPress={login} />
        <Carregamento visivel={carregando} />
      </View>
    </TelaContainer>
  );
}
