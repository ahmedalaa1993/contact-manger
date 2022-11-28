<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="row">
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
                New Contact added</span
              >
            </q-card-section>

            <q-card-actions align="right" class="q-ma-md">
              <q-btn
                to="/"
                label="Back to home"
                color="primary"
                v-close-popup
              />
              <q-btn
                @click="onReset"
                flat
                label="Add Another Contact"
                color="primary"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </transition>

      <q-card class="my-card col-md-6 q-gutter-md q-pa-md q-ma-md">
        <q-form @submit.prevent="addNewContact">
          <q-input
            filled
            dense
            v-model="name"
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
            v-model="photo"
            label="Photo URL *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            dense
            v-model="mobile"
            type="number"
            label="Mobile *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            dense
            type="email"
            v-model="email"
            label="Your Email *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input dense filled type="number" v-model="age" label="Your age " />
          <q-input
            class="q-pt-md"
            filled
            dense
            v-model="company"
            label="Your Company"
          />
          <q-input dense class="q-pt-md" filled v-model="title" label="title" />
          <q-select
            class="q-pt-md"
            filled
            dense
            v-model="model"
            :options="options"
            label="Select Group"
          />

          <div class="q-pt-md">
            <q-btn label="Add Contact" type="submit" color="primary" />
            <q-btn
              @click="onReset"
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
        <!-- <q-input outlined v-model="text" label="Outlined" /> -->
      </q-card>
      <div class="col-md-4 column justify-center text-center">
        <div class="q-pa-lg">
          <q-img
            :src="photo"
            spinner-color="white"
            style="height: 220px; max-width: 220px; border-radius: 50%"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { usePersonStore } from "../stores/example-store";
import { uid } from "quasar";
import { ref } from "vue";
const personStore = usePersonStore();
const confirm = ref(false);

const name = ref("");
const photo = ref("");
const mobile = ref("");
const email = ref("");
const age = ref("");
const company = ref("");
const title = ref("");
const favs = ref(false);
const model = ref(null);
const options = ref(["Family", "Colleague", "Friend", "Social", "Service"]);

const addNewContact = () => {
  let uniId = uid();

  personStore.addContact({
    id: uniId,
    name: name.value,
    url: photo.value,
    mobile: mobile.value,
    email: email.value,
    age: age.value,
    country: "Egypt",
    company: company.value,
    title: title.value,
    favs: favs.value,
    group: model.value,
  });
  confirm.value = true;
};

const onReset = () => {
  name.value = "";
  photo.value = "";
  mobile.value = "";
  email.value = "";
  age.value = "";
  company.value = "";
  title.value = "";
  model.value = "";
};
</script>

<style lang="scss" scoped></style>
