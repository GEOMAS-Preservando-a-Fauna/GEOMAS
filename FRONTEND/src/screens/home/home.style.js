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
    gap: 5,
    padding: 15,
    borderWidth: 2,
    borderColor: CORES.verdeEscuro,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  name: {
    width: "95%",
    textAlign: "center",
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
  text: {
    width: "90%",
    textAlign: "center",
    color: CORES.verdeClaro,
    fontWeight: "600",
    fontSize: LETRAS.sm,
  },
};

export default styles;
