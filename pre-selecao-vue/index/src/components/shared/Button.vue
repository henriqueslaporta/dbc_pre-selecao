<template>
  <button class="btn btn-primary" @click="onClick">{{ texto }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    texto: String,
    onClick: Function
  }
}
</script>
