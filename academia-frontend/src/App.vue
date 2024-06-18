<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img alt="Gym Logo" contain
          src="https://www.clipartmax.com/png/full/249-2496075_learn-how-to-draw-a-pokeball-icon-in-adobe-illustrator-pokemon-gym.png"
          transition="scale-transition" width="40" @click="goToHome()" />

        <v-img alt="Gym Name" class="shrink mt-1 hidden-sm-and-down mr-1 " contain min-width="100"
          src="https://www.coolgenerator.com/Data/Textdesign/202207/5a8c226116991f9ad77617ad231053e4.png" width="100"
          @click="goToHome()" />

        <v-img alt="Gym Slogan" class="shrink mt-1 hidden-sm-and-down" contain min-width="50"
          src="https://www.coolgenerator.com/Data/Textdesign/202207/b2f1bfb52042cfe8901f96e720dcb622.png" width="100"
          @click="goToHome()" />
      </div>
      <div class="d-flex flex-row justify-space-between align-center" style="width:100%">
        <v-divider></v-divider>

        <v-btn @click="goToHome()" target="_blank" text>
          <span class="mr-10">Home</span>
        </v-btn>

        <v-btn @click="goToLogin()" target="_blank" text>
          <span class="mr-10">Login</span>
        </v-btn>

        <v-btn @click="goToCadastro()" target="_blank" text>
          <span class="mr-10">Cadastro</span>
        </v-btn>

        <v-btn v-if="usuarioRetorno.vinculo == 1" @click="goToPlanos()" target="_blank" text>
          <span class="mr-10">Planos</span>
        </v-btn>

        <v-btn v-if="usuarioRetorno.vinculo == 1" @click="goToInscricao()" target="_blank" text>
          <span class="mr-10">Inscrever Cliente</span>
        </v-btn>

        <v-btn v-if="usuarioRetorno.vinculo == 3" @click="goToCadastroExame()" target="_blank" text>
          <span class="mr-10">Cadastro Exame</span>
        </v-btn>

        <v-btn v-if="usuarioRetorno.vinculo == 3 || usuarioRetorno.vinculo == 0" @click="goToExameRetorno()" target="_blank" text>
          <span class="mr-10">Exames</span>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn class="ml-10" color="error" large raised @click="retornar()">
          Sair da conta
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer dark padless>
      <v-card class="flex" flat tile color="black">
        <v-card-title class="red">
          <strong class="subheading">Conecte-se com as nossas redes sociais!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>POKEGYM</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data: () => ({
    userId: 0,
    usuarioRetorno: {
      id: 0,
      nome: "ele",
      cpf: "9146238529",
      email: "rodrigolopesferreira4@gmail.com",
      senha: "123456",
      dataNascimento: "18/04/2020",
      vinculo: 3,
      numCartao: "123",
      donoCartao: "ele"
    },
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToCadastro() {
      this.$router.push('/cadastro');
    },
    goToPlanos() {
      this.$router.push('/planos');
    },
    goToInscricao() {
      this.$router.push('/inscricao');
    },
    goToExameRetorno() {
      this.$router.push('/exame');
    },
    retornar() {
      this.$router.push('/');
    },
    goToCadastroExame() {
      this.$router.push('/cadastro-exame');
    }
  }
})
</script>
