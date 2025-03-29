import { SafeAreaView, StatusBar } from "react-native";
import React from "react";

function TelaContainer(props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: props.backgroundColor,
        // alignContent: "center",
        // justifyContent: "center",
      }}
    >
      <StatusBar
        barStyle={props.barStyle}
        backgroundColor={props.backgroundColor}
      />
      {props.children}
    </SafeAreaView>
  );
}

export default TelaContainer;

// REFRESH AO PUXAR TELA
// https://reactnative.dev/docs/refreshcontrol
