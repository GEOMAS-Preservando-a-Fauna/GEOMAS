import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import ButtonBackPage from "../../components/buttonBackPage/buttonBackPage.jsx";
import TelaContainer from "../../components/telaContainer/telaContainer";
import { CORES } from "../../constants/tema.js";

const { width: larguraTela } = Dimensions.get('window');

export default function Informacao() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const scrollRef = useRef(null);

  const slides = [
    {
      titulo: "Impacto Ambiental",
      conteudo: `A crescente urbanização e o desmatamento têm provocado sérios impactos no meio ambiente, especialmente na vida dos animais silvestres. Muitos desses animais perdem seus habitats naturais e acabam aparecendo em áreas urbanas em busca de abrigo e alimento, o que aumenta os riscos de atropelamentos, ferimentos e conflitos com seres humanos.`,
      cor: '#2E8B57'
    },
    {
      titulo: "Educação Ambiental",
      conteudo: `Diante desse cenário preocupante, é fundamental repensarmos nossas atitudes e buscarmos formas de conviver em harmonia com a natureza. A educação ambiental tem um papel importante nesse processo, pois nos ajuda a entender o valor da biodiversidade e a necessidade de protegê-la.`,
      cor: '#3CB371'
    },
    {
      titulo: "Tecnologia e Sustentabilidade",
      conteudo: `Uma das formas de contribuir com essa causa é por meio do uso da tecnologia. O aplicativo GEOMAS é um exemplo de como a inovação pode ser usada em favor do meio ambiente. Com ele, qualquer pessoa pode registrar o avistamento de um animal silvestre, relatar situações de risco, comunicar casos de animais feridos e até solicitar ajuda para resgates.`,
      cor: '#20B2AA'
    },
    {
      titulo: "Educação Digital",
      conteudo: `Além disso, o aplicativo traz informações educativas que ajudam a população a entender melhor o papel de cada espécie na natureza e os cuidados que devemos ter com o meio ambiente. O GEOMAS também fornece dados em tempo real para órgãos ambientais, facilitando ações rápidas e estratégicas na proteção da fauna.`,
      cor: '#4682B4'
    },
    {
      titulo: "Autores e Referências",
      conteudo: `Segundo Sauvé (2005), a educação ambiental deve ser contínua e participativa. Autores como Jacobi (2003), Leff (2001) e Loureiro (2012) destacam a importância da cidadania ecológica e da articulação entre ciência, tecnologia e responsabilidade social para a construção de uma sociedade sustentável.`,
      cor: '#5F9EA0'
    },
    {
      titulo: "Conclusão",
      conteudo: `A educação ambiental aliada à tecnologia representa uma estratégia eficaz na promoção de uma convivência mais equilibrada entre o ser humano e a natureza. Preservar a fauna é preservar o equilíbrio da vida no planeta.`,
      cor: '#008B8B'
    },
  ];

  const lidarComScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const novoIndice = Math.round(offsetX / larguraTela);
    setIndiceAtual(novoIndice);
  };

  const rolarParaIndice = (indice) => {
    scrollRef.current?.scrollTo({
      x: indice * larguraTela,
      animated: true,
    });
    setIndiceAtual(indice);
  };

  const renderizarSlide = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.cor }]}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.conteudo}>{item.conteudo}</Text>
    </View>
  );

  return (
    <TelaContainer barStyle="light-content" backgroundColor={"#006400"}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingVertical: 30 }]}
      >        <ButtonBackPage Page="home" text="Educação Ambiental" />
        <View style={styles.container}>
          {/* Carrossel */}
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

          {/* Indicadores */}
          <View style={styles.indicadoresContainer}>
            {slides.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.indicador,
                  indiceAtual === index && styles.indicadorAtivo
                ]}
                onPress={() => rolarParaIndice(index)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </TelaContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    marginTop: "15%",
    alignItems: "center",
    justifyContent:"center"
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    paddingVertical: 10,
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
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  conteudo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF',
    textAlign: 'justify',
  },
  indicadoresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicador: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#CCC',
    marginHorizontal: 5,
  },
  indicadorAtivo: {
    backgroundColor: '#006400',
    width: 20,
  },
});