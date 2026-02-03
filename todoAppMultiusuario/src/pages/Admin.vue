<template>
  <div>
    <h2>Panel de administrador</h2>

    <ul>
      <li v-for="nota in notas" :key="nota.id">
        {{nota.texto}} — <small>{{nota.uid}}</small>
      </li>
    </ul>

    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { store } from '../store'

export default {
  data() {
    return {
      notas: []
    }
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, 'notas'))
    querySnapshot.forEach((docu) => {
      this.notas.push({ id: docu.id, ...docu.data() })
    })
  },
  methods: {
    async logout() {
      await signOut(auth)
      store.clearUser()
      this.$router.push('/')
    }
  }
}
</script>
