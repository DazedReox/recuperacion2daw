<template>
  <div class="landing">
    <h1>Recordatorios</h1>
    <p>Organiza tus notas de forma sencilla y segura</p>
    <router-link to="/login">
      <button>Entrar</button>
    </router-link>
    <router-link to="/registro">
      <button class="secondary">Registrarse</button>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'Landing'
}
</script>

<style>
div {
  text-align: center;
  margin-top: 50px;
}

button {
  margin: 10px;
  padding: 10px 20px;
}
</style>
