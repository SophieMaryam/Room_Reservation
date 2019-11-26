<template>
  <div> 
    <div class="d-flex justify-content-center mt-5 mb-5">
      <button @click="getPreviousDate" class="mr-5">Prev</button>
      <h2> {{ modifiedDate }} </h2>
      <button @click="getTomorrowsDate" class="ml-5">Next</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Date",
  mounted() {
    this.modifiedDate = this.modifyDate(this.date);
  },
  data() {
    return {
      date: new Date(),
      modifiedDate: ""
    }
  },
  methods: {
    modifyDate(date) {
      const year = date.getFullYear();
      let months = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let day = date.getDate().toFixed();
      const modifiedDate = months[date.getMonth()] + " " + day + ", " + year;
      return modifiedDate;
    },
    getTomorrowsDate() {
      this.date.setDate(this.date.getDate() + 1);
      const tomorrowsDate = new Date(this.date);
      this.modifiedDate = this.modifyDate(tomorrowsDate);
    },
    getPreviousDate() {
      this.date.setDate(this.date.getDate() - 1);
      const previousDate = new Date(this.date);
      this.modifiedDate = this.modifyDate(previousDate);
    }
  }
};
</script>

