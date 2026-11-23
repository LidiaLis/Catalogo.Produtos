
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        marginBottom: 14,

        borderWidth: 1,
        borderColor: "#F5DCE6",

        elevation: 3,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
    },

    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        gap: 8,
    },

    nome: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#713D53",
        flex: 1,
    },

    etiqueta: {
        backgroundColor: "#FCE8F0",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },

    textoEtiqueta: {
        color: "#A34469",
        fontSize: 12,
        fontWeight: "600",
    },

    descricao: {
        fontSize: 13,
        color: "#777777",
        lineHeight: 20,
        marginBottom: 12,
    },

    divisor: {
        height: 1,
        backgroundColor: "#F3E3E9",
        marginBottom: 12,
    },

    informacoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    rotulo: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#A77A8D",
        marginBottom: 5,
    },

    preco: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#A34469",
    },

    quantidadeContainer: {
        backgroundColor: "#FFF4F8",
        padding: 10,
        borderRadius: 10,
    },

    quantidade: {
        fontSize: 13,
        fontWeight: "600",
        color: "#713D53",
    },

});
