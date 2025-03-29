import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CORES } from "../../constants/tema";

function SelectItem({ data, setSelected, title }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSelected(option);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.Textinfo}>{title}</Text>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.selectButton}
      >
        <Text style={styles.selectText}>
          {selectedOption?.name || "Selecione uma opção"}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.selectList} nestedScrollEnabled={true}>
          {data ? (
            data.map((item) => (
              <TouchableOpacity
                key={item.id} // Usar um identificador único
                onPress={() => handleSelect(item)}
                style={styles.option}
              >
                <Text style={styles.optionText}>{item.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.emptyMessage}>Nenhuma opção disponível</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
}

export default SelectItem;

const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  Textinfo: {
    fontSize: 16,
    color: CORES.verdeEscuro,
  },
  selectButton: {
    padding: 10,
    backgroundColor: CORES.verdeClaro,
    borderRadius: 5,
    alignItems: "center",
  },
  selectText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
  },
  selectList: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: CORES.verdeEscuro,
    borderRadius: 5,
    maxHeight: 200,
    width: "90%",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: CORES.verdeClaro,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
  emptyMessage: {
    textAlign: "center",
    padding: 10,
    fontSize: 14,
    color: "gray",
  },
});
