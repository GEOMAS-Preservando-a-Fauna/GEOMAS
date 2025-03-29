import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { CORES, LETRAS } from "../../constants/tema";

function Card(props) {
  const nome = props.nomeOng.toUpperCase();
  const especialidade = props.funcao.toUpperCase();
  console.log(especialidade + " " + nome);

  const copiarText = () => {};

  return (
    <View style={styles.card}>
      <Image source={props.image} style={styles.image} />
      <Text style={styles.name}>{nome}</Text>
      <TouchableOpacity onPress={copiarText}>
        <Text style={styles.contato}>{props.contato}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{especialidade}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // width: "100%",
    gap: 8,
    padding: 15,
    borderWidth: 2,
    borderColor: CORES.verdeEscuro,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  name: {
    width: "80%",
    textAlign: "center",
    color: CORES.verdeEscuro,
    fontWeight: "800",
    fontSize: LETRAS.lg,
  },
  contato: {
    padding: 3,
    width: "80%",
    textAlign: "center",
    color: "blue",
    fontWeight: "600",
    fontSize: LETRAS.sm,
  },
  text: {
    width: "90%",
    textAlign: "center",
    color: CORES.verdeClaro,
    fontWeight: "600",
    fontSize: LETRAS.sm,
  },
});
