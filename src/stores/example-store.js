import { defineStore } from "pinia";
import axios from "src/boot/axios";

export const usePersonStore = defineStore("person", {
  state: () => ({
    searchInput: "",
    loading: false,
    person: [
      // {
      //   id: 4555,
      //   name: "ahmeeeed",
      //   email: "ahmeeeed@gmail.com",
      //   url: "https://cdn.quasar.dev/img/parallax2.jpg",
      //   mobile: 1000001111,
      //   age: 25,
      //   country: "Egypt",
      //   company: "algoriza",
      //   title: "front end",
      //   group: 2,
      //   Favs: false,
      // },
    ],
  }),
  getters: {
    searchField() {
      const searchVal = this.searchInput.toLowerCase();
      let searchBox;
      return (searchBox = this.person.filter((i) => {
        if (searchVal == "") {
          return false;
        }
        return i.name.toLowerCase().includes(searchVal);
      }));
    },
    favorites() {
      return this.person.filter((i) => i.Favs == true);
    },
  },
  actions: {
    search() {
      this.searchField;
      // console.log(this.searchBox.length);
      console.log(this.searchField.length);
    },

    // axios dont work
    //  getAllContacts() {
    //   axios
    //     .get("http://localhost:3000/person")
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    async getAllContacts() {
      try {
        this.loading = true;
        const res = await fetch("http://localhost:3000/person");
        const data = await res.json();
        this.person = data;
        this.loading = false;
      } catch (error) {
        console.log("error");
        this.loading = true;

        // leh msh sha8al ?
      }
    },
    async getContact(id) {
      try {
        const res = await fetch("http://localhost:3000/person" + id);
        const data = await res.json();
      } catch (error) {
        console.log("error");
      }
    },
    async addContact(contact) {
      this.person.push(contact);
      const res = await fetch("http://localhost:3000/person", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    async editContact(contact, id) {
      const res = await fetch("http://localhost:3000/person/" + id, {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: { "content-Type": "application/json" },
      });
    },
    async toggleFav(id) {
      const favPerson = this.person.find((i) => i.id == id);
      favPerson.Favs = !favPerson.Favs;
      const res = await fetch("http://localhost:3000/person/" + id, {
        method: "PATCH",
        body: JSON.stringify({ Favs: favPerson.Favs }),
        headers: { "content-Type": "application/json" },
      });
    },
    async deleteItem(id) {
      this.person = this.person.filter((i) => i.id !== id);
      const res = await fetch("http://localhost:3000/person/" + id, {
        method: "DELETE",
      });
    },
  },
});
