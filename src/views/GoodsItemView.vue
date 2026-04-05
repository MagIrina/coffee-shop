<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big" v-if="product">
          {{ product.name }}
        </h1>
      </div>
    </div>
    <spinner-component v-if="isLoading" />
    <section class="shop" v-if="!isLoading && product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img
              v-if="card"
              class="shop__girl"
              :src="product.image"
              alt="coffee_item"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point" v-if="product.country">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div class="shop__point" v-if="product.description">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price" v-if="card">
                {{ product.price }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import { loadingMixin } from "@/mixins/loadingMixin";

export default {
  components: { NavBarComponent, SpinnerComponent },
  data() {
    return {
      product: null,
    };
  },
  mixins: [loadingMixin],

  async mounted() {
    try {
      this.startLoading();
      const type = this.pageName === "coffee" ? "coffee" : "goods";
      const res = await fetch(
        `http://localhost:3000/${type}/${this.$route.params.id}`
      );
      const data = await res.json();
      // делаем задержка, хоть на пол секунды показать, так как загрузка моментальная
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.product = data;
    } catch (e) {
      console.log(e);
    } finally {
      this.stopLoading();
    }
  },

  destroyed() {
    this.product = null;
  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
    pageName() {
      return this.$route.name;
    },
    card() {
      //   console.log(this.$store.getters["getProductCoffeeById"](this.$route.params.id));
      // сначала попробуем получить coffee, если нет — goods
      const coffee = this.$store.getters["getProductCoffeeById"](
        this.$route.params.id
      );
      if (coffee) return coffee;
      return this.$store.getters["getProductGoodsById"](this.$route.params.id);
    },
  },
};
</script>