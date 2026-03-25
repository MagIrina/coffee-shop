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
        :src="require(`@/assets/logo/${links.footer_img.icon}`)"
        :alt="links.footer_img.icon"
      />
    </div>
  </footer>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
export default {
  components: { NavBarItem },
  data() {
    return {
      links: {
        footer: {
          id: 0,
          link: "/",
          icon: "Logo_black.svg",
        },
        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "/for-your",
          },
          {
            id: 3,
            text: "Contact us",
            link: "/contact",
          },
        ],
        footer_img: {
          id: 4,
          icon: "Beans_logo_dark.svg",
        },
      },
    };
  },
};
</script>