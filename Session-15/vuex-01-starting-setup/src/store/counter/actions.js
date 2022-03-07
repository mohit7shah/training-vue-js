export default {
  increament(context) {
    setTimeout(function () {
      context.commit('increament');
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    context.commit('increase', payload);
  },
  login() {},
};
