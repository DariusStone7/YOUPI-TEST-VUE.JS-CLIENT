<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/userStore'

const user = ref({
  email: '',
  password: ''
})
const router = useRouter()
const errorMessage = ref(false)
const userStore = useUserStore()

const login = () => {
  
    userStore.login(user.value)
    .then((response) => {
      if (response.status == 200) {
        userStore.user.value = response.data.user
        localStorage.setItem('access_token', response.data.token)
        router.push('/tasks')
      } else {
        errorMessage.value = true
      }
    })
    .catch((error) => {
      errorMessage.value = true
      console.log(error)
    })
}
</script>

<template>
  <form method="post" action="" @submit.prevent="login">
    <!-- Email input -->
    <h6 v-if="errorMessage">nom d'utilisateur ou mot de passe incorrect !</h6>
    <br />
    <div class="form-outline mb-4">
      <label class="form-label" for="form2Example1">email :</label>
      <input type="text" id="form2Example1" class="form-control" v-model="user.email" required />
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="form2Example2">Mot de passe :</label>
      <input
        type="password"
        id="form2Example2"
        class="form-control"
        v-model="user.password"
        required
      />
    </div>

    <!-- 2 column grid layout for inline styling -->
    <div class="row mb-4">
      <!-- <div class="col d-flex justify-content-center">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="form2Example31" />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div> -->

      <div class="col">
        <!-- Simple link -->
        <a href="">
          <RouterLink
            to=""
            active-class="active-link"
            class="no-underline"
          >
          mot de passe oublié?
          </RouterLink>
        </a>
      </div>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn mb-4">Sign in</button>
  </form>
</template>


<style scoped>
form {
  max-width: 500px;
  margin: auto;
  margin-top: 10%;
  box-shadow: rgba(2, 2, 2, 0.5) 0px 2px 15px;
  padding: 40px;
}
form input {
  background-color: #e8ecee;
}
form button {
  width: 100%;
  background-color: #032144;
  color: white;
}
form button:hover {
  color: white;
}
form h6 {
  color: red;
}
</style>