<template>
  <b-col>
      <b-row v-for="hour in hoursInDay" :key="hour.id" :room="room">{{ hour }} </b-row>
  </b-col>
</template>

<script>
export default {
    name: "RoomColumn",
     data() {
    return {
      hoursInDay: [],
      rooms: ["#", "Room 1", "Room 2", "Room 3", "Room 4", ]
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
    selectedTime(room) {
      console.log(room)
    }
  }
};
</script>

<style>

</style>