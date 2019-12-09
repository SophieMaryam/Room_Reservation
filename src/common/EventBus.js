  
import Vue from "vue";

export const EventBus = new Vue({
  methods: {
    openModal(index) {
      this.$emit('openModal', index)
    },
    newMeetingData(meetingData) {
      this.$emit('newMeetingData', meetingData)
    }
  }
});