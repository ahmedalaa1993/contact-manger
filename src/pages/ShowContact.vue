<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="row bg-amber-1">
      <div class="col-md-4 column justify-center text-center">
        <div class="q-pa-lg">
          <q-img
            :src="contact.url"
            spinner-color="white"
            style="height: 220px; max-width: 220px; border-radius: 50%"
          />
        </div>
      </div>

      <div class="col-md-6 q-py-md">
        <q-list class="bg-white spanList" bordered separator>
          <q-item>
            Name : <span> {{ contact.name }}</span>
          </q-item>
          <q-item>
            Email : <span> {{ contact.email }}</span></q-item
          >

          <q-item
            >Mobile : <span> {{ contact.mobile }}</span></q-item
          >
          <q-item
            >Country : <span> {{ contact.country }}</span></q-item
          >
          <q-item
            >Age : <span> {{ contact.age }}</span></q-item
          >
          <q-item
            >Company : <span> {{ contact.company }}</span></q-item
          >
          <q-item
            >Title : <span> {{ contact.title }}</span></q-item
          >
          <q-item
            >Group : <span> {{ contact.group }}</span></q-item
          >
        </q-list>
      </div>
    </div>
  </transition>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-btn
      class="q-ma-lg"
      to="/"
      color="primary"
      icon="  arrow_back  "
      label="Back"
    />
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { usePersonStore } from "../stores/example-store";
const personStore = usePersonStore();

const route = useRoute();
const contactID = route.params.contactID;
const contact = ref({});

const getContact = async () => {
  try {
    //     this.loading = true;
    const res = await fetch("http://localhost:3000/person/" + contactID);
    const data = await res.json();
    // console.log(data);
    contact.value = data;

    //     this.loading = false;
  } catch (error) {
    console.log("error", error);
    //     this.loading = true;

    //     // leh msh sha8al ?
  }
};
getContact();
</script>

<style lang="scss">
.spanList {
  span {
    font-weight: bolder;
    padding-left: 5px;
  }
}
</style>
