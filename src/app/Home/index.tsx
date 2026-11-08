import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

import { api } from "@/services/api";
import { styles } from "./styles";

type Deputado = {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
};

export default function Home() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState("Toque no botão para consultar a API.");
  //const [retorno, setRetorno] = useState(""); Antes 
const [deputados, setDeputados] = useState<Deputado[]>([]);// Depois

  async function conectarAPI() {
    setCarregando(true);
    setMensagem("Consultando a API...");
    // setRetorno(""); Antes

    try {     
      const resposta = await api.get<{ dados: Deputado[] }>("/deputados"); 
      
      //const deputados = resposta.data.dados; Antes
      const deputadosRecebidos = resposta.data.dados;//depois

      //console.log("Deputados recebidos:", deputadosRecebidos);
      //setMensagem(`Consulta concluída: ${deputados.length} deputados recebidos.`);     
      //setRetorno(JSON.stringify(deputados, null, 2)); // Antes
   
      setDeputados(deputadosRecebidos);
      setMensagem(`Consulta concluída: ${deputadosRecebidos.length} deputados recebidos.`);
    
    } catch {
      setMensagem("Não foi possível consultar a API. Verifique a conexão e tente novamente.");
      setDeputados([]);//depois
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.titulo}>API da Câmara</Text>
      <Text style={styles.descricao}>Exemplo de conexão com Axios</Text>

      <Button
        title={carregando ? "Consultando..." : "Consultar API"}
        onPress={conectarAPI}
        disabled={carregando}
      />

      <Text style={styles.mensagem}>
        {mensagem}
      </Text>

      <ScrollView style={styles.resultado} contentContainerStyle={styles.conteudo}>

          {deputados.map((deputado) => (
              <Card
                  key={deputado.id}
                  {...deputado}
              />
          ))}

      </ScrollView>
      
    </View>
  );
}
