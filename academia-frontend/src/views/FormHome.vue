<template>
  <form-home />
</template>

<script lang="ts">
import Vue from 'vue'
import FormHome from '../components/FormHome.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    FormHome
  }
})
</script>
