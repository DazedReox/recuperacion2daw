import { reactive } from 'vue';

export const store = reactive({
  user: null,
  isAdmin: false,

  setUser(user) {
    this.user = user;
    this.isAdmin = user?.email === 'reox.jai@gmail.com';
  },

  clearUser() {
    this.user = null;
    this.isAdmin = false;
  }
})
