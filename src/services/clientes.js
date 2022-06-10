import { http } from "./config";

export default {
    listar: () => {
        return http.get('clientes')
    },

    salvar:(cliente) => {
        return http.post('cliente', cliente)
    },

    deletar:(cliente) => {
        return http.delete('cliente', { data: cliente})
    }
}