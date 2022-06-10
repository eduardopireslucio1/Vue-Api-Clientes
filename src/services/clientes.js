import { http } from "./config";

export default {
    listar: () => {
        return http.get('clientes')
    },

    salvar:(cliente) => {
        return http.post('cliente', cliente)
    }
}