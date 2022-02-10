const app = Vue.createApp({
  data() {
    return {
      //RESULT: 0,
      result: 0,
    };
  },
  watch: {
    RESULT() {
      if (this.result === 37) {
        const that = this;
        setTimeout(function () {
          that.result = 0;
        }, 05);
      }
    },
  },
  computed: {
    RESULT() {
      console.log("running  " + this.result);
      if (this.result > 37) {
        return "Too much";
      } else if (this.result < 37) {
        return "Not there yet";
      }
    },
  },
  methods: {
    add(num) {
      this.result = this.result + num;
    },
  },
});

app.mount("#assignment");
