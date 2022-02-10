const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      //fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 100);
      }
    },
    // 100 shows the time break to set 0 in counter

    /*name(value) {
      if (this.name === "") {
        this.fullname = " ";
      } else {
        this.fullname = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (this.name === "") {
        this.fullname = " ";
      } else {
        this.fullname = this.name + " " + value;
      }
    },*/
  },
  // dependency is required in the computed part.
  computed: {
    fullname() {
      console.log("this only print if you write input in the feature.");
      if (this.name === "" || this.lastname === "") {
        return " ";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    //outputfullname() {},
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
