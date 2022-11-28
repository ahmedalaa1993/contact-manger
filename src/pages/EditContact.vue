<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center q-ma-sm">
          <q-avatar icon="celebration" color="primary" text-color="white" />
          <span class="q-ml-sm text-weight-bold text-h6"
            >Congratulations .. <br />
            Contact Edit successfully
          </span>
        </q-card-section>

        <q-card-actions align="right" class="q-ma-md">
          <q-btn to="/" label="Back to home" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </transition>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="row bg-green-1">
      <q-card class="my-card col-md-6 q-gutter-md q-pa-md q-ma-md">
        <q-form @submit.prevent="updateContact">
          <q-input
            filled
            dense
            v-model="contact.name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            dense
            filled
            v-model="contact.url"
            label="Photo URL *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            dense
            type="email"
            v-model="contact.email"
            label="Your Email *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            dense
            v-model="contact.mobile"
            label="Mobile *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type your number',
            ]"
          />

          <q-input
            dense
            filled
            type="number"
            v-model="contact.age"
            label="Your age "
          />
          <q-input
            class="q-pt-md"
            filled
            dense
            v-model="contact.company"
            label="Your Company"
          />
          <q-input
            dense
            class="q-pt-md"
            filled
            v-model="contact.title"
            label="title"
          />
          <q-select
            class="q-pt-md"
            filled
            dense
            v-model="contact.group"
            :options="options"
            label="Select Group"
          />

          <div class="q-pt-md">
            <q-btn label="Update Contact" type="submit" color="secondary" />
            <!-- <q-btn
            label="Reset"
            type="reset"
            color="secondary"
            flat
            class="q-ml-sm"
          /> -->
          </div>
        </q-form>
        <!-- <q-input outlined v-model="text" label="Outlined" /> -->
      </q-card>
      <div class="col-md-3 column justify-center">
        <div>
          <q-img
            :src="contact.url"
            spinner-color="white"
            class="q-ml-xl"
            style="height: 250px; max-width: 250px; border-radius: 50%"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { usePersonStore } from "../stores/example-store";
const personStore = usePersonStore();
const options = ref(["Family", "Colleague", "Friend", "Social", "Service"]);
const confirm = ref(false);
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
    console.log(error);
    //     this.loading = true;

    //     // leh msh sha8al ?
  }
};
getContact();

const updateContact = () => {
  personStore.editContact(contact.value, contactID);
  // console.log(contact.value);
  confirm.value = true;
};
</script>

<style lang="scss" scoped></style>
