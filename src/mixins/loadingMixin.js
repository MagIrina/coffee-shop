export const loadingMixin = {
  methods: {
    startLoading() {
      this.$store.commit('setLoading', true);
    },
    stopLoading() {
      this.$store.commit('setLoading', false);
    }
  }
};