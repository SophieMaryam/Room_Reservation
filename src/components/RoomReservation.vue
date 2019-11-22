<template>
  <div>
    <Date />
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <table class="table table-striped table-hover">
      <thead>
        <tr scope="col">
          <th>Room/Time</th>
          <th v-for="room in rooms" :key="room.id">{{ room }}</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(hour, hour_index) in hoursInDay" :key="hour.id" class="hour">
          <td>{{ hour }}</td>
          <td
            v-for="(room, room_index) in rooms"
            :key="room.id"
            @click="getHeaderAndRowName(hour_index, room_index)" class="cell"
          >
            <SelectedTimeSlot v-if="openModal" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Date from "./Date/Date.vue";
import SelectedTimeSlot from "./SelectedTimeSlot.vue";
import { BModal, VBModal } from "bootstrap-vue";

export default {
  name: "RoomReservation",
  components: {
    Date,
    SelectedTimeSlot,
    BModal
  },
  directives: { "b-modal": VBModal },
  data() {
    return {
      hoursInDay: [],
      rooms: ["Room 1", "Room 2", "Room 3", "Room 4"],
      open: false
    };
  },
  mounted() {
    this.incrementHours();
  },
  methods: {
    incrementHours() {
      var quarterHours = ["00", "30"];
      var times = [];
      for (var i = 0; i < 24; i++) {
        for (var j = 0; j < 2; j++) {
          var time = i + ":" + quarterHours[j];
          if (i < 10) {
            time = "0" + time;
          }
          times.push(time);
        }
      }
      this.hoursInDay = times;
    },
    getHeaderAndRowName(hour_index, room_index) {
      let selectedHour = this.hoursInDay[hour_index];
      let selectedRoom = this.rooms[room_index];
      this.openModal();
    },
    openModal() {
      this.open = true;
      console.log(this.open);
    }
  }
};
</script>

<style>

.cell:hover {
  background-color: lightblue;
}
</style>
