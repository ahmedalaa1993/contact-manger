<template>
  <!-- <q-page class="flex flex-center"> -->
  <div class="row">
    <q-btn
      dense
      class="q-ma-sm q-px-md"
      to="/AddContact"
      color="primary"
      icon="add"
      label="Add Contact"
    />

    <searchInput class="q-ma-sm" />
  </div>
  <!-- search irea  -->
  <div v-if="personStore.searchField.length" class="bg-grey-2">
    <div
      class="q-pa-md col-md-6 col-sm-12"
      v-for="person in personStore.searchField"
      :key="person.id"
    >
      <CardItem :person="person" />
    </div>
  </div>
  <div v-if="personStore.searchInput.length">
    <p
      v-show="!personStore.searchField.length"
      class="text-subtitle2 text-weight-medium q-ma-xs q-px-md"
    >
      no results
    </p>
  </div>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div
      class="row bg-blue-1"
      v-if="!personStore.searchField.length && !personStore.searchInput.length"
    >
      <div class="full-width" v-if="personStore.loading">
        <spinner />
      </div>

      <div
        class="q-pa-md col-md-6 col-sm-12"
        v-for="person in personStore.person"
        :key="person.id"
      >
        <CardItem :person="person" />
      </div>
    </div>
  </transition>
  <!-- </q-page> -->
</template>

<script setup>
import CardItem from "src/components/CardItem.vue";
import searchInput from "src/components/searchInput.vue";

import spinner from "../components/spinner.vue";

import { usePersonStore } from "../stores/example-store";
const personStore = usePersonStore();
personStore.getAllContacts();
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 700px;
  .cardImg {
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }
  .q-item {
    line-height: 2.5;
  }
}
</style>
