<template>
    <div class="vue-modal">
        <div class="vue-modal-inner">
            <div class="vue-modal-content">
                <slot></slot>
                <p>{{ message }}</p>
                <MyButton type="button" @click="$emit('close')" title="Close" />
            </div>
    </div>
</div>
</template>

<script>
import MyButton from '../atoms/MyButton.vue';
export default {
    components: { MyButton },
    props:{
      message: {
        type: String,
        required: true,
      }
    }
};
</script>

<style scoped lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}
</style>