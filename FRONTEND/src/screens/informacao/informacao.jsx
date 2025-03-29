import { View, Text } from "react-native";
import React from "react";
import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage.jsx";
import TelaContainer from "../../components/telaContainer/telaContainer";

export default function Informacao() {
  return (
    <TelaContainer barStyle="light-content" backgroundColor={"#006400"}>
      <ButtonBackPage Page="homeOng" text="denúncia" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF",
          gap: 5,
          paddingTop: "15%",
        }}
      ></View>
    </TelaContainer>
  );
}
