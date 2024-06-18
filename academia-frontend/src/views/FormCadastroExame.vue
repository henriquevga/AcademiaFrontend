<template>
  <form-cadastro-exame />
 </template>

<script lang="ts">
import Vue from 'vue'
import FormCadastroExame from '../components/FormCadastroExame.vue'

export default Vue.extend({
  name: 'CadastroExame',

  components: {
    FormCadastroExame
  }
})
</script>
