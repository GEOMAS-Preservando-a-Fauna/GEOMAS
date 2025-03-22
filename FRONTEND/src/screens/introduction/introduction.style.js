import { CORES, LETRAS } from "../../constants/tema";

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  imagem: {
    width: 130,
    height: 130,
  },
  textArea: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 15,
    backgroundColor: CORES.verdeClaro,
  },
  title: {
    fontSize: LETRAS.xxlg,
    color: CORES.verdeEscuro,
    fontWeight: "700",
  },
  texto: {
    textAlign: "center",
    width: "65%",
    fontSize: LETRAS.md,
    color: CORES.verdeEscuro,
    fontWeight: "600",
  },
  button: {
    gap: 25,
    marginTop: 20,
  },
};

export default styles;
