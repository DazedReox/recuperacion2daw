<template>
  <div class="container">
    <div class="form">
      <h2>Registro</h2>

      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Contraseña" />

      <button @click="registro">Registrarse</button>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { store } from '../store'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async registro() {
      const result = await createUserWithEmailAndPassword(
        auth,
        this.email,
        this.password
      )
      store.setUser(result.user)
      this.$router.push('/recordatorios')
    }
  }
}
</script>
