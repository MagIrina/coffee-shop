export const navigate = {
    methods: {
    navigate(id) {
      //   this.$router.push("/our-coffee/item");
      this.$router.push({name: this.name, params: {id: id}});
    },
  },
}