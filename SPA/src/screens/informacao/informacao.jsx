import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage.jsx";
import TelaContainer from "../../components/telaContainer/telaContainer.jsx";
import { CORES } from "../../constants/tema.js";
import { getUserType } from "../../service/getStorage.js";

// Obtém a largura da tela dinamicamente
const larguraTela = Dimensions.get("window").width;

export default function Informacao() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [userType, setUserType] = useState();
  const scrollRef = useRef(null);

  // Atualiza índice do carrossel conforme rolagem
  const lidarComScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const novoIndice = Math.round(offsetX / larguraTela);
    setIndiceAtual(novoIndice);
  };

  // Rola manualmente para um slide específico
  const rolarParaIndice = (indice) => {
    scrollRef.current?.scrollTo({
      x: indice * larguraTela,
      animated: true,
    });
    setIndiceAtual(indice);
  };

  // Busca o tipo de usuário (user ou ONG)
  const fetchUserType = async () => {
    const tipo = await getUserType();
    setUserType(tipo);
    console.log("Tipo de usuário:", tipo);
  };
  useEffect(() => {
    fetchUserType();
  }, []);

  // Renderiza cada slide
  const renderizarSlide = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.cor }]}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.conteudo}>{item.conteudo}</Text>
    </View>
  );

  return (
    <TelaContainer
      barStyle="light-content"
      backgroundColor={CORES.verdeEscuro || "#006400"}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Botão para voltar */}
        <ButtonBackPage
          Page={userType === "user" ? "home" : "homeOng"}
          text="Educação Ambiental"
        />

        {/* Carrossel de informações */}
        <View style={styles.container}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={lidarComScroll}
            scrollEventThrottle={16}
            style={styles.carrossel}
          >
            {slides.map((item, index) => (
              <View key={index} style={styles.slideContainer}>
                {renderizarSlide({ item })}
              </View>
            ))}
          </ScrollView>

          {/* Indicadores de página */}
          <View style={styles.indicadoresContainer}>
            {slides.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.indicador,
                  indiceAtual === index && styles.indicadorAtivo,
                ]}
                onPress={() => rolarParaIndice(index)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </TelaContainer>
  );
}

// Estilos organizados
const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  carrossel: {
    flexGrow: 0,
  },
  slideContainer: {
    width: larguraTela - 20,
    paddingHorizontal: 10,
  },
  slide: {
    borderRadius: 15,
    padding: 20,
    height: 400,
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FFF",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  conteudo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#FFF",
    textAlign: "justify",
  },
  indicadoresContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  indicador: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#CCC",
    marginHorizontal: 5,
  },
  indicadorAtivo: {
    backgroundColor: CORES.verdeEscuro || "#006400",
    width: 20,
  },
});

// Slides de conteúdo com cores e textos organizados
const slides = [
  {
    titulo: "Boas-vindas!",
    conteudo: `Nesta seção, você encontrará informações valiosas sobre educação ambiental, sustentabilidade e o uso da tecnologia em prol da natureza. Navegue pelos slides para aprender mais.`,
    cor: "#228B22",
  },
  {
    titulo: "Impacto Ambiental",
    conteudo: `A urbanização e o desmatamento têm causado grandes impactos ambientais. Animais silvestres perdem seu habitat, o que os leva a invadir áreas urbanas, expondo-os a riscos de acidentes e conflitos com humanos.`,
    cor: "#2E8B57",
  },
  {
    titulo: "Educação Ambiental",
    conteudo: `É essencial repensar nossas atitudes e promover a convivência harmoniosa com a natureza. A educação ambiental ensina a importância da biodiversidade e da preservação dos ecossistemas.`,
    cor: "#3CB371",
  },
  {
    titulo: "Tecnologia e Sustentabilidade",
    conteudo: `Ferramentas tecnológicas como o app GEOMAS ajudam a registrar animais em risco, solicitar resgate e gerar dados para ações ambientais. A inovação pode salvar vidas!`,
    cor: "#20B2AA",
  },
  {
    titulo: "Educação Digital",
    conteudo: `O GEOMAS também educa a população com informações sobre espécies, perigos ambientais e boas práticas, além de colaborar com órgãos públicos através de dados em tempo real.`,
    cor: "#4682B4",
  },
  {
    titulo: "Autores e Referências",
    conteudo: `Sauvé (2005), Jacobi (2003), Leff (2001) e Loureiro (2012) destacam o papel da cidadania ecológica, educação participativa e a integração entre ciência e sustentabilidade.`,
    cor: "#5F9EA0",
  },
  {
    titulo: "Conclusão",
    conteudo: `Educar é preservar. Com o uso consciente da tecnologia e o conhecimento ambiental, podemos promover um futuro mais equilibrado e respeitoso com a fauna e o planeta.`,
    cor: "#008B8B",
  },
  {
    titulo: "Participe!",
    conteudo: `Agora que você conhece a importância da educação ambiental, que tal contribuir? Compartilhe o conhecimento, use o app GEOMAS e seja parte da transformação! 🌱📲`,
    cor: "#2F4F4F",
  },
];
