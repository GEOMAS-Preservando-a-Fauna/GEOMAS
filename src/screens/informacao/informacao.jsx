import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage.jsx";
import TelaContainer from "../../components/telaContainer/telaContainer";

const { width: screenWidth } = Dimensions.get("window");

const slides = [
  {
    title: "Impacto Ambiental",
    content: `A crescente urbanização e o desmatamento têm provocado sérios impactos no meio ambiente, especialmente na vida dos animais silvestres. Muitos desses animais perdem seus habitats naturais e acabam aparecendo em áreas urbanas em busca de abrigo e alimento, o que aumenta os riscos de atropelamentos, ferimentos e conflitos com seres humanos.`,
  },
  {
    title: "Educação Ambiental",
    content: `Diante desse cenário preocupante, é fundamental repensarmos nossas atitudes e buscarmos formas de conviver em harmonia com a natureza. A educação ambiental tem um papel importante nesse processo, pois nos ajuda a entender o valor da biodiversidade e a necessidade de protegê-la.`,
  },
  {
    title: "Tecnologia e Sustentabilidade",
    content: `Uma das formas de contribuir com essa causa é por meio do uso da tecnologia. O aplicativo GEOMAS é um exemplo de como a inovação pode ser usada em favor do meio ambiente. Com ele, qualquer pessoa pode registrar o avistamento de um animal silvestre, relatar situações de risco, comunicar casos de animais feridos e até solicitar ajuda para resgates.`,
  },
  {
    title: "Educação Digital",
    content: `Além disso, o aplicativo traz informações educativas que ajudam a população a entender melhor o papel de cada espécie na natureza e os cuidados que devemos ter com o meio ambiente. O GEOMAS também fornece dados em tempo real para órgãos ambientais, facilitando ações rápidas e estratégicas na proteção da fauna.`,
  },
  {
    title: "Autores e Referências",
    content: `Segundo Sauvé (2005), a educação ambiental deve ser contínua e participativa. Autores como Jacobi (2003), Leff (2001) e Loureiro (2012) destacam a importância da cidadania ecológica e da articulação entre ciência, tecnologia e responsabilidade social para a construção de uma sociedade sustentável.`,
  },
  {
    title: "Conclusão",
    content: `A educação ambiental aliada à tecnologia representa uma estratégia eficaz na promoção de uma convivência mais equilibrada entre o ser humano e a natureza. Preservar a fauna é preservar o equilíbrio da vida no planeta.`,
  },
];

export default function Informacao() {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.content}</Text>
    </View>
  );

  return (
    <TelaContainer barStyle="light-content" backgroundColor={"#006400"}>
      <ButtonBackPage Page="home" text="Educação Ambiental" />
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text>Ola</Text>
      </View>
    </TelaContainer>
  );
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#006400",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});

//<Carousel
//  data={slides}
//  renderItem={renderItem}
//  sliderWidth={screenWidth}
//  itemWidth={screenWidth * 0.9}
//  layout={"default"}
//inactiveSlideScale={0.95}
//inactiveSlideOpacity={0.7}
//containerCustomStyle={{ marginTop: 20 }}
///>;
