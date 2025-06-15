import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Introduction from "./screens/introduction/introduction";
import Home from "./screens/home/home";
import HomeOng from "./screens/homeOng/homeOng";
import Login from "./screens/login/login";
import Cadastrar from "./screens/cadastrar/cadastrar";
import Denuncia from "./screens/denuncia/denuncia";
import CadastrarUsers from "./screens/cadastrar/cadastrarUser/cadastrarUser";
import CadastrarOngs from "./screens/cadastrar/cadastrarOngs/cadastrarOngs";
import Informacao from "./screens/informacao/informacao";
import Configuracao from "./screens/configuracao/configuracao";
import Notification from "./screens/notification/notification";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="introduction">
        <Stack.Screen
          name="introduction"
          component={Introduction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadastrar"
          component={Cadastrar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadastrarOngs"
          component={CadastrarOngs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadastrarUsers"
          component={CadastrarUsers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homeOng"
          component={HomeOng}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="denunciar"
          component={Denuncia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="informacao"
          component={Informacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="configuracao"
          component={Configuracao}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
