const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitform(event) {
      //event.preventDefault();
      alert("submitted");
    },
    setname(event, secondName) {
      this.name = event.target.value + " " + secondName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
