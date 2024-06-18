<template>
    <v-container>
        <v-form v-model="valid">
            <v-row class="my-10"></v-row>
            <v-card class="mx-auto my-12" max-width="500">
                <v-card-title>Cadastrar exame</v-card-title>
                <v-row class="mx-auto">
                    <v-col>
                        <v-text-field v-model="exame.nomePessoa" :rules="usuarioRules" :counter="50" label="Aluno*"
                            required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-text-field v-model="exame.peso" :rules="pesoRules" label="Peso*" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-text-field class="" v-model="exame.altura" :rules="alturaRules" label="Altura*" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-text-field class="" v-model="exame.pressao" label="Pressão" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-text-field class="" v-model="exame.percentualGordura" label="Percentual de gordura" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-text-field class="" v-model="exame.percentualGorduraMagra" label="Percentual de gordura Magra" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-text-field class="" v-model="exame.imc" label="IMC" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto">
                    <v-col>
                        <v-textarea solo name="input-7-1" label="Descrição" auto-grow
                            :value="exame.descricao">
                        </v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center">
                        <v-btn class="mr-auto" color="primary" elevation="2" large raised @click="register">
                            Cadastrar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
        <v-snackbar v-model="snackbar">
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
    name: 'FormCadastroExame',
    components: {
    },
    data: () => ({
        urlCadastroExame: 'http://localhost:8080/api/usuario',
        valid: false,
        exame: { nomePessoa: '', peso: 0, altura: 0, pressao: '', percentualGordura: 0, percentualGorduraMagra: 0, imc: 0, descricao: '', nomeMedico: ''},
        retorno: {},
        usuarioRules: [
            (v: any) => !!v || 'Aluno é obrigatório',
            (v: string | any[]) => v.length <= 50 || 'Aluno deve conter no máximo 50 caracteres'
        ],
        pesoRules: [
            (v: any) => !!v || 'Peso é obrigatório',
            (v: number) => v > 0 || 'Peso deve ser maior que 0'
        ],
        alturaRules: [
            (v: any) => !!v || 'Altura é obrigatório',
            (v: number) => v > 0 || 'Altura deve ser maior que 0'
        ],
        senhaRules: [
            (v: any) => !!v || 'Senha é obrigatório'
        ],
        emailRules: [
            (v: any) => !!v || 'E-mail é obrigatório',
            (v: string) => /.+@.+/.test(v) || 'E-mail inválido'
        ],
        snackbar: false,
        text: '',
        usuarioRetorno: {
            id: 0,
            nome: '',
            email: '',
            senha: '',
            planoIsAtivo: false,
            tipoPlanoId: null
        },
        checkboxCliente: false,
        checkboxFuncionario: false,
        checkboxClienteFuncionario: null
    }),
    methods: {
        clear() {
           
        },
        retornar() {
            this.$router.push('/login')
        },
        register() {
            this.exame.nomeMedico = this.usuarioRetorno.nome;
            axios
                .post(this.urlCadastroExame, this.exame)
                .then((res) => {
                    this.usuarioRetorno = res.data
                    this.text = 'Usuário criado com sucesso!'
                    this.snackbar = true
                    this.$router.push('/login')
                }).catch((error) => {
                    this.text = 'Erro ao realizar cadastro!'
                    this.snackbar = true
                    this.clear()
                    console.log(error)
                })
        }
    }

})
</script>
