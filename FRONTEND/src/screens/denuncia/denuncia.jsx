import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage";
import TelaContainer from "../../components/telaContainer/telaContainer";
import BtnIntro from "../../components/btnIntro/btnIntro";
import SelectItem from "../../components/selectItem/select";
import { CORES } from "../../constants/tema";
import API from "../../service/apiAxios.js";
import { getUserData, getUserType } from "../../service/getStorage.js";
import { useNavigation } from "@react-navigation/native";
import Mapa from "../../components/map/map.jsx";
import CheckboxOngs from "../../components/selectOngs/selectedOngs.jsx";

export default function Denuncia() {
  const [especies, setEspecies] = useState([]);
  const [ongs, setOngs] = useState([]);
  const [animais, setAnimais] = useState([]);
  const [local, setLocal] = useState();
  const [endereco, setEndereco] = useState();
  const [type, setType] = useState();
  const [selectedEspecie, setSelectedEspecie] = useState();
  const [selectedAnimal, setSelectedAnimal] = useState();
  const [selectedOng, setSelectedOng] = useState([]);
  const [user, setUser] = useState();

  const navigation = useNavigation();

  const getUserId = async () => {
    try {
      const userType = await getUserType();
      const userData = await getUserData();

      if (userType === "user") {
        const response = await API.get(`/users/email/${userData.email}`);
        setUser(response.data);
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  };

  const getOngs = async () => {
    try {
      const response = await API.get("/ongs");
      setOngs(response.data);
    } catch (error) {
      console.error("Erro ao listar ONGs:", error);
    }
  };

  const getEspecies = async () => {
    try {
      const response = await API.get("/especies");
      setEspecies(response.data);
    } catch (error) {
      console.error("Erro ao listar Espécies:", error);
    }
  };

  const getAnimaisPorEspecie = async (especieId) => {
    if (!especieId) return;

    try {
      const response = await API.get(`/animais/especie/${especieId}`);
      setAnimais(response.data);
    } catch (error) {
      console.error("Erro ao listar Animais:", error);
    }
  };

  const setDenuncia = async () => {
    try {
      if (!local || !endereco) {
        throw new Error("Localização é obrigatória!");
      }
      if (!type) {
        throw new Error("Tipo de risco é obrigatório!");
      }
      if (!selectedOng) {
        throw new Error("Selecionar uma ONG é obrigatório!");
      }
      if (!selectedEspecie) {
        throw new Error("Selecionar uma espécie é obrigatório!");
      }
      if (!selectedAnimal) {
        throw new Error("Selecionar um animal é obrigatório!");
      }

      const response = await API.post("/reports", {
        latitude: local.latitude,
        longitude: local.longitude,
        endereco,
        reportType: type.name,
        especie_id: selectedEspecie.id,
        animal_id: selectedAnimal.id,
        ong_id: selectedOng.map((item) => item.id),
        user_id: user.id,
      });

      Alert.alert("Sucesso", "Denúncia enviada com sucesso!", [{ text: "OK" }]);

      navigation.navigate("home");
    } catch (error) {
      console.error("Erro ao enviar denúncia:", error);
      Alert.alert("Erro", error.message || "Erro ao enviar denúncia!");
    }
  };

  const tiposDeRisco = [
    { id: 1, name: "Maus-tratos" },
    { id: 2, name: "Abandono" },
    { id: 3, name: "Tráfico Ilegal" },
    { id: 4, name: "Caça e Exploração" },
    { id: 5, name: "Animal Ferido ou Doente" },
    { id: 6, name: "Animal em Perigo" },
    { id: 7, name: "Crime Ambiental" },
  ];

  useEffect(() => {
    if (selectedEspecie?.id) {
      getAnimaisPorEspecie(selectedEspecie.id);
    }
  }, [selectedEspecie]);

  useEffect(() => {
    getEspecies();
    getOngs();
    getUserId();
  }, []);

  return (
    <TelaContainer barStyle="dark-content" backgroundColor={"#FFFFFF"}>
      <ScrollView>
        <ButtonBackPage Page="home" text="denúncias" />
        <View style={styles.container}>
          <Mapa
            setLocalizacao={setLocal}
            newEndereco={setEndereco}
            btn={true}
          />
          <SelectItem
            data={tiposDeRisco}
            title="SELECIONE O TIPO DE RISCO"
            setSelected={setType}
          />
          <SelectItem
            data={especies}
            title="SELECIONE A ESPÉCIE"
            setSelected={setSelectedEspecie}
          />
          {selectedEspecie?.id && (
            <SelectItem
              data={animais}
              title="SELECIONE O ANIMAL"
              setSelected={setSelectedAnimal}
            />
          )}
          <View style={styles.box}>
            <CheckboxOngs
              ongs={ongs}
              selectedOngs={selectedOng}
              setSelectedOngs={setSelectedOng}
            />
          </View>
          <BtnIntro
            texto="ENVIAR"
            backgroundColor="#006400"
            onPress={setDenuncia}
          />
        </View>
      </ScrollView>
    </TelaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    marginTop: "15%",
    alignItems: "center",
  },
  box: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  Textinfo: {
    fontSize: 16,
    color: CORES.verdeEscuro,
  },
});

/* <SelectItem
            data={ongs}
            title="SELECIONE A INSTITUIÇÃO"
            setSelected={setSelectedOng}
          /> */
