import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import TelaContainer from "../../components/telaContainer/telaContainer";
import styles from "./homeOng.style.js";
import Header from "../../components/header/header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import API from "../../service/apiAxios.js";
import Mapa from "../../components/map/map.jsx";
import { getUserType, getUserData } from "../../service/getStorage.js";

export default function HomeOng() {
  const navigation = useNavigation();
  const [ong, setOng] = useState(null);
  const [reports, setReports] = useState([]);

  const getOngs = async () => {
    try {
      const userType = await getUserType();
      const userData = await getUserData();
      if (userType === "ong") {
        const response = await API.get(`/ongs/email/${userData.email}`);
        setOng(response.data);
      }
    } catch (error) {
      console.log("Erro ao obter dados da ONG:", error);
    }
  };

  const getReports = async () => {
    try {
      const response = await API.get(`/reports/ongs/${ong.id}`);
      setReports(response.data);
    } catch (error) {
      console.log("Erro ao buscar reports");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getOngs();
      if (ong) {
        await getReports();
      }
    };

    fetchData();
  }, [ong]);

  return (
    <TelaContainer barStyle="dark-content" backgroundColor={"#FFFFFF"}>
      <Header />
      <View style={styles.container}>
        <Mapa reports={reports} />
        <Text style={styles.titulo}>Denúncias</Text>
        <View style={styles.line} />

        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          {reports.length > 0 ? (
            reports.map((report, i) => (
              <View
                key={report.id}
                style={[styles.card, { alignItems: "center" }]}
              >
                <View style={styles.box}>
                  <Text style={styles.name}>#{i + 1} Denúncia </Text>
                  <Text style={styles.t}>
                    {new Date(report.created_at).toLocaleDateString()}
                  </Text>
                </View>
                <Text style={styles.textC}>
                  <Text style={styles.text2}>Tipo de Risco: {""}</Text>
                  {report.reportType}
                </Text>
                <Text style={styles.textC}>
                  <Text style={styles.text2}>Endereço: {""}</Text>
                  {report.endereco}
                </Text>
                <Text style={styles.pendente}>
                  {report.status === false ? "Pendente" : "Atendida"}
                </Text>
              </View>
            ))
          ) : (
            <Text
              style={{
                fontSize: 15,
                marginBottom: 10,
                fontWeight: "700",
                color: "#8FBC8F",
              }}
            >
              Nenhuma denúncia encontrada!
            </Text>
          )}
        </ScrollView>

        <TouchableOpacity
          style={{
            zIndex: 100,
            position: "absolute",
            bottom: 15,
            right: 5,
          }}
          onPress={() => navigation.navigate("notification")}
        >
          <Ionicons name="notifications" size={50} color="#C40C0C" />
        </TouchableOpacity>
      </View>
    </TelaContainer>
  );
}
