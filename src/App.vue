<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Clientes Front</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="salvar">

        <label>DOCUMENTO</label>
        <input type="text" placeholder="Documento" v-model="cliente.documento">
        <label>NOME</label>
        <input type="text" placeholder="Nome" v-model="cliente.nome">

        <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>DOCUMENTO</th>
            <th>NOME</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="cliente of clientes" :key="cliente.id">

            <td>{{cliente.documento}}</td>
            <td>{{cliente.nome}}</td>
            <td>
              <button @click="deletar(cliente)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>

<script>

import Cliente from './services/clientes'

export default {
  data() {
    return {
      cliente: {
        documento: '',
        nome: '',
      },
      clientes: []
    }
  },

  mounted(){
    Cliente.listar().then(response => {
      this.clientes = response.data;
    })
  },

  methods:{

    salvar(){
      Cliente.salvar(this.cliente).then(response =>{
        console.log(response.data)
        alert('Cliente salvo com sucesso!')
      })

    },

    deletar(cliente){
      Cliente.deletar(cliente).then(response => {
        this.listar()
        var error = response.data.errors
        console.log(error)
      })
    }

  }

}

</script>

<style>
</style>
