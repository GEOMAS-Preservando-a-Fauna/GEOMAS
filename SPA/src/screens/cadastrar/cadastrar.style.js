import { CORES, LETRAS } from "../../constants/tema";

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  titulo: {
    fontSize: LETRAS.xxxlg,
    fontWeight: "700",
    color: CORES.verdeEscuro,
  },
  form: {
    width: "80%",
    justifyContent: "center",
    gap: 5,
  },
  input: {
    width: "100%",
    backgroundColor: CORES.branco,
    borderWidth: 2,
    borderColor: CORES.verdeClaro,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: CORES.verdeEscuro,
    fontSize: 16,
  },
  text: {
    color: CORES.verdeEscuro,
    fontWeight: "600",
  },
};

export default styles;
