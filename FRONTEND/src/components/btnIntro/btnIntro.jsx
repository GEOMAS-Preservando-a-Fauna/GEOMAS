import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CORES, LETRAS } from "../../constants/tema";
import { useNavigation } from "@react-navigation/native";

function BtnIntro(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        if (props.onPress) props.onPress();
        if (props.page) navigation.navigate(props.page);
      }}
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
    >
      <Text style={styles.text}>{props.texto}</Text>
    </TouchableOpacity>
  );
}

export default BtnIntro;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    width: 210,
  },
  text: {
    fontSize: LETRAS.md,
    textAlign: "center",
    fontWeight: "800",
    color: CORES.branco,
    fontWeight: "900",
  },
});
