<template>
  <div>
    <b-button v-b-modal="modalName">Open</b-button>
    <b-modal
      size="lg"
      :id="modalName"
      :ref="modalName"
      title="Create Meeting"
    >
      <label for="range-1">Booked by:</label>
      <b-form-input  placeholder="Enter your name"></b-form-input>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import RoomResTable from "../components/RoomReservation.vue"

export default Vue.extend({
  name: "SelectedTimeSlot",
  props: ["id"],
  methods: {
    closeModal() {
      this.$refs[this.modalName].hide();
    }
  },
  computed: {
    modalName() {
      console.log(this.id);
      const { selectedHour, selectedRoom } = this.id;
      // console.log(selectedHour);
      return `${selectedRoom}@${selectedHour}`;
    }
  }
});
</script>

<style>
</style>