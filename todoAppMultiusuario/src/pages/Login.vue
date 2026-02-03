<template>
  <div>
    <h2>Login</h2>

    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Contraseña" />

    <button @click="login">Entrar</button>
    <button @click="loginGoogle">Entrar con Google</button>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'
import { store } from '../store'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const result = await signInWithEmailAndPassword(
        auth,
        this.email,
        this.password
      )
      store.setUser(result.user)
      this.$router.push('/recordatorios')
    },
    async loginGoogle() {
      const result = await signInWithPopup(auth, googleProvider)
      store.setUser(result.user)
      this.$router.push('/recordatorios')
    }
  }
}
</script>
