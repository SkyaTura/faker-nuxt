import Faker from "@faker-js/faker";

declare module "vue/types/vue" {
  interface Vue {
    $faker: Faker;
  }
}

declare module "@nuxt/types" {
  // nuxtContext.app.$myInjectedFunction dentro de asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $faker: Faker;
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $faker: Faker;
  }
}

declare module "vuex/types/index" {
  // this.$myInjectedFunction dentro de stores Vuex
  interface Store<S> {
    $faker: Faker;
  }
}
