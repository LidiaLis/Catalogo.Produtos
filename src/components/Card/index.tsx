
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  Image,
  View
} from "react-native";

import { styles } from "./styles";

type Props = Omit<TouchableOpacityProps, "id"> & {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
}

export function Card({ id, nome, siglaPartido, siglaUf, urlFoto, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>

            <Image
                source={{ uri: urlFoto }}
                style={styles.imagem}
            />

            <View style={styles.informacoes}>
                <Text style={styles.text}>{nome}</Text>

                <Text style={styles.text}>
                    Partido: {siglaPartido}
                </Text>

                <Text style={styles.text}>
                    Estado: {siglaUf}
                </Text>
            </View>

        </TouchableOpacity>
    )
}
