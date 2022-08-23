<template>
  <button :type="type" @click.prevent="click" :disabled="disabled">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: null,
    },
    click: {
      type: Function,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
button {
  padding: 0.5rem 1.3rem;
  margin: 1rem 0;
  text-transform: uppercase;
  background: #a50909;
  color: #ffffff;
  border-radius: 0.1rem;
  border: none;
  letter-spacing: 0.15em;
}

button:hover {
  //cursor: pointer;
  background: #8d1919;
}
</style>
