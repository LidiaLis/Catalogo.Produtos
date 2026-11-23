import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#FFF4F8",
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 16,
},

  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#80445F",
    textAlign: "center",
  },

  descricao: {
    fontSize: 15,
    color: "rgb(133, 90, 109)",
    marginTop: 8,
    marginBottom: 24,
    textAlign: "center",
  },

  mensagem: {
    fontSize: 15,
    color: "rgb(133, 90, 109)",
    marginVertical: 20,
  },

  resultado: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },

  conteudo: {
    padding: 16,
  },

  json: {
    fontSize: 13,
    lineHeight: 20,
    color: "#24324B",
  },

  tituloCategoria: {
    fontSize: 16,
    fontWeight: "600",
    color: "#80445F",
    marginTop: 16,
    marginBottom: 10,
  },

  grupoCategorias: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
    flexWrap: "wrap",
  },

  botaoCategoria: {
    backgroundColor: "#F8E7EE",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },

  botaoCategoriaAtivo: {
    backgroundColor: "#C96B92",
  },

  textoCategoria: {
    color: "#A34469",
    fontSize: 14,
    fontWeight: "600",
  },

  textoCategoriaAtivo: {
    color: "#FFFFFF",
  },

  cartao: {
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
      padding: 16,
      marginBottom: 14,
  },

  tituloCartao: {
      fontSize: 18,
      fontWeight: "600",
      color: "#222222",
      marginBottom: 12,
  },

  input: {
      height: 48,
      borderWidth: 1,
      borderColor: "#EBCBD8",
      borderRadius: 10,
      paddingHorizontal: 12,
      marginBottom: 10,
      fontSize: 15,
      color: "#333333",
      backgroundColor: "#FFFFFF",
  },

  tituloCampo: {
      fontSize: 14,
      color: "#80445F",
      marginBottom: 8,
  },
});
