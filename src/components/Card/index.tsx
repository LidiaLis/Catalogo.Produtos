
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    quantidade: number;
};

export function Card({
    nome,
    descricao,
    categoria,
    preco,
    quantidade
}: Props) {

    return (
        <View style={styles.container}>

            <View style={styles.cabecalho}>
                <Text style={styles.nome}>
                    {nome}
                </Text>

                <View style={styles.etiqueta}>
                    <Text style={styles.textoEtiqueta}>
                        {categoria}
                    </Text>
                </View>
            </View>

            <Text style={styles.descricao}>
                {descricao}
            </Text>

            <View style={styles.divisor} />

            <View style={styles.informacoes}>

                <View>
                    <Text style={styles.rotulo}>PREÇO</Text>
                    <Text style={styles.preco}>
                        R$ {preco.toFixed(2).replace(".", ",")}
                    </Text>
                </View>

                <View style={styles.quantidadeContainer}>
                    <Text style={styles.rotulo}>QUANTIDADE</Text>
                    <Text style={styles.quantidade}>
                        {quantidade} unidades
                    </Text>
                </View>

            </View>

        </View>
    );
}
