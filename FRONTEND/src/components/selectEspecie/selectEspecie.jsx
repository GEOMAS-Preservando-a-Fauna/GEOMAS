import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { CORES } from "../../constants/tema";

const EspeciesCheckbox = ({
  especies,
  selectedEspecies,
  setSelectedEspecies,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleEspecie = (especie) => {
    const isSelected = selectedEspecies.some((item) => item.id === especie.id);
    if (isSelected) {
      setSelectedEspecies(
        selectedEspecies.filter((item) => item.id !== especie.id)
      );
    } else {
      setSelectedEspecies([...selectedEspecies, especie]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.openButton}
      >
        <Text style={styles.openButtonText}>Selecionar Espécies</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>SELECIONE AS ESPÉCIES</Text>

            <ScrollView style={styles.scrollView}>
              {especies.map((especie) => (
                <TouchableOpacity
                  key={especie.id}
                  onPress={() => toggleEspecie(especie)}
                  style={styles.option}
                >
                  <CheckBox
                    checked={selectedEspecies.some(
                      (item) => item.id === especie.id
                    )}
                    onPress={() => toggleEspecie(especie)}
                  />
                  <Text style={styles.optionText}>{especie.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  openButton: {
    padding: 10,
    backgroundColor: CORES.verdeClaro,
    borderRadius: 5,
    alignItems: "center",
  },
  openButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    maxHeight: "80%",
  },
  title: {
    fontSize: 16,
    color: "#256c42",
    textAlign: "center",
  },
  scrollView: {
    maxHeight: 160,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#256c42",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EspeciesCheckbox;
