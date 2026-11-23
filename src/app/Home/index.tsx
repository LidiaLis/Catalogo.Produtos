import { useState , useEffect} from "react";
import { ScrollView, Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { productsStorage, Produto } from "@/storage/produtosStorage";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

import { styles } from "./styles";

export default function Home() {
  //Estas constantes são usados para armazenar o estado da mensagem exibida na tela e a lista de produtos cadastrados. 
  //mensagem: é usada para atualizar a mensagem exibida.
  //produtos: é usada para atualizar a lista de produtos.
  //categoriaProduto: guarda a categoria escolhida para cadastrar um produto.
  //categoriaFiltro: guarda a categoria que queremos visualizar na lista.
  const [categoriaProduto, setCategoriaProduto] = useState("Todos");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todos");
  const [mensagem, setMensagem] = useState("Toque no botão para adicionar um produto.");
  const [produtos, setProdutos] = useState<Produto[]>([]);
  //São usados para guardar as infos digitadas nos campos de cadastro
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const produtosSalvos = await productsStorage.get();

                setProdutos(produtosSalvos);
            } catch (error) {
                Alert.alert(
                    "Erro",
                    "Não foi possível carregar os produtos salvos."
                );
            }
        }

        carregarProdutos();
    }, []);


    async function adicionarProduto() {

        if (nome.trim() === "") {
            Alert.alert(
                "Campo obrigatório",
                "Por favor, informe o nome do produto."
            );
            return;
        }

        if (quantidade.trim() === "") {
            Alert.alert(
                "Campo obrigatório",
                "Por favor, informe a quantidade do produto."
            );
            return;
        }

        const quantidadeNumero = Number(quantidade);

        if (!Number.isFinite(quantidadeNumero) || quantidadeNumero < 0) {
            Alert.alert(
                "Quantidade inválida",
                "Digite uma quantidade numérica válida e maior ou igual a zero."
            );
            return;
        }

        const precoNumero = preco.trim() === ""
            ? 0
            : Number(preco.replace(",", "."));

        if (!Number.isFinite(precoNumero) || precoNumero < 0) {
            Alert.alert(
                "Preço inválido",
                "Digite um preço numérico válido e maior ou igual a zero."
            );
            return;
        }

        const novoProduto: Produto = {
            id: Date.now(),
            nome: nome.trim(),
            descricao: descricao.trim(),
            categoria: categoriaProduto,
            preco: precoNumero,
            quantidade: quantidadeNumero,
        };

        try {
            const produtosAtualizados = await productsStorage.add(novoProduto);

            setProdutos(produtosAtualizados);

        } catch (error) {
            Alert.alert(
                "Erro",
                "Não foi possível salvar o produto."
            );

            return;
        }
        setNome("");
        setDescricao("");
        setPreco("");
        setQuantidade("");

        Alert.alert(
            "Sucesso!",
            "Produto cadastrado com sucesso! ♡"
        );
    }

    const produtosFiltrados = categoriaFiltro === "Todos"
        ? produtos
        : produtos.filter((produto) => produto.categoria === categoriaFiltro);


    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 30 }}
            keyboardShouldPersistTaps="handled"
        >
        <StatusBar style="dark" />
        <Text style={styles.titulo}>Catálogo de Produtos</Text>
        <Text style={styles.descricao}>Organize seus produtos com Carinhoo ♡</Text>

        <View style={styles.cartao}>

          <Text style={styles.tituloCartao}>
              Cadastrar produto
          </Text>

          <TextInput
              style={styles.input}
              placeholder="Nome do produto"
              value={nome}
              onChangeText={setNome}
          />

          <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={descricao}
              onChangeText={setDescricao}
          />

          <Text style={styles.tituloCampo}>
              Categoria
          </Text>
    {/*CADASTRAR -Aqui a pessoa escolhe a categoria que será salva no cadastro.*/}
        <View style={styles.grupoCategorias}>
            {["Beleza", "Alimentos", "Outros"].map((categoria) => (
                <TouchableOpacity
                    key={categoria}
                    style={[
                        styles.botaoCategoria,
                        categoriaProduto === categoria && styles.botaoCategoriaAtivo
                    ]}
                    onPress={() => setCategoriaProduto(categoria)}
                >
                    <Text
                        style={[
                            styles.textoCategoria,
                            categoriaProduto === categoria && styles.textoCategoriaAtivo
                        ]}
                    >
                        {categoria}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
          <TextInput
              style={styles.input}
              placeholder="Preço (R$)"
              value={preco}
              onChangeText={setPreco}
              keyboardType="decimal-pad"
          />

          <TextInput
              style={styles.input}
              placeholder="Quantidade"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="number-pad"
          />
          
            <Button
            title="Adicionar Produto"
            onPress={adicionarProduto}
            />

      </View>

      <View style={styles.cartao}>

        <Text style={styles.tituloCartao}>
           Meus produtos
        </Text>

        {/*FILTRAR - Aqui a pessoa escolhe quais produtos deseja visualizar no filtro.*/}
        <View style={styles.grupoCategorias}>
            {["Todos", "Beleza", "Alimentos", "Outros"].map((categoria) => (
                <TouchableOpacity
                    key={categoria}
                    style={[
                        styles.botaoCategoria,
                        categoriaFiltro === categoria && styles.botaoCategoriaAtivo
                    ]}
                    onPress={() => setCategoriaFiltro(categoria)}
                >
                    <Text
                        style={[
                            styles.textoCategoria,
                            categoriaFiltro === categoria && styles.textoCategoriaAtivo
                        ]}
                    >
                        {categoria}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>

        <ScrollView
            style={styles.resultado}
            contentContainerStyle={styles.conteudo}
        >
            {produtosFiltrados.length > 0 ? (

                produtosFiltrados.map((produto) => (
                    <Card
                        key={produto.id}
                        {...produto}
                    />
                ))

            ) : (

                <Text style={styles.mensagem}>
                    Nenhum produto encontrado nesta categoria.
                </Text>

            )}
        </ScrollView>

      </View>
    </ScrollView>
  );
}

