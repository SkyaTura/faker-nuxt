# faker-nuxt

> [Faker](https://www.npmjs.com/package/@faker-js/faker) wrapper for [Nuxt.js](https://nuxtjs.org/)

[![version](https://img.shields.io/npm/v/faker-nuxt?label=faker-nuxt)](https://www.npmjs.com/package/faker-nuxt)
[![npm (scoped)](https://img.shields.io/npm/v/@faker-js/faker?label=@faker-js/faker)](https://www.npmjs.com/package/@faker-js/faker)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/faker-nuxt)
![node-current (scoped)](https://img.shields.io/node/v/@faker-js/faker)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/faker-nuxt)
[![gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://gitmoji.dev)

## Features

- Inject `$faker` to the context everywhere.

## Setup

1. Add `faker-nuxt` dependency to your project

```bash
npm install --save-dev faker-nuxt # or yarn add --dev faker-nuxt
```

2. Add `faker-nuxt` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    // Simple usage
    'faker-nuxt',

    // With options
    ['faker-nuxt', { /* module options */ }]
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

### Using top level options

```js
export default {
  buildModules: [
    'faker-nuxt'
  ],
  faker: {
    /* module options */
  }
}
```

## Configuration

### Set default locale

You can set a default locale via the `locale` option.

```js
export default {
  buildModules: [
    'faker-nuxt'
  ],
  faker: {
    locale: 'pt_BR',
  }
}
```

### Set default seed

You can set a default seed via the `seed` option.

```js
export default {
  buildModules: [
    'faker-nuxt'
  ],
  faker: {
    seed: 'Banana123',
  }
}
```

## Usage

### Using inside templates

```html
<div>{{ $faker.lorem.word() }}</div>
<div v-text="$faker.lorem.words()"></div>
```

### Using inside scripts

```html
<script>
  export default {
    data() {
      return {
        name: this.$faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}')
      }
    }
  }
</script>
```
