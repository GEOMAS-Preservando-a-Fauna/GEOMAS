import {
  hash1,
  hash2,
  hash3,
  hash4,
  hash5,
  hash6,
} from "../utils/ongsPassbcrypt.js";
export const ongsData = [
  {
    name: "BEMTEVI Consultoria Ambiental",
    sigla: "BEMTEVI",
    email: "contato@bemteviambiental.com.br",
    password: hash1,
    description:
      "Consultoria ambiental especializada na preservação e recuperação de ecossistemas.",
    number: "16 99214 8848",
    cidadeId: 2,
  },
  {
    name: "Clínica Bicho do Mato",
    sigla: "BICHO DO MATO",
    email: "bichodomato.rp@gmail.com",
    password: hash2,
    description:
      "Clínica veterinária especializada no atendimento e cuidados com animais silvestres.",
    number: "(16) 98106-2869",
    cidadeId: 2,
  },
  {
    name: "Centro de Triagem e Reabilitação de Animais Silvestres (CETRAS) Morro de São Bento",
    sigla: "CETRAS",
    email: "cetras.sp@ibama.gov.br",
    password: hash3,
    description:
      "Centro dedicado ao resgate, tratamento e reabilitação de animais silvestres.",
    number: "(16) 3603-9130",
    numberSecond: "(16) 3603-9138",
    cidadeId: 2,
  },
  {
    name: "POLÍCIA AMBIENTAL",
    sigla: "PA",
    email: "ambientaldenuncias@policiamilitar.sp.gov.br",
    password: hash4,
    description:
      "Órgão responsável pela fiscalização e proteção ambiental, combatendo crimes ambientais.",
    number: "(16) 3996-0450",
    numberSecond: "(16) 3996-0459",
    cidadeId: 2,
  },
  {
    name: "IBAMA",
    sigla: "IBAMA",
    email: "linhaverde.sede@ibama.gov.br",
    password: hash5,
    description:
      "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis, responsável pela regulamentação e fiscalização ambiental no Brasil.",
    number: "0800-618080",
    numberSecond: "(16) 3610-1174",
    cidadeId: 2,
  },
  {
    name: "Resgate de Animais Silvestres RP",
    sigla: "Resgate de Animais Silvestres RP",
    email: "kleber.ajf@gmail.com",
    password: hash6,
    description:
      "Resgate de Animais Silvestres RP tem por atividade consiste em capturar, manejar e realocar animais silvestres em risco, garantindo sua segurança e reduzindo impactos à biodiversidade.",
    number: "(16) 988321266",
    numberSecond: "(16) 988321266",
    cidadeId: 2,
  },
];
// Espécies de animais fictícias
export const especies = [
  { name: "Mamíferos" },
  { name: "Répteis" },
  { name: "Quelônio" },
  { name: "Aves" },
];

export const animals = [
  {
    name: "mico-estrela",
    scientificName: "Callithrix penicillata",
    especie_id: 1,
  },
  {
    name: "macaco-prego",
    scientificName: "Sapajus nigritus",
    especie_id: 1,
  },
  {
    name: "bugio",
    scientificName: "Alouatta caraya",
    especie_id: 1,
  },
  {
    name: "onça-parda",
    scientificName: "Puma concolor",
    especie_id: 1,
  },
  {
    name: "gato-mourisco",
    scientificName: "Puma yagouaroundi",
    especie_id: 1,
  },
  {
    name: "jaguatirica",
    scientificName: "Leopardus pardalis",
    especie_id: 1,
  },
  {
    name: "cachorro-do-mato",
    scientificName: "Cerdocyon thous",
    especie_id: 1,
  },
  {
    name: "gato-do-mato",
    scientificName: "Leopardus tigrinus",
    especie_id: 1,
  },
  {
    name: "lobo-guará",
    scientificName: "Chrysocyon brachyurus",
    especie_id: 1,
  },
  {
    name: "capivara",
    scientificName: "Hydrochoerus hydrochaeris",
    especie_id: 1,
  },
  {
    name: "preá",
    scientificName: "Cavia aperea",
    especie_id: 1,
  },
  {
    name: "cutia",
    scientificName: "Dasyprocta azarae",
    especie_id: 1,
  },
  {
    name: "ouriço-caixeiro",
    scientificName: "Sphiggurus villosus",
    especie_id: 1,
  },
  {
    name: "lebre-européia",
    scientificName: "Lepus europaeus",
    especie_id: 1,
  },
  {
    name: "veado-catingueiro",
    scientificName: "Mazama guazoubira",
    especie_id: 1,
  },
  {
    name: "tatu-peba",
    scientificName: "Euphractus sexcinctus",
    especie_id: 1,
  },
  {
    name: "tatu-galinha",
    scientificName: "Dasypus novemcinctus",
    especie_id: 1,
  },
  {
    name: "tamanduá-mirim",
    scientificName: "Tamandua tetradactyla",
    especie_id: 1,
  },
  {
    name: "gambá-de-orelha-branca",
    scientificName: "Didelphis albiventris",
    especie_id: 1,
  },
  {
    name: "cuíca-lanosa",
    scientificName: "Caluromys lanatus",
    especie_id: 1,
  },
  {
    name: "tapiti",
    scientificName: "Sylvilagus brasiliensis",
    especie_id: 1,
  },
  {
    name: "camundongo",
    scientificName: "Mus musculus",
    especie_id: 1,
  },

  // Répteis (id: 2)
  {
    name: "jararaquinha dormideira",
    scientificName: "Sibynomorphus mikanii",
    especie_id: 2,
  },
  {
    name: "cobra-coral-falsa",
    scientificName: "Erythrolamprus aesculapii",
    especie_id: 2,
  },
  {
    name: "cobra-cipó",
    scientificName: "Chironius exoletus",
    especie_id: 2,
  },
  {
    name: "cobra-cega",
    scientificName: "Amphisbaena alba",
    especie_id: 2,
  },
  {
    name: "cascavel",
    scientificName: "Crotalus durissus",
    especie_id: 2,
  },
  {
    name: "jararaca-da-mata",
    scientificName: "Bothrops jararaca",
    especie_id: 2,
  },
  {
    name: "jararacuçu",
    scientificName: "Bothrops jararacuçu",
    especie_id: 2,
  },
  {
    name: "cobra coral verdadeira",
    scientificName: "Micrurus lemniscatus",
    especie_id: 2,
  },

  // Quelônio (id: 3)
  {
    name: "cágado-de-barbicha",
    scientificName: "Phrynops geoffroanus",
    especie_id: 3,
  },

  // Aves (id: 4)
  {
    name: "pomba-de-bando",
    scientificName: "Zenaida auriculata",
    especie_id: 4,
  },
  {
    name: "pardal",
    scientificName: "Passer domesticus",
    especie_id: 4,
  },
  {
    name: "coruja-buraqueira",
    scientificName: "Athene cunicularia",
    especie_id: 4,
  },
  {
    name: "pombo-doméstico",
    scientificName: "Columba livia",
    especie_id: 4,
  },
];

export const cidades = [
  // Cidades de São Paulo (já fornecidas)
  { name: "SÃO PAULO", estado_id: 25 },
  { name: "RIBEIRÃO PRETO", estado_id: 25 },

  // Adicionando as capitais para os estados sem cidades
  { name: "RIO BRANCO", estado_id: 1 }, // Acre
  { name: "MACEIÓ", estado_id: 2 }, // Alagoas
  { name: "MACAPÁ", estado_id: 3 }, // Amapá
  { name: "MANAUS", estado_id: 4 }, // Amazonas
  { name: "SALVADOR", estado_id: 5 }, // Bahia
  { name: "FORTALEZA", estado_id: 6 }, // Ceará
  { name: "BRASÍLIA", estado_id: 7 }, // Distrito Federal
  { name: "VITÓRIA", estado_id: 8 }, // Espírito Santo
  { name: "GOIÂNIA", estado_id: 9 }, // Goiás
  { name: "SÃO LUÍS", estado_id: 10 }, // Maranhão
  { name: "CUIABÁ", estado_id: 11 }, // Mato Grosso
  { name: "CAMPO GRANDE", estado_id: 12 }, // Mato Grosso do Sul
  { name: "BELO HORIZONTE", estado_id: 13 }, // Minas Gerais
  { name: "BELÉM", estado_id: 14 }, // Pará
  { name: "JOÃO PESSOA", estado_id: 15 }, // Paraíba
  { name: "CURITIBA", estado_id: 16 }, // Paraná
  { name: "RECIFE", estado_id: 17 }, // Pernambuco
  { name: "Teresina", estado_id: 18 }, // Piauí
  { name: "RIO DE JANEIRO", estado_id: 19 }, // Rio de Janeiro
  { name: "NATAL", estado_id: 20 }, // Rio Grande do Norte
  { name: "PORTO ALEGRE", estado_id: 21 }, // Rio Grande do Sul
  { name: "PORTO VELHO", estado_id: 22 }, // Rondônia
  { name: "BOA VISTA", estado_id: 23 }, // Roraima
  { name: "FLORIANÓPOLIS", estado_id: 24 }, // Santa Catarina
  { name: "ARACAJU", estado_id: 26 }, // Sergipe
  { name: "PALMAS", estado_id: 27 }, // Tocantins
];

export const estados = [
  { name: "ACRE", sigla: "AC" },
  { name: "ALAGOAS", sigla: "AL" },
  { name: "AMAPÁ", sigla: "AP" },
  { name: "AMAZONAS", sigla: "AM" },
  { name: "BAHIA", sigla: "BA" },
  { name: "CEARÁ", sigla: "CE" },
  { name: "DISTRITO FEDERAL", sigla: "DF" },
  { name: "ESPÍRITO SANTO", sigla: "ES" },
  { name: "GOIÁS", sigla: "GO" },
  { name: "MARANHÃO", sigla: "MA" },
  { name: "MATO GROSSO", sigla: "MT" },
  { name: "MATO GROSSO DO SUL", sigla: "MS" },
  { name: "MINAS GERAIS", sigla: "MG" },
  { name: "PARÁ", sigla: "PA" },
  { name: "PARAÍBA", sigla: "PB" },
  { name: "PARANÁ", sigla: "PR" },
  { name: "PERNAMBUCO", sigla: "PE" },
  { name: "PIAUÍ", sigla: "PI" },
  { name: "RIO DE JANEIRO", sigla: "RJ" },
  { name: "RIO GRANDE DO NORTE", sigla: "RN" },
  { name: "RIO GRANDE DO SUL", sigla: "RS" },
  { name: "RONDÔNIA", sigla: "RO" },
  { name: "RORAIMA", sigla: "RR" },
  { name: "SANTA CATARINA", sigla: "SC" },
  { name: "SÃO PAULO", sigla: "SP" },
  { name: "SERGIPE", sigla: "SE" },
  { name: "TOCANTINS", sigla: "TO" },
];
