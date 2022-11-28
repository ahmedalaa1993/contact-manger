<template>
  <!-- <div v-for="person in personStore.favorites" :key="person.id"></div> -->

  <div class="q-ma-md">
    <q-btn to="/" outline color="primary" icon="arrow_back " label="Home" />
  </div>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="row bg-blue-1">
      <div class="full-width" v-if="personStore.loading">
        <spinner />
      </div>
      <div
        class="q-pa-md col-md-6 col-sm-12"
        v-for="person in personStore.favorites"
        :key="person.id"
      >
        <CardItem :person="person" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import CardItem from "src/components/CardItem.vue";

import spinner from "../components/spinner.vue";
import { usePersonStore } from "../stores/example-store";

const personStore = usePersonStore();
</script>

<style lang="scss" scoped></style>
