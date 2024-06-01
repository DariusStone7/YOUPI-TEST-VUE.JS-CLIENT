<script setup>
import { RouterView, RouterLink} from 'vue-router';
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hello</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/tasks" class="nav-link">Taches</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
    <div class="content mt-3">
        <div class="head text-center mt-5">
            <h3>Test YOUPI</h3>
        </div>
        <RouterView/>
    </div>
    <footer>
        &copy; YOUPI
    </footer>
</template>

<style scoped>
.content{
    min-height: 100vh;
}
</style>