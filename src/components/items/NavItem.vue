<template>
  <v-list-item
    :class="{ 'active-item': props.isActive }"
    @click="handleItemClick(props.id, props.goTo)"
  >
    <template v-slot:prepend>
      <v-icon :color="props.isActive ? 'secondary' : ''">{{ props.icon }}</v-icon>
    </template>
  </v-list-item>
</template>

<script setup>
import { defineEmits } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  id: {
    type: Number,
    default: 0,
  },
  goTo: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["activate-item"]);

const handleItemClick = (item, route) => {
  router.push(route)
  if (!props.isActive) {
    emit("activate-item", item);
  }
};
</script>

<style scoped>
.active-item {
  border-left: 3px solid rgb(var(--v-theme-secondary));
  background-color: rgb(var(--v-theme-secondary), 0.2);
}

</style>
