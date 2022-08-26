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
  text-transform: uppercase;
  background: black;
  color: #ffffff;
  border-radius: 0.1rem;
  border: none;
  letter-spacing: 0.15em;
}

button:hover {
  //cursor: pointer;
  background: rgba(0,136,169,0.8);
}
</style>
