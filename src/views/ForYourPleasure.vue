<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <spinner-component v-if="isLoading" />
    <section class="shop" v-else>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card-component
                v-for="product in goods"
                :key="product.id"
                classItem="shop__item"
                :card="product"
                @onNavigate="navigate"
              />
              <!-- слушатель @onNavigate="navigate" (отслушиваем событие, в данном случаи клика метода навигейт) -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import { loadingMixin } from "@/mixins/loadingMixin";
import { navigate } from "@/mixins/navigate";

export default {
  components: { NavBarComponent, ProductCardComponent, SpinnerComponent },
  computed: {
    goods() {
      return this.$store.getters["getGoods"];
    },
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
  },
  data() {
    return {
      name: "goods",
    };
  },
  mixins: [navigate, loadingMixin],
  async mounted() {
    try {
      this.startLoading();
      const res = await fetch("http://localhost:3000/goods");
      const data = await res.json();
      this.$store.dispatch("setGoodsData", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (e) {
      console.log(e);
    } finally {
      this.stopLoading();
    }
  },
};
</script>