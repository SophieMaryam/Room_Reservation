<template>
  <div>
    <h1 class="text-center mt-5"> Team Rockstar Room Reservation </h1>
    <Date />
    <RoomResTable />
  </div>
</template>

<script>
import Vue from "vue";
import Date from "./Date/Date.vue";
import RoomResTable from "./RoomResTable/RoomResTable.vue";

export default Vue.extend({
  name: "RoomReservation",
  components: {
    Date,
    RoomResTable
  }
});
</script>

<style>

</style>
