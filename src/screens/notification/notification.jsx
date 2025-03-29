import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import TelaContainer from "../../components/telaContainer/telaContainer";
import { useNavigation } from "@react-navigation/native";
import API from "../../service/apiAxios.js";
import { getUserType, getUserData } from "../../service/getStorage.js";
import styles from "./notification.style.js";
import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage.jsx";

export default function Notification() {
  const navigation = useNavigation();
  const [ong, setOng] = useState(null);
  const [reports, setReports] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [report, setReport] = useState(null);
  const [openStatus, setOpenStatus] = useState(false);

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
      console.log("Erro ao buscar reports:", error);
    }
  };

  const getReport = async (id) => {
    try {
      const response = await API.get(`/reports/${id}`);
      setReport(response.data);
      setOpenModal(true);
    } catch (error) {
      console.log("Erro ao buscar report:", error);
    }
  };

  const setStatus = async () => {
    if (!report || !report.id) {
      console.log("Erro: ID do report não encontrado!");
      return;
    }

    try {
      const response = await API.put(`/reports/${report.id}`, { status: true });
      if (response.status === 200) {
        Alert.alert("SUCESSO!", "Denúncia atendida com sucesso!");
        setOpenStatus(false);
        setOpenModal(false);
        getReports();
      }
    } catch (error) {
      console.log("Erro ao atualizar o status do report:", error);
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
    <TelaContainer barStyle="light-content" backgroundColor={"#006400"}>
      <ButtonBackPage Page="homeOng" text="denúncia" />
      <View style={styles.container}>
        <View style={[styles.line, { marginTop: 15 }]} />
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
                  <Text style={styles.text2}>TIPO DE RISCO: {""}</Text>
                  {report.reportType}
                </Text>
                <Text style={styles.textC}>
                  <Text style={styles.text2}>ENDEREÇO: {""}</Text>
                  {report.endereco}
                </Text>
                <Text style={styles.text2}>STATUS </Text>
                <View style={styles.box}>
                  <Text style={styles.pendente}>
                    {report.status === false ? "Pendente" : "Atendida"}
                  </Text>
                  <TouchableOpacity
                    style={styles.moreInformation}
                    onPress={() => getReport(report.id)}
                  >
                    <Text style={styles.more}>Mais Informação</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={[styles.modalText, { color: "#8FBC8F" }]}>
              Nenhuma denúncia encontrada!
            </Text>
          )}

          {openModal && (
            <Modal
              visible={openModal}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setOpenModal(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Detalhes da Denúncia</Text>
                  {report && (
                    <>
                      <Text style={styles.modalText}>
                        <Text style={styles.modalLabel}>TIPO DE RISCO: </Text>
                        {report.reportType}
                      </Text>
                      <Text style={styles.modalText}>
                        <Text style={styles.modalLabel}>ENDEREÇO: </Text>
                        {report.endereco}
                      </Text>
                      <Text style={styles.modalText}>
                        <Text style={styles.modalLabel}>DATA: </Text>
                        {report.created_at}
                      </Text>
                      <Text style={styles.modalText}>
                        <Text style={styles.modalLabel}>ESPÉCIE: </Text>
                        {report.especie.name}
                      </Text>
                      <Text style={styles.modalText}>
                        <Text style={styles.modalLabel}>ANIMAL: </Text>
                        {report.animal.name}
                      </Text>
                      <Text style={styles.modalText}>
                        <Text style={styles.modalLabel}>ENVIADO POR: </Text>
                        {report.user.email}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setReport({ ...report });
                          setOpenStatus(true);
                          console.log("ID do report:", report?.id);
                        }}
                        style={styles.statusButton}
                      >
                        <Text
                          style={[styles.closeButtonText, { color: "#FFF" }]}
                        >
                          {report.status === false ? "Pendente" : "Atendida"}
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                  <TouchableOpacity
                    onPress={() => setOpenModal(false)}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>Fechar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}

          {openStatus && (
            <Modal
              visible={openStatus}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setOpenStatus(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>
                    Deseja marcar esta denúncia como concluída?
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={setStatus}
                      style={styles.statusButton}
                    >
                      <Text style={[styles.closeButtonText, { color: "#FFF" }]}>
                        Concluir
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setOpenStatus(false)}
                      style={styles.closeButton}
                    >
                      <Text style={styles.closeButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </ScrollView>
      </View>
    </TelaContainer>
  );
}
