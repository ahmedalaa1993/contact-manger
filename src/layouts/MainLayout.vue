<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-item clickable to="/" class="column justify-center">
            <q-item-label class="text-white">Contact Manger</q-item-label>
          </q-item>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="200"
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered
    >
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          exact
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          :to="link.to"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <div>copyright &copy; by DEBO</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home ",
    caption: "Home page",
    icon: " home",
    to: "/",
  },
  {
    title: "favorite ",
    caption: "favorite Persons",
    icon: " favorite",
    to: "/favoritesContacts",
  },
  {
    title: "Add  ",
    caption: "Add New Contact",
    icon: " add",
    to: "/AddContact",
  },
];

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
<style lang="scss">
.opacityFav {
  opacity: 0.4;
}
.spanList {
  span {
    font-weight: bolder;
    padding-left: 5px;
  }
}
</style>
