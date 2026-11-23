
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Produto = {
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    quantidade: number;
};

const PRODUCTS_STORAGE_KEY = "@meuestoque:produtos";

async function get(): Promise<Produto[]> {
    try {
        const storage = await AsyncStorage.getItem(PRODUCTS_STORAGE_KEY);

        return storage ? JSON.parse(storage) : [];
    } catch (error) {
        throw new Error("PRODUCTS_GET: " + error);
    }
}

async function save(produtos: Produto[]): Promise<void> {
    try {
        await AsyncStorage.setItem(
            PRODUCTS_STORAGE_KEY,
            JSON.stringify(produtos)
        );
    } catch (error) {
        throw new Error("PRODUCTS_SAVE: " + error);
    }
}

async function add(novoProduto: Produto): Promise<Produto[]> {
    const produtos = await get();

    const produtosAtualizados = [...produtos, novoProduto];

    await save(produtosAtualizados);

    return produtosAtualizados;
}

export const productsStorage = {
    get,
    save,
    add,
};
