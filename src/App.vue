<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const menuItems = [
  {
    title: 'Home',
    icon: 'fas fa-home',
    route: '/'
  },
  {
    title: 'Pay Structure',
    icon: 'fas fa-dollar-sign',
    route: '/pay-structure'
  },
  {
    title: 'Expectations & Responsibilities',
    icon: 'fas fa-tasks',
    route: '/expectations'
  },
  {
    title: 'Tools & Technology',
    icon: 'fas fa-tools',
    route: '/tools-technology'
  },
  {
    title: 'Interface',
    icon: 'fas fa-address-book',
    route: '/interface'
  }
]

const trainingItems = [
  {
    title: 'BDC WordTrax',
    icon: 'fas fa-comments',
    route: '/training/bdc-wordtrax'
  },
  {
    title: 'Appointment Checklist',
    icon: 'fas fa-clipboard-check',
    route: '/training/appt-checklist'
  }
]
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row items-center">
          <q-avatar size="40px" class="q-mr-sm">
            <img src="/assets/Logo_v3_hi_res.png" alt="Facet Renovations Logo" />
          </q-avatar>
          <span class="text-h6">BDC Onboarding</span>
        </q-toolbar-title>

        <q-space />

        <div class="text-caption q-mr-sm">
          Facet Renovations
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-primary text-weight-bold">
          Onboarding
        </q-item-label>

        <q-item
          v-for="item in menuItems"
          :key="item.route"
          :to="item.route"
          clickable
          v-ripple
          class="menu-item"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" color="primary" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item-label header class="text-secondary text-weight-bold">
          <q-icon name="fas fa-graduation-cap" class="q-mr-sm" />
          Training Resources
        </q-item-label>

        <q-item
          v-for="item in trainingItems"
          :key="item.route"
          :to="item.route"
          clickable
          v-ripple
          class="menu-item training-item"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" color="secondary" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator class="q-my-md" />

      <div class="q-pa-md text-center">
        <q-img
          src="/assets/Logo_v3_hi_res.png"
          style="height: 60px; max-width: 150px"
          fit="contain"
        />
        <div class="text-caption text-grey-6 q-mt-xs">
          A luxurious look. A cut above.
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <div class="page-content">
        <router-view />
      </div>
    </q-page-container>

    <q-footer class="bg-secondary text-primary">
      <q-toolbar class="justify-center">
        <q-toolbar-title class="text-center">
          <div class="text-weight-medium">
            A luxurious look. A cut above.
          </div>
          <div class="text-caption">
            © {{ new Date().getFullYear() }} Facet Renovations
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')

.q-layout
  font-family: 'Tomorrow', sans-serif !important

.page-content
  padding: 20px
  max-width: 1200px
  margin: 0 auto

.menu-item
  border-radius: 8px
  margin: 4px 8px
  transition: all 0.3s ease
  
  &:hover
    background-color: rgba(153, 69, 255, 0.1)
    transform: translateX(4px)

.training-item
  &:hover
    background-color: rgba(20, 241, 149, 0.1)

.q-header
  box-shadow: 0 2px 8px rgba(153, 69, 255, 0.3)

.q-drawer
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1)

.q-footer
  box-shadow: 0 -2px 8px rgba(20, 241, 149, 0.2)
</style>

