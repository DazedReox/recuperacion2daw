<template>
  <div class="container">
    <h2>Mis recordatorios</h2>

    <input v-model="texto" placeholder="Nueva nota" />
    <button @click="addNota">Añadir</button>

    <ul>
      <Nota
        v-for="nota in notas"
        :key="nota.id"
        :nota="nota"
        @borrar="borrarNota"
      />
    </ul>

    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { store } from '../store';
import Nota from '../components/Nota.vue';

export default {
  components: {
    Nota
  },
  data() {
    return {
      texto: '',
      notas: []
    }
  },
  mounted() {
    this.cargarNotas()
  },
  methods: {
    async cargarNotas() {
      this.notas = []
      const querySnapshot = await getDocs(collection(db, 'notas'))

      querySnapshot.forEach((docu) => {
        const nota = { id: docu.id, ...docu.data() }

        if (store.isAdmin) {
          this.notas.push(nota)
        } else if (nota.uid === auth.currentUser.uid) {
          this.notas.push(nota)
        }
      })
    },
    async addNota() {
      if (this.texto === '') return

      await addDoc(collection(db, 'notas'), {
        texto: this.texto,
        uid: auth.currentUser.uid
      })

      this.texto = ''
      this.cargarNotas()
    },
    async borrarNota(id) {
      await deleteDoc(doc(db, 'notas', id))
      this.cargarNotas()
    },
    async logout() {
      await signOut(auth)
      store.clearUser()
      this.$router.push('/')
    }
  }
}
</script>
