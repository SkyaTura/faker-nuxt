<template>
  <div>
    <p id="uuid">
      {{ $faker.datatype.uuid }}
    </p>
    <p id="number">
      {{ number }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: this.$faker.datatype.number,
    }
  },
}
</script>
