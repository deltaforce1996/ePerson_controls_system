<template>
  <v-navigation-drawer v-model="isOpen" permanent>
    <v-list dense color="secondary">
      <nav-item
        v-for="(item, index) in items"
        :key="index"
        :go-to="item.path"
        :is-active="isActive(item.path)"
        :icon="item.icon"
        :id="item.id"
        :title="item.title"
      ></nav-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import NavItem from "../components/items/NavItem.vue";

const isOpen = ref(true);
const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};

const items = [
  {
    id: 1,
    title: "Home",
    icon: "mdi mdi-information",
    isActive: false,
    path: "/",
  },
  {
    id: 2,
    title: "Statistics",
    icon: "mdi mdi-chart-bar",
    isActive: false,
    path: "/StaticPage",
  },
  {
    id: 3,
    title: "Management",
    icon: "mdi mdi-account-lock",
    isActive: false,
    path: "/UserMgmtPage",
  },
];
</script>
