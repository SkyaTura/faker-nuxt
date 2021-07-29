import 'vue'
import '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $faker: any
  }
  interface NuxtAppOptions {
    $faker: any
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $faker: any
  }
}