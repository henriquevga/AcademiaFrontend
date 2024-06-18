<template>
  <v-container>
    <v-form v-model="valid">
      <v-row class="my-10"></v-row>
      <v-card class="mx-auto my-12" max-width="500">
        <v-card-title>Login</v-card-title>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="formLogin.usuario" :rules="usuarioRules" :counter="50" label="Usuário*" required>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>
            <v-text-field v-model="formLogin.senha" :rules="senhaRules" label="Senha*" required></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col class="text-center">
            <v-btn class="mx-auto" color="primary" elevation="2" large raised @click="login">
              Login
            </v-btn>
            <v-btn class="mx-auto ml-7" type="button" variant="outline-secondary" large @click="register">
              Não tenho uma conta
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'FormLogin',
  components: {
  },
  data: () => ({
    urlLogin: 'http://localhost:8080/api/pessoa/login',
    valid: false,
    formLogin: {
      usuario: '',
      senha: '',
    },
    usuarioRules: [
      (v: any) => !!v || 'Usuário é obrigatório',
      (v: string | any[]) => v.length <= 50 || 'Usuário deve conter no máximo 50 caracteres'
    ],
    senhaRules: [
      (v: any) => !!v || 'Senha é obrigatório'
    ],
    email: '',
    emailRules: [
      (v: any) => !!v || 'E-mail é obrigatório',
      (v: string) => /.+@.+/.test(v) || 'E-mail inválido'
    ],
    usuarioRetorno: {
      id: 0,
      nome: "ele",
      cpf: "9146238529",
      email: "rodrigolopesferreira4@gmail.com",
      senha: "123456",
      dataNascimento: "18/04/2020",
      vinculo: 0,
      numCartao: "123",
      donoCartao: "ele"
    },
    snackbar: false,
    text: ''
  }),
  methods: {
    clear() {
    },
    login() {
      axios
        .post(this.urlLogin, this.formLogin)
        .then((res) => {
          this.usuarioRetorno = res.data
          this.$emit('login', this.usuarioRetorno)
          console.log(this.$parent.$data.usuarioRetorno)
          this.$router.push('/')
        }).catch((error) => {
          this.text = 'Erro ao realizar cadastro!'
          this.snackbar = true
          console.log(error)
        })
    },
    register() {
      this.$router.push('/cadastro')
    }
  }

})
</script>
