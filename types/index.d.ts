import 'vue'
import '@nuxt/types'

declare class Faker {
  fake: Function
}

declare module '@nuxt/types' {
  interface Context {
    $faker: Faker
  }
  interface NuxtAppOptions {
    $faker: Faker
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $faker: Faker
  }
}
