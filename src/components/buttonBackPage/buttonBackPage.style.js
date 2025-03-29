import { LETRAS, CORES } from "../../constants/tema";

const styles = {
  btnBack: {
    position: "absolute",
    top: 10,
    left: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    zIndex: 999,
  },
  text: {
    fontSize: LETRAS.xxlg,
    fontWeight: "800",
    color: CORES.verdeClaro,
    textAlign: "center",
  },
};

export default styles;
