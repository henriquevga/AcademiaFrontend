<template>
  <v-container>
    <v-form>
      <v-row class="my-10"></v-row>
      <v-card class="mx-auto my-12" max-width="500">
        <v-card-title>Dados necessários</v-card-title>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="dados.nome" label="Nome*" required>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="dados.cpf" label="CPF*" required></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="dados.email" label="Email*" required></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
              <v-text-field v-model="dados.dataNascimento" label="Data de nascimento*" ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
              <v-text-field v-model="dados.numCartao" label="Número do cartão*" ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
              <v-text-field v-model="dados.donoCartao" label="Dono do cartão*" ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <v-btn class="mr-auto" color="primary" elevation="2" large raised @click="inscrever()">
              Cadastrar e Inscrever em um plano
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios;

export default Vue.extend({
  name: 'FormInscricao',
  components: {
  },

  data: () => ({
    posts: [],
    urlCadastro: 'http://localhost:8080/api/pessoa/createOrUpdate',
    dados: {
      nome: '',
      cpf: '',
      email: '',
      senha: '',
      dataNascimento: '',
      vinculo: 0,
      numCartao: '',
      donoCartao: '',
    },
    text: '',
  }),

  methods: {
    inscrever() {
      axios
        .post(this.urlCadastro, this.dados)
        .then((res) => {
          console.log(res)
          this.text = 'Usuário criado com sucesso!'
          this.$router.push('/planos')
        }).catch((error) => {
          this.text = 'Erro ao realizar cadastro!'
          console.log(error)
        })
    }
  }

})
</script>
