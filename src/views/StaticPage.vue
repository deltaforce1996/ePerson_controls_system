
<template>
  <v-container fluid>
    <h2>{{ title }}</h2>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const title = ref("This is static page.")
</script>
