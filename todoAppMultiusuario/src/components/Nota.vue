<template>
  <li>
    {{ nota.texto }}
    <button @click="$emit('borrar', nota.id)">X</button>
  </li>
</template>

<script>
export default {
  props: {
    nota: Object
  }
}
</script>
