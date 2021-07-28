import { Nuxt, Builder } from 'nuxt-edge'
import { config } from './nuxt.config'

let nuxt
const host = 3030
const port = 3030

const url = (path) => `http://${host}:${port}${path}`

/**
 * @jest-environment jsdom
 */
describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt({ ...config, server: { port } })

    await new Builder(nuxt).build()
    await nuxt.server.listen(port, host)
  }, 300000)

  test('init', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    window.onNuxtReady(() => {
      const { $faker } = window.$nuxt
      expect($faker).toBeDefined()
    })
  })

  test('faked uuid', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    window.onNuxtReady(() => {
      const uuid = window.document.querySelector('#uuid')
      expect(uuid).toEqual(expect.stringMatching(/[0-9a-f]{8}-[0-9a-f]{3}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[89ab][0-9a-f]{12}/))
    })
  })

  afterAll(async () => {
    await nuxt.close()
  })
})
