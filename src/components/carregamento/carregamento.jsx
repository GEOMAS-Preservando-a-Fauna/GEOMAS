import React from "react";
import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";
import { CORES } from "../../constants/tema.js";

function Carregamento({ visivel = false }) {
  return (
    <Modal transparent visible={visivel} animationType="fade">
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color={CORES.verdeEscuro} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Carregamento;
