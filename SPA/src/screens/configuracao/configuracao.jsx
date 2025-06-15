import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";

import LogoutButton from "../../components/logout/logout";
import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage";
import TelaContainer from "../../components/telaContainer/telaContainer";
import { getUserType, getEmail } from "../../service/getStorage.js";
import API from "../../service/apiAxios.js";
import { CORES } from "../../constants/tema.js";
import styles from "./configuracao.style.js";

export default function Configuracao() {
  const [userType, setUserType] = useState();
  const [emailAtual, setEmailAtual] = useState("");
  const [emailNovo, setEmailNovo] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [senhaNova, setSenhaNova] = useState("");

  const [mostrarEditarEmail, setMostrarEditarEmail] = useState(false);
  const [mostrarEditarSenha, setMostrarEditarSenha] = useState(false);

  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [cidadeId, setCidadeId] = useState("");

  const fetchUserType = async () => {
    const tipo = await getUserType();
    setUserType(tipo);
    console.log("Tipo de usuário:", tipo);
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const userEmail = await getEmail();

      setEmailAtual(userEmail);

      if (tipo === "ong") {
        try {
          const res = await API.get(`/ongs/email/${userEmail}`);
          const ong = res.data;
          setNome(ong.name);
          setSigla(ong.sigla);
          setNumber(ong.number);
          setDescription(ong.description);
          setCidadeId(ong.cidadeId?.toString() || "");
        } catch (error) {
          console.log("Erro ao carregar dados da ONG:", error);
        }
      }
    };
    fetchUserType();
    fetchInitialData();
  }, []);

  const handleSaveUser = async () => {
    try {
      const body = {
        password: senhaAtual,
        newPassword: senhaNova,
        email: emailAtual,
        newEmail: emailNovo,
      };

      await API.put(`/users/${emailAtual}`, body);
      Alert.alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.log("Erro ao atualizar usuário:", error);
      Alert.alert(
        "Erro",
        error.response?.data?.error || "Falha ao atualizar usuário"
      );
    }
  };

  const handleSaveOng = async () => {
    try {
      const body = {
        name: nome,
        sigla,
        email: emailAtual,
        password: senhaAtual,
        description,
        number,
        cidadeId: Number(cidadeId),
      };

      await API.post("/ongs", body);
      Alert.alert("Informações da ONG atualizadas com sucesso!");
    } catch (error) {
      console.log("Erro ao atualizar ONG:", error);
      Alert.alert(
        "Erro",
        error.response?.data?.error || "Falha ao atualizar ONG"
      );
    }
  };

  return (
    <TelaContainer barStyle="dark-content" backgroundColor={CORES.verdeEscuro}>
      <ButtonBackPage
        Page={userType === "ong" ? "homeOng" : "home"}
        text="Configuração"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {userType === "user" && (
            <>
              <TouchableOpacity
                onPress={() => setMostrarEditarEmail(!mostrarEditarEmail)}
              >
                <Text style={styles.subtitulo}>
                  Atualizar E-mail {mostrarEditarEmail ? "▲" : "▼"}
                </Text>
              </TouchableOpacity>

              {mostrarEditarEmail && (
                <>
                  <CampoEdicao
                    label="E-mail atual"
                    valor={emailAtual}
                    setValor={setEmailAtual}
                  />
                  <CampoEdicao
                    label="Novo e-mail"
                    valor={emailNovo}
                    setValor={setEmailNovo}
                  />
                </>
              )}

              <TouchableOpacity
                onPress={() => setMostrarEditarSenha(!mostrarEditarSenha)}
              >
                <Text style={styles.subtitulo}>
                  Atualizar Senha {mostrarEditarSenha ? "▲" : "▼"}
                </Text>
              </TouchableOpacity>

              {mostrarEditarSenha && (
                <>
                  <CampoEdicao
                    label="Senha atual"
                    valor={senhaAtual}
                    setValor={setSenhaAtual}
                    secureTextEntry
                  />
                  <CampoEdicao
                    label="Nova senha"
                    valor={senhaNova}
                    setValor={setSenhaNova}
                    secureTextEntry
                  />
                </>
              )}

              <TouchableOpacity
                onPress={handleSaveUser}
                style={styles.btnEnviarFormulario}
              >
                <Text style={styles.btnEnviarText}>Salvar Usuário</Text>
              </TouchableOpacity>
            </>
          )}

          {userType === "ong" && (
            <>
              <CampoEdicao
                label="Nome da ONG"
                valor={nome}
                setValor={setNome}
              />

              <CampoEdicao label="Sigla" valor={sigla} setValor={setSigla} />

              <CampoEdicao
                label="Número de telefone"
                valor={number}
                setValor={setNumber}
                keyboardType="phone-pad"
              />

              <CampoEdicao
                label="Descrição"
                valor={description}
                setValor={setDescription}
                multiline
              />

              <CampoEdicao
                label="ID da Cidade"
                valor={cidadeId}
                setValor={setCidadeId}
                keyboardType="numeric"
              />

              <CampoEdicao
                label="Senha atual"
                valor={senhaAtual}
                setValor={setSenhaAtual}
                secureTextEntry
              />
              <TouchableOpacity
                onPress={handleSaveOng}
                style={[styles.btnEnviarFormulario, { marginBottom: 60 }]}
              >
                <Text style={styles.btnEnviarText}>Salvar ONG</Text>
              </TouchableOpacity>
            </>
          )}

          <View style={styles.logoutContainer}>
            <LogoutButton />
          </View>
        </View>
      </ScrollView>
    </TelaContainer>
  );
}

function CampoEdicao({
  label,
  valor,
  setValor,
  secureTextEntry,
  keyboardType,
  multiline,
}) {
  return (
    <View style={styles.campoContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.inputMultiline]}
        placeholder={`Digite ${label.toLowerCase()}`}
        value={valor}
        onChangeText={setValor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
}
