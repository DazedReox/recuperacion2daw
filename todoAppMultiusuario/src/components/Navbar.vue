<template>
  <nav>
    <router-link to="/">Inicio</router-link>

    <router-link v-if="!store.user" to="/login">Login</router-link>
    <router-link v-if="!store.user" to="/registro">Registro</router-link>

    <router-link v-if="store.user" to="/recordatorios">Mis notas</router-link>
    <router-link v-if="store.isAdmin" to="/admin">Admin</router-link>

    <button v-if="store.user" @click="logout">Salir</button>
  </nav>
</template>

<script>
    import { signOut } from 'firebase/auth'
    import { auth } from '../firebase'
    import { store } from '../store'

    export default {
        setup() {
            const logout = async () => {
                await signOut(auth)
                store.clearUser()
                window.location.href = '/'
            }

            return {store, logout}
        }
    }
</script>

<style>
    nav {
        padding: 10px;
        background: #eee;
    }
    
    nav a {
        margin-right: 10px;
    }
</style>
