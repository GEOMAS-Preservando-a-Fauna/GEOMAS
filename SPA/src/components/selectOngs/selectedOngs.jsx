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
import { CORES, LETRAS } from "../../constants/tema";

function CheckboxOngs({ ongs, selectedOngs, setSelectedOngs }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleOng = (ong) => {
    const isSelected = selectedOngs.some((item) => item.id === ong.id);
    if (isSelected) {
      setSelectedOngs(selectedOngs.filter((item) => item.id !== ong.id));
    } else {
      setSelectedOngs([...selectedOngs, ong]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.openButton}
      >
        <Text style={styles.openButtonText}>Selecionar ONGs</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>SELECIONE AS ONGs</Text>

            <ScrollView style={styles.scrollView}>
              {ongs.map((ong) => (
                <TouchableOpacity
                  key={ong.id}
                  onPress={() => toggleOng(ong)}
                  style={styles.option}
                >
                  <CheckBox
                    size={LETRAS.xl}
                    checked={selectedOngs.some((item) => item.id === ong.id)}
                    onPress={() => toggleOng(ong)}
                  />
                  <Text style={styles.optionText}>
                    {ong.name.toUpperCase()}
                  </Text>
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
}

const styles = StyleSheet.create({
  openButton: {
    padding: 10,
    backgroundColor: CORES.verdeClaro,
    borderRadius: 5,
    alignItems: "center",
  },
  openButtonText: {
    color: "#FFF",
    fontSize: LETRAS.md,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    maxHeight: "80%",
  },
  title: {
    fontSize: LETRAS.lg,
    color: "#256c42",
    textAlign: "center",
  },
  scrollView: {
    maxHeight: 180,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: LETRAS.sm,
    width: "80%",
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
    fontSize: LETRAS.lg,
    fontWeight: "bold",
  },
});

export default CheckboxOngs;
