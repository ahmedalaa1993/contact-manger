<template>
  <div class="col-5">
    <q-input
      outlined
      @keyup="personStore.search"
      @keyup.esc="personStore.searchInput = ''"
      v-model="personStore.searchInput"
      label="Search"
    >
      <template v-slot:append>
        <q-icon
          v-if="personStore.searchInput !== ''"
          name="close"
          @click="personStore.searchInput = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" />
      </template>
    </q-input>
    <!-- <pre>{{ tasksStore.searchInput }} </pre>
    <pre>{{ tasksStore.searchBox }} </pre> -->
  </div>
</template>

<script setup>
import { usePersonStore } from "../stores/example-store";
const personStore = usePersonStore();
</script>

<style lang="scss" scoped></style>
