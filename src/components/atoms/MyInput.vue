<template>
  <div class="my-input">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :placeholder="label"
      :name="id"
      :id="id"
      required
      :autocomplete="autocomplete"
      :value="modelValue"
      :maxlength="maxlength"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      required: false,
    },
    maxlength: {
      type: String,
      required: false,
    },
    modelValue: String,
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.my-input {
  display: flex;
  flex-flow: column;
  margin: 1rem 0;

  label {
    padding-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    width: 15rem;
  }
}
</style>
