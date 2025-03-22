import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import TelaContainer from "../../components/telaContainer/telaContainer";
import styles from "./home.style";
import Header from "../../components/header/header";
import { useNavigation } from "@react-navigation/native";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import BtnIntro from "../../components/btnIntro/btnIntro";
import API from "../../service/apiAxios.js";
import Imagens from "../../constants/imagens";

export default function Home() {
  const navigation = useNavigation();
  const [ongs, setOngs] = useState([]);

  const getOngs = async () => {
    try {
      const response = await API.get("/ongs");
      setOngs(response.data);
    } catch (error) {
      console.error("Erro ao listar ONGs:", error);
    }
  };

  useEffect(() => {
    getOngs();
  }, []);

  return (
    <TelaContainer barStyle="dark-content" backgroundColor={"#FFFFFF"}>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("denunciar")}>
          <Foundation name="alert" size={130} color="red" />
        </TouchableOpacity>
        <BtnIntro
          texto="Fazer Denúncia"
          backgroundColor="#256c42"
          page="denunciar"
        />
        <View style={styles.line} />
        <Text style={styles.titulo}>LISTA DE ONGS</Text>

        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          {ongs.map((item) => (
            <View key={item.id} style={[styles.card, { alignItems: "center" }]}>
              <Text style={styles.name}>{item.name.toUpperCase()}</Text>
              <TouchableOpacity onPress={() => copiarText()}>
                <Text style={styles.contato}>{item.number}</Text>
              </TouchableOpacity>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={{
            zIndex: 100,
            position: "absolute",
            bottom: 30,
            right: 10,
          }}
          onPress={() => navigation.navigate("denunciar")}
        >
          <Ionicons name="alert-circle" size={50} color="red" />
        </TouchableOpacity>
      </View>
    </TelaContainer>
  );
}
