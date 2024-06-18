<template>
    <v-container>
        <v-row class="my-5"></v-row>
        <div>
            <h1 class="my-10">Exames</h1>
        </div>
        <div>
            <v-row class="ml-10">
                <div v-for="exame in actualRetornoExames" class="mr-5 mb-5">
                    <template>
                        <v-card class="mx-auto my-12" max-width="374">
                            <template slot="progress">
                                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                            </template>
                            <v-card-title>{{ exame.aluno }}</v-card-title>
                            <v-card-text>
                                <div>Altura: {{ exame.altura }}
                                </div>
                                <div>Peso: {{ exame.peso }}
                                </div>
                                <div>Medico: {{ exame.medico }}
                                </div>
                                <div>Descricao: {{ exame.descricao }}
                                </div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="deep-purple lighten-2" text @click="goToHome()">
                                    Ver Detalhes
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </div>
            </v-row>
        </div>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
    name: "Exame",
    data: function () {
        return {
            urlExames: "http://localhost:8080/api/exames/",
            retornoExames: [],
            actualRetornoExames: [
                {
                    id: 1,
                    aluno: "Vitor Raposo",
                    altura: "1,80 m",
                    peso: "100,0 kg",
                    medico: "Dr. Henrique Coelho",
                    descricao: "Quebrou o quadril, evitar o uso de exercícios aeróbicos",
                },
                {
                    id: 2,
                    aluno: "Arthur Sousa",
                    altura: "1,75 m",
                    peso: "76,0 kg",
                    medico: "Dr. Henrique Coelho",
                    descricao: "Apresenta falta de ar intenso, evitar sessões longas",
                },
                {
                    id: 3,
                    aluno: "Rafael Garcia",
                    altura: "1,86 m",
                    peso: "120,0 kg",
                    medico: "Dr. Larissa Brandão",
                    descricao: "Sem nenhuma queixa, ficha normal",
                },
                {
                    id: 3,
                    aluno: "Maria Julia",
                    altura: "1,50 m",
                    peso: "54,0 kg",
                    medico: "Dr. Larissa Brandão",
                    descricao: "Ênfase em exercícios de gluteos",
                },
                {
                    id: 4,
                    aluno: "Gabriel Ferreira",
                    altura: "1,73 m",
                    peso: "60,0 kg",
                    medico: "Dr. Larissa Brandão",
                    descricao: "Deseja adquirir peso, também deveerá ser encaminhado para uma nutricionista",
                },
                {
                    id: 5,
                    aluno: "Simone Raposo",
                    altura: "1,57 m",
                    peso: "84,0 kg",
                    medico: "Dr. Larissa Brandão",
                    descricao: "Deseja perder peso e adquirir um quadril largo",
                }
            ],
        };
    },
    methods: {
        BuscarExames() {
            axios
                .get(this.urlExames + "getExamesFromCPF/" + this.$route.params.id)
                .then((res) => {
                    this.retornoExames = res.data;
                }).catch((error) => {
                    console.log(error);
                });
        },
        goToHome() {
            this.$router.push('/');
        },
    },
    mounted() {
        this.BuscarExames();
    },
    components: {
    }
});
</script>