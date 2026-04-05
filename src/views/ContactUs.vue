<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <spinner-component v-if="isLoading" />
    <section class="contacts" v-else>
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="sumbit()" action="/" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span
                    v-for="error in v$.name.$errors"
                    :key="error.$uid"
                    style="color: red; font-size: 0.7em"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.email.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span
                    v-for="error in v$.email.$errors"
                    :key="error.$uid"
                    style="color: red; font-size: 0.7em"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.phone.$model"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                  <span
                    v-for="error in v$.phone.$errors"
                    :key="error.$uid"
                    style="color: red; font-size: 0.7em"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.message.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span
                    v-for="error in v$.message.$errors"
                    :key="error.$uid"
                    style="color: red; font-size: 0.7em"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!-- <pre>
                    {{ v$.message }}
                </pre> -->
              </div>

              <div class="form-group row">
                <div class="col">
                  <div class="form-check d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center">
                      <input
                        v-model="v$.checkbox.$model"
                        class="form-check-input"
                        type="checkbox"
                        id="checkbox"
                      />
                      <label class="form-check-label ms-2 mt-1" for="checkbox">
                        Согласен с договором оферты
                      </label>
                    </div>
                    <div>
                      <span
                        v-for="error in v$.checkbox.$errors"
                        :key="error.$uid"
                        style="color: red; font-size: 0.8em"
                      >
                        {{ error.$message }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div v-if="showToast" class="toast">Форма отправлена ✅</div>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLength } from "@/validators/minLength";
import { isChecked } from "@/validators/isChecked";
import { loadingMixin } from "@/mixins/loadingMixin";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

export default {
  components: { NavBarComponent, ProductCardComponent, SpinnerComponent },
  computed: {
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      checkbox: true,
      showToast: false,
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: {},
      message: {
        required,
        maxLength: maxLength(20),
        minLength: helpers.withMessage("this value min 5", minLength),
      },
      checkbox: {
        required,
        isChecked: helpers.withMessage("Обязательное согласие", isChecked),
      },
    };
  },
  mixins: [loadingMixin],
  methods: {
    async sumbit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      const message = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        checkbox: this.checkbox,
      };

      try {
        this.startLoading();

        await fetch("http://localhost:3000/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
        this.name = "";
        this.email = "";
        this.phone = "";
        this.message = "";
        this.checkbox = true;

        this.v$.$reset();
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      } finally {
        this.stopLoading();
      }
    },
  },
};
</script>