import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { CORES, LETRAS } from "../../constants/tema";

function Mapa({ setLocalizacao, newEndereco, btn, reports }) {
  const [local, setLocal] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [isLocal, setIsLocal] = useState(false);
  const [regiao, setRegiao] = useState(null);

  useEffect(() => {
    const buscarLocalizacao = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permissão de localização negada.");
          return Alert.alert(
            "NEGADO!",
            "Permissão de localização negada. Não será possível usar o mapa."
          );
        }

        const posicao = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        if (posicao && posicao.coords) {
          setLocal({
            latitude: posicao.coords.latitude,
            longitude: posicao.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        }
      } catch (erro) {
        console.log("Erro ao obter localização:", erro);
      }
    };

    buscarLocalizacao();
  }, []);

  const obterEndereco = async (latitude, longitude) => {
    const reverseGeocode = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    if (reverseGeocode.length > 0) {
      const info = reverseGeocode[0];
      const street = info.street || "Endereço desconhecido";
      const postalCode = info.postalCode || "Sem CEP";
      const city = info.city || "Cidade desconhecida";
      const region = info.region || "Região desconhecida";
      return `${street}, ${postalCode}, ${city} - ${region}`;
    }
    return "Endereço não encontrado";
  };

  const selecionarLocal = async () => {
    if (regiao) {
      const enderecoSelecionado = await obterEndereco(
        regiao.latitude,
        regiao.longitude
      );
      setEndereco(enderecoSelecionado);
      setLocalizacao(regiao);
      newEndereco(enderecoSelecionado);
      return Alert.alert("Sucesso!", `Endereço: ${enderecoSelecionado}`);
    } else {
      console.log("Nenhuma região selecionada.");
    }
  };

  const selecionarLocalNoMapa = async (evento) => {
    const { latitude, longitude } = evento.nativeEvent.coordinate;
    const enderecoSelecionado = await obterEndereco(latitude, longitude);

    setRegiao({ latitude, longitude });
    setEndereco(enderecoSelecionado);
    setIsLocal(true);
  };

  return (
    <View style={styles.caixa}>
      <Text style={styles.textoInfo}>Selecionar Local do Reporte</Text>
      {endereco && <Text style={styles.endereco}>{endereco}</Text>}
      <View style={styles.caixaMapa}>
        <MapView
          style={styles.mapa}
          region={
            local || {
              latitude: -23.55052,
              longitude: -46.633308,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }
          }
          onPress={selecionarLocalNoMapa}
        >
          {isLocal && regiao && <Marker coordinate={regiao} />}
          {reports &&
            reports.map((report) => (
              <Marker
                key={report.id}
                coordinate={{
                  latitude: report.latitude,
                  longitude: report.longitude,
                }}
              />
            ))}
        </MapView>
      </View>
      {btn && (
        <TouchableOpacity
          onPress={() => selecionarLocal()}
          style={[styles.botao, { backgroundColor: "#8FBC8F" }]}
        >
          <Text style={styles.texto}>SELECIONAR</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Mapa;

const styles = StyleSheet.create({
  caixa: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  textoInfo: {
    fontSize: 16,
    color: "#333",
  },
  endereco: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  caixaMapa: {
    height: 300,
    width: "100%",
    backgroundColor: "#EEE",
  },
  mapa: {
    height: "100%",
    width: "100%",
  },
  botao: {
    padding: 10,
    borderRadius: 20,
    width: 210,
  },
  texto: {
    fontSize: LETRAS.md,
    textAlign: "center",
    fontWeight: "800",
    color: CORES.branco,
  },
});
