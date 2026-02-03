<template>
  <div>
    <h1>App de Recordatorios</h1>
    <p>Organiza tus notas de forma sencilla.</p>

    <div>
      <router-link to="/login">
        <button>Iniciar sesión</button>
      </router-link>

      <router-link to="/registro">
        <button>Registrarse</button>
      </router-link>
    </div>
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
