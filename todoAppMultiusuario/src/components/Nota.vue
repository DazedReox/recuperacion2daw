<template>
  <div class="nota">
    <span>{{ nota.texto }}</span>
    <button @click="$emit('borrar', nota.id)">Eliminar</button>
</div>

</template>

<script>
export default {
  props: {
    nota: Object
  }
}
</script>
