<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      FriendContact: [
        {
          id: "mohit",
          name: "Mohit",
          phone: "0123456789",
          email: "hello@gmail.com",
        },
        {
          id: "raj",
          name: "Raj",
          phone: "01123456789",
          email: "rajs@gmail.com",
        },
      ],
    };
  },
};
</script>
