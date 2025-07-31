<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PasswordProtection from "./components/PasswordProtection.vue";

const router = useRouter();

const leftDrawerOpen = ref(false);
const isAuthenticated = ref(false);

// Check authentication status on app load
const checkAuthStatus = () => {
  const authStatus = localStorage.getItem("bdcAuthenticated");
  const authTime = localStorage.getItem("bdcAuthTime");

  if (authStatus === "true" && authTime) {
    // Optional: Add session timeout (24 hours)
    const timeElapsed = Date.now() - parseInt(authTime);
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (timeElapsed < twentyFourHours) {
      isAuthenticated.value = true;
    } else {
      // Session expired, clear storage
      localStorage.removeItem("bdcAuthenticated");
      localStorage.removeItem("bdcAuthTime");
    }
  }
};

// Handle successful authentication
const handleAuthentication = () => {
  isAuthenticated.value = true;
};

// Handle logout
const logout = () => {
  localStorage.removeItem("bdcAuthenticated");
  localStorage.removeItem("bdcAuthTime");
  isAuthenticated.value = false;
};

// Initialize auth check on component mount
onMounted(() => {
  checkAuthStatus();
});

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

// Navigation functions
const goHome = () => {
  router.push("/");
};

const goToPrevious = () => {
  const currentIndex = getCurrentRouteIndex();
  if (currentIndex > 0) {
    const prevRoute = getAllRoutes()[currentIndex - 1];
    router.push(prevRoute.route);
  }
};

const goToNext = () => {
  const currentIndex = getCurrentRouteIndex();
  const routes = getAllRoutes();
  if (currentIndex < routes.length - 1) {
    const nextRoute = routes[currentIndex + 1];
    router.push(nextRoute.route);
  }
};

const getAllRoutes = () => {
  return [...menuItems, ...trainingItems];
};

const getCurrentRouteIndex = () => {
  const routes = getAllRoutes();
  const currentPath = router.currentRoute.value.path;
  return routes.findIndex((route) => route.route === currentPath);
};

const menuItems = [
  {
    title: "Home",
    icon: "fas fa-home",
    route: "/",
  },
  {
    title: "Pay Structure",
    icon: "fas fa-dollar-sign",
    route: "/pay-structure",
  },
  {
    title: "Expectations & Responsibilities",
    icon: "fas fa-tasks",
    route: "/expectations",
  },
  {
    title: "Tools & Technology",
    icon: "fas fa-tools",
    route: "/tools-technology",
  },
  {
    title: "Interface",
    icon: "fas fa-address-book",
    route: "/interface",
  },
];

const trainingItems = [
  {
    title: "BDC WordTrax",
    icon: "fas fa-comments",
    route: "/training/bdc-wordtrax",
  },
  {
    title: "Appointment Checklist",
    icon: "fas fa-clipboard-check",
    route: "/training/appt-checklist",
  },
];
</script>

<template>
  <!-- Show password protection if not authenticated -->
  <PasswordProtection
    v-if="!isAuthenticated"
    @authenticated="handleAuthentication"
  />

  <!-- Show main app if authenticated -->
  <q-layout v-else view="lHh Lpr lFf" class="modern-layout">
    <!-- Modern Header -->
    <q-header class="modern-header">
      <q-toolbar class="toolbar-container">
        <q-btn flat round class="menu-toggle" @click="toggleLeftDrawer">
          <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </q-btn>

        <div class="header-brand">
          <q-avatar size="36px" class="brand-logo">
            <img src="/assets/Logo_DO.png" alt="Facet Renovations" />
          </q-avatar>
          <div class="brand-text">
            <div class="brand-title">BDC Onboarding</div>
            <div class="brand-subtitle">Facet Renovations</div>
          </div>
        </div>

        <q-space />

        <div class="header-actions">
          <q-btn flat round class="logout-btn" @click="logout">
            <div class="logout-icon">⏻</div>
            <q-tooltip>Logout</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Modern Sidebar -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="modern-drawer"
      :width="280"
    >
      <div class="drawer-content">
        <!-- Navigation Header -->
        <div class="nav-header">
          <div class="nav-title">Navigation</div>
        </div>

        <!-- Main Navigation -->
        <div class="nav-section">
          <div class="nav-section-title">Onboarding</div>
          <nav class="nav-menu">
            <router-link
              v-for="item in menuItems"
              :key="item.route"
              :to="item.route"
              class="nav-item"
              active-class="nav-item--active"
            >
              <i :class="item.icon" class="nav-icon"></i>
              <span class="nav-label">{{ item.title }}</span>
            </router-link>
          </nav>
        </div>

        <!-- Training Section -->
        <div class="nav-section">
          <div class="nav-section-title">
            <i class="fas fa-graduation-cap nav-section-icon"></i>
            Training Resources
          </div>
          <nav class="nav-menu">
            <router-link
              v-for="item in trainingItems"
              :key="item.route"
              :to="item.route"
              class="nav-item training-nav-item"
              active-class="nav-item--active"
            >
              <i :class="item.icon" class="nav-icon"></i>
              <span class="nav-label">{{ item.title }}</span>
            </router-link>
          </nav>
        </div>

        <!-- Sidebar Footer -->
        <div class="drawer-footer">
          <div class="footer-logo">
            <q-img
              src="/assets/Logo_v3_hi_res.png"
              class="footer-brand"
              fit="contain"
            />
          </div>
          <div class="footer-tagline">A luxurious look. A cut above.</div>
        </div>
      </div>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container class="modern-content">
      <div class="content-wrapper">
        <router-view />
      </div>

      <!-- Persistent Navigation Controls -->
      <div class="nav-controls">
        <q-btn round class="nav-control-btn home-btn" @click="goHome">
          <div class="nav-icon">🏠</div>
          <q-tooltip>Home</q-tooltip>
        </q-btn>

        <q-btn round class="nav-control-btn prev-btn" @click="goToPrevious">
          <div class="nav-icon">‹</div>
          <q-tooltip>Previous</q-tooltip>
        </q-btn>

        <q-btn round class="nav-control-btn next-btn" @click="goToNext">
          <div class="nav-icon">›</div>
          <q-tooltip>Next</q-tooltip>
        </q-btn>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap')

// Global Layout
.modern-layout
  font-family: 'Tomorrow', sans-serif !important
  background: #fafbfc

// Modern Header
.modern-header
  background: rgba(255, 255, 255, 0.98)
  backdrop-filter: blur(20px)
  -webkit-backdrop-filter: blur(20px)
  border-bottom: 1px solid rgba(0, 0, 0, 0.08)
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08)

.toolbar-container
  padding: 0 1.5rem
  height: 70px
  max-width: none

.menu-toggle
  color: #334155
  transition: all 0.2s ease

  &:hover
    color: #9945FF
    background: rgba(153, 69, 255, 0.1)

.header-brand
  display: flex
  align-items: center
  gap: 0.75rem

.brand-logo
  border-radius: 8px
  overflow: hidden
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)

.brand-text
  display: flex
  flex-direction: column

.brand-title
  font-size: 1.125rem
  font-weight: 700
  color: #0f172a
  line-height: 1.2

.brand-subtitle
  font-size: 0.875rem
  color: #475569
  font-weight: 600

.header-actions
  display: flex
  align-items: center
  gap: 0.5rem

.logout-btn
  color: #475569
  transition: all 0.2s ease

  &:hover
    color: #ef4444
    background: rgba(239, 68, 68, 0.1)

// Hamburger Menu Icon
.hamburger-icon
  display: flex
  flex-direction: column
  gap: 3px
  width: 20px
  height: 16px

  span
    display: block
    height: 2px
    width: 100%
    background: currentColor
    border-radius: 1px
    transition: all 0.3s ease

// Logout Icon
.logout-icon
  font-size: 18px
  display: flex
  align-items: center
  justify-content: center

// Modern Sidebar
.modern-drawer
  background: #ffffff
  border-right: 1px solid rgba(0, 0, 0, 0.06)
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.05)

.drawer-content
  height: 100%
  display: flex
  flex-direction: column
  overflow: hidden

.nav-header
  padding: 1.5rem 1.5rem 1rem
  border-bottom: 1px solid rgba(0, 0, 0, 0.06)

.nav-title
  font-size: 0.875rem
  font-weight: 600
  color: #64748b
  text-transform: uppercase
  letter-spacing: 0.05em

.nav-section
  padding: 1.5rem 0 0

  &:first-child
    padding-top: 1rem

.nav-section-title
  padding: 0 1.5rem 0.75rem
  font-size: 0.8125rem
  font-weight: 600
  color: #64748b
  text-transform: uppercase
  letter-spacing: 0.05em
  display: flex
  align-items: center
  gap: 0.5rem

.nav-section-icon
  font-size: 0.875rem
  color: #14F195

.nav-menu
  display: flex
  flex-direction: column
  gap: 0.25rem
  padding: 0 0.75rem

.nav-item
  display: flex
  align-items: center
  gap: 0.75rem
  padding: 0.75rem
  border-radius: 8px
  color: #64748b
  text-decoration: none
  font-weight: 500
  font-size: 0.875rem
  transition: all 0.2s ease
  position: relative

  &:hover
    background: rgba(153, 69, 255, 0.05)
    color: #9945FF
    transform: translateX(2px)

  &.nav-item--active
    background: rgba(153, 69, 255, 0.1)
    color: #9945FF
    font-weight: 600

    &::before
      content: ''
      position: absolute
      left: 0
      top: 50%
      transform: translateY(-50%)
      width: 3px
      height: 20px
      background: #9945FF
      border-radius: 0 2px 2px 0

.training-nav-item
  &:hover
    background: rgba(20, 241, 149, 0.05)
    color: #14F195

  &.nav-item--active
    background: rgba(20, 241, 149, 0.1)
    color: #14F195

    &::before
      background: #14F195

.nav-icon
  font-size: 1rem
  width: 20px
  display: flex
  justify-content: center

.nav-label
  flex: 1

// Sidebar Footer
.drawer-footer
  margin-top: auto
  padding: 1.5rem
  border-top: 1px solid rgba(0, 0, 0, 0.06)
  text-align: center

.footer-logo
  margin-bottom: 0.75rem

.footer-brand
  height: 40px
  max-width: 120px
  opacity: 0.8

.footer-tagline
  font-size: 0.75rem
  color: #94a3b8
  font-weight: 500
  font-style: italic

// Main Content
.modern-content
  background: #fafbfc

.content-wrapper
  padding: 2rem
  max-width: 1200px
  margin: 0 auto
  min-height: calc(100vh - 70px)

  @media (max-width: 768px)
    padding: 1rem

// Responsive Design
@media (max-width: 1024px)
  .brand-text
    display: none

  .toolbar-container
    padding: 0 1rem

@media (max-width: 768px)
  .toolbar-container
    padding: 0 0.75rem

  .header-brand
    gap: 0.5rem

  .brand-logo
    width: 32px
    height: 32px

  .nav-section
    padding-top: 1rem

  .nav-menu
    padding: 0 0.5rem

  .drawer-footer
    padding: 1rem

// Smooth Transitions
*
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease

// Persistent Navigation Controls
.nav-controls
  position: fixed
  bottom: 2rem
  right: 2rem
  display: flex
  flex-direction: column
  gap: 0.75rem
  z-index: 1000

.nav-control-btn
  width: 56px
  height: 56px
  background: rgba(255, 255, 255, 0.95)
  backdrop-filter: blur(20px)
  -webkit-backdrop-filter: blur(20px)
  border: 1px solid rgba(0, 0, 0, 0.08)
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
  transition: all 0.3s ease

  &:hover
    transform: translateY(-2px)
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2)

  .nav-icon
    font-size: 20px
    display: flex
    align-items: center
    justify-content: center
    color: #64748b
    transition: color 0.2s ease

.home-btn
  &:hover
    background: rgba(153, 69, 255, 0.1)
    border-color: #9945FF

    .nav-icon
      color: #9945FF

.prev-btn
  &:hover
    background: rgba(239, 68, 68, 0.1)
    border-color: #ef4444

    .nav-icon
      color: #ef4444
      font-size: 24px
      font-weight: bold

.next-btn
  &:hover
    background: rgba(20, 241, 149, 0.1)
    border-color: #14F195

    .nav-icon
      color: #14F195
      font-size: 24px
      font-weight: bold

// Mobile adjustments for nav controls
@media (max-width: 768px)
  .nav-controls
    bottom: 1rem
    right: 1rem
    gap: 0.5rem

  .nav-control-btn
    width: 48px
    height: 48px

    .nav-icon
      font-size: 18px

  .prev-btn .nav-icon, .next-btn .nav-icon
    font-size: 20px

// Custom Scrollbar
.modern-drawer .q-scrollarea__content
  &::-webkit-scrollbar
    width: 4px

  &::-webkit-scrollbar-track
    background: transparent

  &::-webkit-scrollbar-thumb
    background: rgba(0, 0, 0, 0.1)
    border-radius: 2px

    &:hover
      background: rgba(0, 0, 0, 0.2)
</style>
