<template>
  <div>
    <SelectedTimeSlot :hours="hoursInDay" :rooms="rooms" class="ml-3" />
    <table class="table table-striped table-hover mt-4">
      <thead>
        <tr scope="col">
          <th>Room/Time</th>
          <th v-for="room in rooms" :key="room.id" class="text-center">{{ room }}</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(hour, hour_index) in hoursInDay" :key="hour.id" class="hour">
          <td>{{ hour }}</td>
          <td
            v-for="(room, room_index) in rooms"
            :key="room.id"
            @click="getCellID(hour_index, room_index)"
            class="cell"
          >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SelectedTimeSlot from "../SelectedTimeSlot.vue";
import { EventBus } from "../../common/EventBus.js";

export default {
  name: "RoomResTable",
  components: {
    SelectedTimeSlot
  },
  data() {
    return {
      hoursInDay: [],
      rooms: ["Room 1", "Room 2", "Room 3", "Room 4"],
      meetingInfo: ""
    };
  },
  mounted() {
    this.incrementHours();
    this.displayInfo();
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
    getCellID(hour_index, room_index) {
      // console.log("hi")
      // let selectedHour = this.hoursInDay[hour_index];
      // let selectedRoom = this.rooms[room_index];
      // const index = selectedHour + selectedRoom;
    },
    displayInfo() {
      EventBus.$on("newMeetingData", (meetingData) => {
        console.log(meetingData)
        meetingData.filter(data => {
          if(data.roomName == "Room 1") {
            console.log(data.roomName)
            this.meetingInfo = meetingData;
          }
        })
      });
    }
  }
};
</script>

<style scoped>
.cell:hover {
  background-color: lightblue;
}
</style>