<template>
  <div>
    <b-button v-b-modal.modalName-1>Create Meeting</b-button>
    <b-modal
      id="modalName-1"
      ref="modalName-1"
      title="Create Meeting"
      hide-footer
    >
    <b-form>
      <label for="range-1">Booked by:</label>
      <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
      <label for="range-1" class="mt-3">Room:</label>
      <b-form-select :options="rooms" v-model="roomName"></b-form-select>
      <label for="range-1" class="mt-3">Start Time:</label>
      <b-form-select :options="hours" v-model="startTime"></b-form-select>
      <label for="range-1" class="mt-3">End Time:</label>
      <b-form-select :options="hours" v-model="endTime"></b-form-select>
      <div class="d-flex mt-3">
        <b-button class="mt-2 mr-3" block @click="closeModal">Cancel</b-button>
        <b-button class="mt-2" block @click="addMeeting">Add Meeting</b-button>
      </div>
    </b-form>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import RoomResTable from "../components/RoomReservation.vue";
import { EventBus } from "../common/EventBus.js";

export default Vue.extend({
  name: "SelectedTimeSlot",
  props: ["hours", "rooms"],
  data() {
    return {
      name: "",
      roomName: "",
      meetingData: [],
      startTime: "",
      endTime: ""
    }
  },
  mounted() {
   EventBus.$on("openModal", () => {
     this.openModal();
   });
  },
  methods: {
    openModal() {
      this.$refs["modalName-1"].show();
   },
   closeModal() {
      this.$refs["modalName-1"].hide();
   },
   addMeeting() {
     this.meetingData.push({
       "name": this.name,
       "roomName": this.roomName,
       "startTime": this.startTime,
       "endTime": this.endTime
     });
     EventBus.newMeetingData(this.meetingData);
   }
  }
});
</script>

<style>
</style>