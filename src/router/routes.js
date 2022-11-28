const routes = [
  {
    path: "/",

    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/ContactManger.vue"),
      },
      { path: "/AddContact", component: () => import("pages/AddContact.vue") },
      {
        path: "/ShowContact/:contactID",
        component: () => import("pages/ShowContact.vue"),
      },
      {
        path: "/EditContact/:contactID",
        component: () => import("pages/EditContact.vue"),
      },
      {
        path: "/favoritesContacts",
        component: () => import("pages/favoritesContacts.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
