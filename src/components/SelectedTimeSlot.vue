<template>  
<div>
  <b-button v-b-modal.modal-1> open</b-button>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
</template>

<script>
import { BModal, VBModal } from 'bootstrap-vue'

export default {
  name: "SelectedTimeSlot",
  components: { BModal },
  directives: { 'b-modal': VBModal },
  data() {
    return {
      meetingSpace: ""
    };
  },
  methods: {
      hideModal() {
        this.$refs['my-modal'].hide()
      },
  }
  // computed: {
  //   modalName() {
  //     // const selectedTimeSlot = this.room + this.hour
  //     // return value;
  //   }
  // }
};
</script>

<style>
</style>