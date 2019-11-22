import Vue from "vue";
import Router from "vue-router";
import RoomReservation from "../components/RoomReservation.vue";
import RoomColumn from "../components/RoomColumn.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/2",
      name: "RoomReservation",
      component: RoomReservation
    }, 
    {
      path: "/3",
      name: "RoomColumn",
      component: RoomColumn
    }
  ]
});