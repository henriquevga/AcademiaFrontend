<template>
    <div class="home">
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Bem-vindo ao PokeGym</h1>
                    <h2 class="subtitle">
                        A maior rede de academias de toda a América Latina!
                    </h2>
                    <h3 class="subtitle">
                        Não se esqueça de se inscrever para receber nossas novidades, promoções e muito mais!
                    </h3>
                </div>
            </div>
        </section>
        <div>
            <v-row>
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <v-img height="250"
                        src="https://c4.wallpaperflare.com/wallpaper/449/1021/171/fitness-sportswear-exercise-girl-wallpaper-preview.jpg">
                    </v-img>
                    <v-card-title>Musculação</v-card-title>
                    <v-card-text>
                        <div>Dezenas de aparelhos, monitores e muita música para acompanhar!
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="goToPlanos()">
                            Olhar planos
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <v-img height="250"
                        src="https://wallpaperaccess.com/full/2151201.jpg">
                    </v-img>
                    <v-card-title>Natação</v-card-title>
                    <v-card-text>
                        <div>Disponível em todas as unidades, não há nada melhor depois de um treino pesado!
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="goToPlanos()">
                            Olhar planos
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <v-img height="250"
                        src="https://image.winudf.com/v2/image/Y29tLnNwaW5uaW5nLmZyZWUuc3BvcnRfc2NyZWVuXzBfMTUyODE1OTMzMF8wOTE/screen-0.jpg?fakeurl=1&type=.webp">
                    </v-img>
                    <v-card-title>Spinning</v-card-title>
                    <v-card-text>
                        <div>Vários aparelhos com três televisões para cada, sinta-se imerso na pedalada!
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="goToPlanos()">
                            Olhar planos
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <v-img height="250"
                        src="https://i.pinimg.com/originals/fb/a9/4f/fba94f73513625bbc4dc634d57c738dd.jpg">
                    </v-img>
                    <v-card-title>Crossfit</v-card-title>
                    <v-card-text>
                        <div>Aulas todos os dias com muita orientação e adrenalina!
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="goToPlanos()">
                            Olhar planos
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <v-img height="250"
                        src="https://wallpaperaccess.com/full/7025977.jpg">
                    </v-img>
                    <v-card-title>Ritmos</v-card-title>
                    <v-card-text>
                        <div>Quem não gosta de dar uma soltada no quadril? Aulas todos os dias, até para as crianças!
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="goToPlanos()">
                            Olhar planos
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'FormHome',

    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        goToPlanos() {
            this.$router.push('/planos');
        },
    },
})
</script>

<style lang="scss" scoped>
.hero {
    text-align: center;
    background-image: url('https://i.pinimg.com/originals/32/35/08/3235080bc4e1cc9192097c991d9ce381.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 350px;
}

.title {
    padding: 80px 0 20px 0;
    font-size: 60px;
    color: white;
}

.subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
    color: white;
}

.button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    color: white;

    .button {
        margin-right: 50px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .welcome {
        width: 400px;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
    }
}

.is-xl {
    font-size: 1.7rem;
}
</style>
