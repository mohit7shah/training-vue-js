const app = Vue.createApp({
  data() {
    return {
      colorchange: "",

      logs: [
        {
          date: "04-02-22",
          day: "Friday",
          sections: "1",
          repo: "https://github.com/",
          progress: "100",
          topics: ["Introduction", "What is vue"],
        },

        {
          date: "07-02-22",
          day: "Monday",
          sections: "2",
          repo: "https://github.com/",
          progress: "100",
          topics: ["Overview", "Lifecycle", "Directives"],
        },
      ],
    };
  },
  methods: {
    Topiccolor() {
      const size = 0;
      this.logs.forEach((val) => {
        if (val.topics.length > size) {
          size = val.topics.length;
        }
      });
      return size;
    },
  },
});

app.mount("#application");
