const app = Vue.createApp({
  data() {
    return {
      enterrs: "",
      resourse: [],
      resoursepresent: true,
    };
  },
  methods: {
    addresourse() {
      this.resourse.push(this.enterrs);
    },
    changelook() {
      this.resoursepresent = !this.resoursepresent;
    },
  },
});

app.mount("#assignment");
