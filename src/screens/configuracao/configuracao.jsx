import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import LogoutButton from "../../components/logout/logout";
import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage";
import TelaContainer from "../../components/telaContainer/telaContainer";
import styles from "./configuracao.style";

export default function Configuracao() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveEmail = () => {
    Alert.alert("E-mail alterado", `Novo e-mail: ${email}`);
    setShowEmailForm(false);
    setEmail("");
  };

  const handleSavePassword = () => {
    Alert.alert("Senha alterada", "Senha alterada com sucesso!");
    setShowPasswordForm(false);
    setPassword("");
  };

  return (
    <TelaContainer barStyle="light-content" backgroundColor={"#006400"}>
      <ButtonBackPage Page="home" text="Configuração" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF",
          gap: 5,
          paddingTop: "15%",
          width: "100%",
        }}
      >
        <Text>Configuração</Text>

        <View style={styles.buttonContainer}>
          <Button
            title={showEmailForm ? "Cancelar alteração de e-mail" : "Alterar E-mail"}
            onPress={() => {
              setShowEmailForm(!showEmailForm);
              setShowPasswordForm(false);
            }}
          />
        </View>

        {showEmailForm && (
          <View style={styles.form}>
            <TextInput
              placeholder="Novo e-mail"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Button title="Salvar E-mail" onPress={handleSaveEmail} />
          </View>
        )}

        <View style={styles.buttonContainer}>
          <Button
            title={showPasswordForm ? "Cancelar alteração de senha" : "Alterar Senha"}
            onPress={() => {
              setShowPasswordForm(!showPasswordForm);
              setShowEmailForm(false);
            }}
          />
        </View>

        {showPasswordForm && (
          <View style={styles.form}>
            <TextInput
              placeholder="Nova senha"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />
            <Button title="Salvar Senha" onPress={handleSavePassword} />
          </View>
        )}

        <LogoutButton />
      </View>
    </TelaContainer>
  );
}