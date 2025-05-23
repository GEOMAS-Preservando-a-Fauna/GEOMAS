import { CORES, LETRAS } from "../../constants/tema";

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 20,
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: CORES.verdeClaro,
  },
  titulo: {
    color: CORES.verdeEscuro,
    fontSize: LETRAS.xl,
    textAlign: "left",
    fontWeight: "600",
  },
  card: {
    width: 360,
    flexDirection: "row",
    padding: 15,
    backgroundColor: CORES.branco,
    borderRadius: 16,
    marginTop: 12,
    marginHorizontal: 10,
    shadowColor: CORES.verdeEscuro,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardBarra: {
    width: 6,
    backgroundColor: CORES.verdeMedio,
    borderRadius: 5,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  name: {
    width: "90%",
    textAlign: "left",
    color: CORES.verdeEscuro,
    fontWeight: "800",
    fontSize: LETRAS.md,
  },
  contato: {
    padding: 3,
    width: "90%",
    textAlign: "left",
    color: "blue",
    fontWeight: "600",
    fontSize: LETRAS.sm,
  },
  text: {
    width: "90%",
    textAlign: "left",
    color: CORES.verdeClaro,
    fontWeight: "600",
    fontSize: LETRAS.xsm,
  },
};

export default styles;
