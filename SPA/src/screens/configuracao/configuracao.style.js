import { CORES, LETRAS } from "../../constants/tema.js";

const styles = {
  scrollContent: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: CORES.branco,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    marginTop: "15%",
    alignItems: "center",
    paddingTop: 35,
  },
  buttonContainer: {
    width: "100%",
  },
  form: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  titulo: {
    fontSize: LETRAS.xl,
    fontWeight: "bold",
    color: CORES.azulEscuro,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  subtitulo: {
    fontSize: LETRAS.lg,
    fontWeight: "600",
    marginBottom: 10,
    color: CORES.azulEscuro,
    alignSelf: "flex-start",
  },
  campoContainer: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontSize: LETRAS.md,
    marginBottom: 6,
    color: CORES.verdeEscuro,
  },
  input: {
    borderWidth: 1,
    borderColor: CORES.verdeEscuro,
    borderRadius: 8,
    padding: 10,
    color: CORES.verdeEscuro,
    fontSize: LETRAS.md,
    backgroundColor: "#F2F2F2",
    marginBottom: 10,
  },
  inputMultiline: {
    height: 100,
    textAlignVertical: "top",
  },
  logoutContainer: {
    position: "absolute",
    bottom: 10,
  },
  btnLogout: {
    backgroundColor: CORES.verdeEscuro,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  btnLogoutText: {
    color: CORES.branco,
    fontWeight: "700",
    fontSize: LETRAS.lg,
  },
  btnEnviarFormulario: {
    backgroundColor: CORES.verdeClaro,
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  btnEnviarText: {
    color: CORES.branco,
    fontSize: LETRAS.md2,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
};

export default styles;
