import { CORES, LETRAS } from "../../constants/tema";

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: CORES.verdeClaro,
  },
  titulo: {
    color: CORES.verdeEscuro,
    fontSize: LETRAS.xl,
    fontWeight: "600",
  },
  card: {
    width: 380,
    gap: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: CORES.verdeClaro,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  name: {
    width: "95%",
    textAlign: "left",
    color: CORES.verdeEscuro,
    fontWeight: "800",
    fontSize: LETRAS.md,
  },
  contato: {
    padding: 3,
    width: "80%",
    textAlign: "center",
    color: "blue",
    fontWeight: "600",
    fontSize: LETRAS.sm,
  },
  t: {
    width: "90%",
    textAlign: "center",
    color: CORES.verdeClaro,
    fontWeight: "900",
    fontSize: LETRAS.md,
  },
  textC: {
    width: "90%",
    textAlign: "left",
    color: CORES.verdeEscuro,
    fontWeight: "600",
    fontSize: LETRAS.sm,
  },
  box: {
    flexDirection: "row",
    width: "55%",
    positon: "absolute",
    top: 0,
    left: "-64",
  },
  pendente: {
    width: "80%",
    textAlign: "center",
    color: CORES.verdeMedio,
    fontWeight: "600",
    fontSize: LETRAS.lg,
    borderWidth: 2,
    borderColor: CORES.verdeMedio,
    borderRadius: 5,
  },
};

export default styles;
