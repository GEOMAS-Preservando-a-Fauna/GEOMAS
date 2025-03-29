import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./introduction.style";
import TelaContainer from "../../components/telaContainer/telaContainer";
import BtnIntro from "../../components/btnIntro/btnIntro";
import Icones from "../../constants/icones";

export default function Introduction() {
  return (
    <TelaContainer barStyle="dark-content" backgroundColor={"#FFFFFF"}>
      <View style={styles.container}>
        <Image source={Icones.papagaioIcon} style={styles.imagem} />
        <Text style={styles.title}>SEJA BEM-VINDO!</Text>
        <View style={styles.textArea}>
          <Text style={styles.texto}>
            Ajude a salvar a fauna denunciando locais com animais em risco
          </Text>
        </View>
        <View style={styles.button}>
          <BtnIntro
            texto="CADASTRAR-SE"
            backgroundColor="#256c42"
            page="cadastrar"
          />
          <BtnIntro
            texto="FAZER LOGIN"
            backgroundColor="#adcea4"
            page="login"
          />
          <BtnIntro texto="convidado" backgroundColor="#256c42" page="" />
        </View>
      </View>
    </TelaContainer>
  );
}
