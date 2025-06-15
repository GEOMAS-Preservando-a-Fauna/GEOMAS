import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../cadastrar.style";
import TelaContainer from "../../../components/telaContainer/telaContainer";
import BtnIntro from "../../../components/btnIntro/btnIntro";
import Icones from "../../../constants/icones";
import API from "../../../service/apiAxios";
import SelectItem from "../../../components/selectItem/select";
import { CreateOng } from "../../../service/login/registro";
import EspeciesCheckbox from "../../../components/selectEspecie/selectEspecie";
import Carregamento from "../../../components/carregamento/carregamento";

export default function CadastrarOngs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [especies, setEspecies] = useState([]);
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [selectedEspecies, setSelectedEspecies] = useState([]);
  const [selectedEstado, setSelectedEstado] = useState({});
  const [selectedCidade, setSelectedCidade] = useState({});
  const [carregando, setCarregando] = useState(false);
  const navigation = useNavigation();

  const getEspecies = async () => {
    try {
      const response = await API.get("/especies");
      setEspecies(response.data);
    } catch (error) {
      console.log("Erro ao listar Espécies:", error);
    }
  };

  const getEstados = async () => {
    try {
      const response = await API.get("/estados");
      setEstados(response.data);
    } catch (error) {
      console.log("Erro ao listar Estados:", error);
    }
  };

  const getCidade = async (estadoId) => {
    if (!estadoId) return;

    try {
      const response = await API.get(`/cidade/estado/${estadoId}`);
      setCidades(response.data);
    } catch (error) {
      console.log("Erro ao listar Cidades:", error);
    }
  };

  useEffect(() => {
    getEspecies();
    getEstados();
    if (selectedEstado && selectedEstado.id) {
      getCidade(selectedEstado.id);
    }
  }, [selectedEstado]);

  const createOng = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não conferem!");
      return;
    }

    if (password.length < 8 || confirmPassword.length < 8) {
      Alert.alert(
        "Erro",
        "A senha e a confirmação devem ter pelo menos 8 caracteres!"
      );
      return;
    }

    try {
      setCarregando(true);
      const response = await CreateOng({
        data: {
          name,
          email,
          password,
          number,
          especies: selectedEspecies.map((especie) => especie.id),
          cidadeId: selectedCidade.id,
          navegarTo: navigation,
        },
      });
      setCarregando(false);
      return Alert.alert("Sucesso", "Sua conta criada com sucesso!", [
        { text: "OK" },
      ]);
    } catch (error) {
      setCarregando(false);
      console.log("Não foi possível criar a ong:", error);
    }
  };

  return (
    <TelaContainer barStyle="dark-content" backgroundColor="#FFFFFF">
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingVertical: 30 }]}
      >
        <View style={styles.container}>
          <Image source={Icones.logo} style={styles.logo} />
          <Text style={styles.titulo}>Cadastrar Instituição</Text>
          <View style={styles.form}>
            <Text style={styles.text}>Nome da instituição</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome da instituição"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.text}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite um e-mail válido"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={styles.text}>Número de Contato</Text>
            <TextInput
              style={styles.input}
              placeholder="(xx) xxxx-xxxx"
              value={number}
              onChangeText={setNumber}
              keyboardType="numeric"
            />
            <Text style={styles.text}>Escolha as Espécies</Text>
            <EspeciesCheckbox
              especies={especies}
              selectedEspecies={selectedEspecies}
              setSelectedEspecies={setSelectedEspecies}
            />

            <SelectItem
              data={estados}
              title="SELECIONE O ESTADO"
              setSelected={setSelectedEstado}
            />

            {selectedEstado?.id && (
              <SelectItem
                data={cidades}
                title="SELECIONE A CIDADE"
                setSelected={setSelectedCidade}
              />
            )}

            <Text style={styles.text}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Mínimo 8 dígitos"
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
            onPress={createOng}
          />
          <Carregamento visivel={carregando} />
        </View>
      </ScrollView>
    </TelaContainer>
  );
}
