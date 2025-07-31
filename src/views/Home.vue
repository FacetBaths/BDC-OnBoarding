<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img
          max-width="800px"
          width="100%"
          height="auto"
          :src="logoUrl"
          alt="Facet Renovations Logo"
        />
      </div>
    </div>
    <h1>Business Development Center On Boarding</h1>
    <h2>WHAT'S INSIDE:</h2>
    <ul class="cover-page">
      <li>Current BDC Pay Structure</li>
      <li>Expectations & Responsibilities (including BDC WordTrax and Appointment Checklist)</li>
      <li>Tools & Technology</li>
      <li>IRS Form - W9</li>
      <li>Facet Renovations Interface Card</li>
    </ul>
    <div class="tagline">A luxurious look. A cut above.</div>
  </div>
</template>

<script setup>
import logoImage from '/assets/Logo_v3_hi_res.png'

const logoUrl = logoImage
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.home {
  font-family: 'Tomorrow', sans-serif;
  color: #7C7C7C;
  margin: 0 auto;
  padding: 40px;
  line-height: 1.6;
  background-color: #ffffff;
  max-width: 900px;
}

.header {
  text-align: center;
  max-width: 800px;
  width: 80%;
  margin: 0 auto 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 5px 1.5px #14F195, 0 -.5px 3px 2px #9945FF;
}

.logo {
  display: flex;
  height: auto;
  background-size: contain;
  background-position: center;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.logo img {
  flex: 0 0 100%;
}

h1 {
  font-size: 28px;
  color: #9945FF;
  margin-bottom: 40px;
  font-weight: 600;
  text-align: center;
}

h2 {
  font-size: 28px;
  color: #9945FF;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

ul {
  max-width: 800px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
}

.cover-page ul {
  list-style-type: none;
  margin-left: 0;
}

.cover-page li,
li {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #F9F9F9;
  border-left: 5px solid #14F195;
  border-radius: 5px;
  transition: transform 0.2s, box-shadow 0.2s;
  font-weight: 400;
}

li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tagline {
  font-style: italic;
  text-align: center;
  margin-top: 30px;
  color: #14F195;
  font-size: 18px;
  padding: 10px;
  background-color: #E6F7EF;
  border-radius: 5px;
  font-weight: 600;
}
</style>
