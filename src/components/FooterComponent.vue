<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-bar-item :link="links.footer.link" classLink="footer__item">
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </nav-bar-item>

            <nav-bar-item
              v-for="link in links.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
              classLink="footer__item"
            >
            </nav-bar-item>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans_logo_dark"
      />
    </div>
  </footer>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";

export default {
  components: { NavBarItem },
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"]
    }
  },
};
</script>