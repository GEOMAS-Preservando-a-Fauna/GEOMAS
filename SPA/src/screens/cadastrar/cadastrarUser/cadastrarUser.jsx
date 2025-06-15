import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../cadastrar.style";
import TelaContainer from "../../../components/telaContainer/telaContainer";
import BtnIntro from "../../../components/btnIntro/btnIntro";
import Icones from "../../../constants/icones";
import Carregamento from "../../../components/carregamento/carregamento";

import { CreateUser } from "../../../service/login/registro";

export default function CadastrarUsers() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigation = useNavigation();

  const createUserHandler = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas são diferentes!");
      return;
    }

    if (password.length < 5 || confirmPassword.length < 5) {
      Alert.alert(
        "Erro",
        "A senha e a confirmação devem ter pelo menos 5 caracteres!"
      );
      return;
    }

    try {
      setCarregando(true);
      const userData = { email, password };
      const response = await CreateUser({ userData, navegarTo: navigation });
      console.log("Usuário criado:", response.data);
      setCarregando(false);
      return Alert.alert("Sucesso", "Sua conta foi criada com sucesso!", [
        { text: "OK" },
      ]);
    } catch (error) {
      setCarregando(false);
      console.log("Não foi possível criar o usuário:", error);
      Alert.alert("Erro", "Não foi possível criar o usuário.");
    }
  };

  return (
    <TelaContainer barStyle="dark-content" backgroundColor="#FFFFFF">
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Image source={Icones.logo} style={styles.logo} />
          <Text style={styles.titulo}>Cadastro Usuário</Text>
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

            <Text style={styles.text}>Confirmar Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <BtnIntro
            texto="CRIAR"
            backgroundColor="#256c42"
            onPress={createUserHandler}
          />
          <Carregamento visivel={carregando} />
        </View>
      </ScrollView>
    </TelaContainer>
  );
}
