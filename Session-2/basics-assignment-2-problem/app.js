const app = Vue.createApp({
  data() {
    return {
      name: "",
      secondName: "",
      entername: "",
    };
  },
  methods: {
    secondname() {
      this.secondName = event.target.value;
    },
    enterinput() {
      this.entername = this.secondName;
    },
    inputname() {
      this.name = event.target.value;
    },
    submitform(event) {
      //event.preventDefault();
      alert("Done Task");
    },
  },
});

app.mount("#assignment");
