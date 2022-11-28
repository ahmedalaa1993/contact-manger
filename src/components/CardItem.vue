<template>
  <q-card class="my-card" flat bordered>
    <!-- <q-card-section class="fit row wrap justify-between" horizontal> -->
    <q-card-section class="row" horizontal>
      <div class="col column justify-center q-pa-md">
        <img class="cardImg" :src="person.url" />
      </div>
      <div class="col-md-6 q-py-md">
        <q-list class="spanList" bordered separator>
          <q-item>
            Name : <span> {{ person.name }}</span>
          </q-item>
          <q-item>
            Email : <span> {{ person.email }}</span></q-item
          >

          <q-item
            >Mobile : <span> {{ person.mobile }}</span></q-item
          >
          <q-item
            >Company : <span> {{ person.company }}</span></q-item
          >
        </q-list>
      </div>

      <q-card-actions vertical class="col-md-2 justify-around q-px-md">
        <q-btn
          :to="`/ShowContact/${person.id}`"
          flat
          round
          color="warning"
          icon=" visibility"
        />
        <q-btn
          :to="`/EditContact/${person.id}`"
          flat
          round
          color="secondary"
          icon=" edit "
        />
        <q-btn
          @click="personStore.toggleFav(person.id)"
          :class="{ opacityFav: !person.Favs }"
          flat
          round
          color="red"
          icon="favorite"
        />
        <!-- @click="person.favs = !person.favs" -->

        <q-btn
          @click="personStore.deleteItem(person.id)"
          flat
          round
          color="negative"
          icon=" delete"
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { usePersonStore } from "../stores/example-store";

const props = defineProps(["person"]);
const personStore = usePersonStore();
personStore.getAllContacts();
</script>

<style lang="scss" scoped></style>
