<template>
  <form-exame />
</template>

<script lang="ts">
import Vue from 'vue'
import FormExame from '../components/FormExame.vue'

export default Vue.extend({
  name: 'Exame',

  components: {
    FormExame
  }
})
</script>
