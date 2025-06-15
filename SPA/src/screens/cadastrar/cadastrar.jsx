import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

import styles from "./cadastrar.style";
import TelaContainer from "../../components/telaContainer/telaContainer";
import Icones from "../../constants/icones";
import BtnIntro from "../../components/btnIntro/btnIntro";

export default function Cadastrar() {
  return (
    <TelaContainer barStyle="dark-content" backgroundColor={"#FFFFFF"}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Image source={Icones.logo} style={styles.logo} />
          <Text style={styles.titulo}>Crie uma conta</Text>
          <BtnIntro
            texto="USUÁRIO"
            backgroundColor="#256c42"
            page="cadastrarUsers"
          />
          <BtnIntro
            texto="INSTITUIÇÃO"
            backgroundColor="#adcea4"
            page="cadastrarOngs"
          />
        </View>
      </ScrollView>
    </TelaContainer>
  );
}
