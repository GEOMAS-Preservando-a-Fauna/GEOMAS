import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
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
  const [refreshing, setRefreshing] = useState(false);
  const [ongs, setOngs] = useState([]);

  const getOngs = async () => {
    try {
      const response = await API.get("/ongs");
      setOngs(response.data);
    } catch (error) {
      console.log("Erro ao listar ONGs:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getOngs();
  }, []);

  return (
    <TelaContainer barStyle="dark-content" backgroundColor={"#FFFFFF"}>
      <View style={styles.container}>
        <Header />
        <TouchableOpacity onPress={() => navigation.navigate("denunciar")}>
          <Foundation name="alert" size={110} color="red" />
        </TouchableOpacity>
        <BtnIntro
          texto="Fazer Denúncia"
          backgroundColor="#256c42"
          page="denunciar"
        />
        <Text style={styles.titulo}>LISTA DE ONGS</Text>

        <View style={styles.line} />

        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getOngs} />
          }
        >
          {ongs.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardBarra} />
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={styles.name}>{item.name.toUpperCase()}</Text>
                <TouchableOpacity onPress={() => copiarText()}>
                  <Text style={styles.contato}>{item.number}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{item.description}</Text>
              </View>
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
