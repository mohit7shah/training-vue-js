const app = Vue.createApp({
  data() {
    return {
      yourname: "Mohit",
      age: 20,
      number: Math.random(),
      name: "",
      vlink:
        "https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
    };
  },
});

app.mount("#assignment");
