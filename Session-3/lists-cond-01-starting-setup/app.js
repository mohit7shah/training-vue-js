const app = Vue.createApp({
  data() {
    return {
      entergoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entergoal);
    },
    removegoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
