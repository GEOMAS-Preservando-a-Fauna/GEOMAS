import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./header.style";
import { useNavigation } from "@react-navigation/native";

import { CORES } from "../../constants/tema";
import Ionicons from "@expo/vector-icons/Ionicons";

function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("informacao")}>
        <Ionicons
          name="book"
          size={35}
          styles={styles.icon}
          color={CORES.verdeClaro}
        />
      </TouchableOpacity>
      <Text style={styles.titulo}>GEOMAS</Text>
      <TouchableOpacity onPress={() => navigation.navigate("configuracao")}>
        <Ionicons
          styles={styles.icon}
          name="settings"
          size={35}
          color={CORES.verdeClaro}
        />
      </TouchableOpacity>
    </View>
  );
}
export default Header;
