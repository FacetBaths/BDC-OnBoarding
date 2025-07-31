<script setup>
// No need for setup logic here yet
</script>

<template>
  <div id="app">
    <header class="header">
      <router-link to="/">
        <img
          src="../assets/Logo_v3_hi_res.png"
          alt="Facet Renovations Logo"
          height="60"
        />
      </router-link>
      <h1>Business Development Center Onboarding</h1>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/pay-structure">BDC Pay Structure</router-link></li>
        <li><router-link to="/expectations">Expectations & Responsibilities</router-link></li>
        <li><router-link to="/tools-technology">Tools & Technology</router-link></li>
        <li><router-link to="/interface">Facet Renovations Interface</router-link></li>
      </ul>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p class="tagline">A luxurious look. A cut above.</p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Tomorrow', sans-serif;
  margin: 0 auto;
  padding: 40px;
  max-width: 960px;
}

header img {
  max-width: 100px;
}

h1 {
  color: #9945FF;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #9945FF;
}

.tagline {
  text-align: center;
  font-style: italic;
}
</style>

