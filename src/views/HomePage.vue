<template>
  <v-container fluid>
    <h2>{{ title }}</h2>
    <v-row>
      <HelloWorld />
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const title = ref("This is home page.");
</script>
