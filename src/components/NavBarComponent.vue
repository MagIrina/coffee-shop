<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-bar-item :link="links.header.link" classLink="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </nav-bar-item>

      <nav-bar-item
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        classLink="header__item"
      >
      </nav-bar-item>
    </ul>
  </header>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";

export default {
  components: { NavBarItem },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"]
    }
  }
};
</script>