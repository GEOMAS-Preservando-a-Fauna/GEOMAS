import { CORES, LETRAS } from "../../constants/tema";

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  line: {
    width: "95%",
    height: 2,
    backgroundColor: "#CCC",
  },
  titulo: {
    color: CORES.verdeEscuro,
    fontSize: LETRAS.xxl,
    fontWeight: "600",
  },
  card: {
    width: 380,
    gap: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: CORES.verdeClaro,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  name: {
    width: "95%",
    textAlign: "left",
    color: "#C40C0C",
    fontWeight: "800",
    fontSize: LETRAS.md,
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
    color: "#C40C0C",
    fontWeight: "700",
    fontSize: LETRAS.lg,
    borderWidth: 2,
    borderColor: CORES.verdeMedio,
    borderRadius: 5,
  },
  text2: {
    width: "90%",
    color: CORES.verdeClaro,
    fontWeight: "700",
    fontSize: LETRAS.md,
  },
};

export default styles;
