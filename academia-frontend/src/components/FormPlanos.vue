<template>
    <v-container>
        <v-row class="my-5"></v-row>
        <div>
            <h1 class="my-10">Escolha o melhor plano para você</h1>
        </div>
        <div>
            <v-row>
                <v-card :loading="loading" class="mx-auto my-12" max-width="350">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250"
                        src="https://conteudo.imguol.com.br/c/entretenimento/28/2020/08/13/natacao-nadadora-mulher-piscina-1597344669197_v2_1x1.jpg">
                    </v-img>

                    <v-card-title>Natação 2x</v-card-title>

                    <v-card-text>
                        <div>Selecione o plano que mais te agrada! Todos os planos te fornecem 7 aulas por semana.</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Planos 2x por semana</v-card-title>

                    <v-card-text>
                        <v-radio-group v-model="natacao2">
                            <v-radio label="Mensal: R$215,00" value="natacao2Mensal"></v-radio>
                            <v-radio label="Semestral: 6x R$193,50" value="natacao2Semestral"></v-radio>
                            <v-radio label="Anual: 12x R$182,75" value="natacao2Anual"></v-radio>
                        </v-radio-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="reserve(natacao2)">
                            Inscrever-se
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card :loading="loading" class="mx-auto my-12" max-width="350">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250"
                        src="https://www.henrimar.com.br/wp-content/uploads/2018/08/benef%C3%ADcio-nata%C3%A7%C3%A3o.jpg">
                    </v-img>

                    <v-card-title>Natação 3x</v-card-title>

                    <v-card-text>
                        <div>Selecione o plano que mais te agrada! Todos os planos te fornecem 7 aulas por semana.</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Planos 3x por semana</v-card-title>

                    <v-card-text>
                        <v-radio-group v-model="natacao3">
                            <v-radio label="Mensal: R$229,00" value="natacao3Mensal"></v-radio>
                            <v-radio label="Semestral: 6x R$206,10" value="natacao3Semestral"></v-radio>
                            <v-radio label="Anual: 12x R$189,00" value="natacao3Anual"></v-radio>
                        </v-radio-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="reserve(natacao3)">
                            Inscrever-se
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card :loading="loading" class="mx-auto my-12" max-width="350">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250"
                        src="https://www.dicasdetreino.com.br/wp-content/uploads/2019/06/Dicas-para-quem-faz-muscula%C3%A7%C3%A3o.jpg">
                    </v-img>

                    <v-card-title>Musculação</v-card-title>

                    <v-card-text>
                        <div>Selecione o plano que mais te agrada! Todos os planos te fornecem 7 aulas por semana.</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Planos disponíveis</v-card-title>

                    <v-card-text>
                        <v-radio-group v-model="musculacao">
                            <v-radio label="Mensal: R$125,00" value="musculacaoMensal"></v-radio>
                            <v-radio label="Semestral: 6x R$112,50" value="musculacaoSemestral"></v-radio>
                            <v-radio label="Anual: 12x R$106,25" value="musculacaoAnual"></v-radio>
                        </v-radio-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="reserve(musculacao)">
                            Inscrever-se
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card :loading="loading" class="mx-auto my-12" max-width="350">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250"
                        src="https://news.gympass.com/wp-content/uploads/2018/06/socializar-com-aulas-coletivas-na-academia.jpg">
                    </v-img>

                    <v-card-title>Spinning, Crossfit, Ritmos</v-card-title>

                    <v-card-text>
                        <div>Selecione o plano que mais te agrada! Todos os planos te fornecem 3 aulas por semana.</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Planos disponíveis</v-card-title>

                    <v-card-text>
                        <v-radio-group v-model="coletivas">
                            <v-radio label="Mensal: R$155,00" value="coletivasMensal"></v-radio>
                            <v-radio label="Semestral: 6x R$139,00" value="coletivasSemestral"></v-radio>
                            <v-radio label="Anual: 12x R$130,00" value="coletivasAnual"></v-radio>
                        </v-radio-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="reserve(coletivas)">
                            Inscrever-se
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </div>
        <div>
            <v-snackbar v-model="snackbar">
                {{ text }}
                <template v-slot:action="{ attrs }">
                    <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
                        Fechar
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
    name: "Planos",
    data: function () {
        return {
            urlUsuario: "http://localhost:8080/api/usuario/",
            list: [{ name: "myName", age: 25 }],
            snackbar: false,
            text: "",
            retorno: {},
            confere: false,
            usuarioRetorno: {
                id: 0,
                nome: "",
                email: "",
                senha: "",
                planoIsAtivo: false,
                tipoPlanoId: 0
            },
            selectedButton: 0,
            loading: false,
            selection: 1,
            natacao2: null,
            natacao3: null,
            musculacao: null,
            coletivas: null
        };
    },
    methods: {
        AtivarSnack() {
            this.snackbar = true;
        },
        BuscarUsuario() {
            axios
                .get(this.urlUsuario + this.$route.params.id)
                .then((res) => {
                    this.usuarioRetorno = res.data;
                    console.log(this.usuarioRetorno);
                }).catch((error) => {
                    console.log(error);
                });
        },
        reserve(input: any) {
            this.loading = true
            this.text = 'Plano selecionado com sucesso!'
            this.snackbar=true
            console.log(input)
            setTimeout(() => (this.loading = false), 2000)
            this.$router.push('/');
        }
    },
    components: {
    },
    mounted() {
        this.BuscarUsuario();
    }
});
</script>