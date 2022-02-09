const app = Vue.createApp({
  data: () => {
    return {
      couseGoalA: "Finish the course",
      couseGoalB: "Master the course",
      vuelink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.couseGoalA;
      } else {
        return this.couseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
// vue is having declarative approach.
