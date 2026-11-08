import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 3,
    },
    imagem: {
        width: 75,
        height: 75,
        borderRadius: 10,
        resizeMode: "cover",
    },

    informacoes: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "center",
    },

    nome: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222222",
        marginBottom: 6,
    },

    text: {
        fontSize: 14,
        color: "#666666",
        marginBottom: 3,
    },
    
});