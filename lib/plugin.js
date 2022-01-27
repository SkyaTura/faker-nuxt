import $faker from '@faker-js/faker'

export default (ctx, inject) => {
  const options = JSON.parse('<%= options.json %>')

  const { locale, seed } = options

  if (locale) $faker.locale = locale
  if (seed) $faker.seed(seed)

  ctx.$faker = $faker
  ctx.app.$faker = $faker
  inject('faker', $faker)
}
