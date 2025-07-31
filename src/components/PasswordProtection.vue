<template>
  <div class="password-protection">
    <q-layout view="lHh lpr lFf">
      <q-page-container>
        <div class="fullscreen bg-gradient flex flex-center">
          <q-card class="login-card q-pa-xl" flat bordered>
            <q-card-section class="text-center">
              <!-- Logo Section -->
              <div class="q-mb-lg">
                <q-img
                  :src="logoUrl"
                  style="height: 100px; max-width: 300px"
                  fit="contain"
                  class="q-mb-md"
                />
                <div class="text-h4 text-primary text-weight-bold">
                  BDC Portal Access
                </div>
                <div class="text-subtitle1 text-grey-6">
                  Business Development Center
                </div>
              </div>

              <!-- Password Input Section -->
              <div class="q-mb-lg" v-if="!showButtons">
                <q-input
                  v-model="password"
                  type="password"
                  label="Enter Access Code"
                  outlined
                  dense
                  class="q-mb-md password-input"
                  :error="hasError"
                  :error-message="errorMessage"
                  @keyup.enter="checkPassword"
                  autofocus
                >
                  <template v-slot:prepend>
                    <q-icon name="fas fa-lock" color="primary" />
                  </template>
                </q-input>

                <div class="row q-gutter-md">
                  <q-btn
                    @click="checkPassword"
                    label="Access Portal"
                    color="primary"
                    unelevated
                    class="col"
                    :loading="isLoading"
                    icon="fas fa-sign-in-alt"
                  />
                  <q-btn
                    @click="showButtons = true"
                    label="Other Options"
                    outline
                    color="secondary"
                    class="col-auto"
                  />
                </div>
              </div>

              <!-- Button Options Section -->
              <div class="q-mb-lg" v-else>
                <div class="text-body1 text-grey-7 q-mb-lg">
                  Choose an option to continue:
                </div>

                <div class="row q-gutter-md">
                  <q-btn
                    @click="showButtons = false"
                    label="Enter Access Code"
                    color="primary"
                    unelevated
                    class="col"
                    icon="fas fa-key"
                  />
                  <q-btn
                    @click="redirectToMainSite"
                    label="Visit Main Site"
                    color="secondary"
                    unelevated
                    class="col"
                    icon="fas fa-external-link-alt"
                  />
                </div>
              </div>

              <!-- Additional Info -->
              <div class="text-center">
                <div class="text-caption text-grey-5 q-mb-sm">
                  Need access? Contact your supervisor for the access code.
                </div>
                <div class="text-caption text-primary">
                  <q-icon name="fas fa-shield-alt" class="q-mr-xs" />
                  Secure Access Portal
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-page-container>

      <!-- Footer -->
      <q-footer class="bg-transparent">
        <q-toolbar class="justify-center">
          <div class="text-caption text-grey-6">
            © {{ new Date().getFullYear() }} Facet Renovations - A luxurious look. A cut above.
          </div>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import logoImage from '/assets/Logo_v3_hi_res.png'

const $q = useQuasar()

// Define emits
const emit = defineEmits(['authenticated'])

// Logo URL
const logoUrl = logoImage

// Reactive data
const password = ref('')
const hasError = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)
const showButtons = ref(false)

// Static password - you can change this to whatever you want
const CORRECT_PASSWORD = 'FacetBDC2025'

const checkPassword = async () => {
  if (!password.value.trim()) {
    hasError.value = true
    errorMessage.value = 'Please enter an access code'
    return
  }

  isLoading.value = true
  
  // Check password immediately
  if (password.value === CORRECT_PASSWORD) {
    // Store authentication in localStorage
    localStorage.setItem('bdcAuthenticated', 'true')
    localStorage.setItem('bdcAuthTime', Date.now().toString())
    
    // Success notification
    $q.notify({
      type: 'positive',
      message: 'Access granted! Welcome to BDC Portal',
      icon: 'fas fa-check-circle',
      position: 'top'
    })
    
    // Brief delay for visual feedback, then emit authentication
    setTimeout(() => {
      isLoading.value = false
      emit('authenticated')
    }, 300)
  } else {
    // Small delay for failed authentication for security
    setTimeout(() => {
      hasError.value = true
      errorMessage.value = 'Invalid access code. Please try again.'
      password.value = ''
      
      // Error notification
      $q.notify({
        type: 'negative',
        message: 'Invalid access code',
        icon: 'fas fa-exclamation-triangle',
        position: 'top'
      })
      
      isLoading.value = false
    }, 500)
  }
}

const redirectToMainSite = () => {
  $q.notify({
    type: 'info',
    message: 'Redirecting to Facet Renovations main website...',
    icon: 'fas fa-external-link-alt',
    position: 'top'
  })
  
  setTimeout(() => {
    window.location.href = 'https://facetrenovations.us/'
  }, 1000)
}

// Clear error when user starts typing
const clearError = () => {
  hasError.value = false
  errorMessage.value = ''
}

// Watch password input to clear errors
import { watch } from 'vue'
watch(password, () => {
  if (hasError.value) {
    clearError()
  }
})
</script>

<style lang="sass" scoped>
.password-protection
  min-height: 100vh
  font-family: 'Tomorrow', sans-serif

.bg-gradient
  background: linear-gradient(135deg, #9945FF 0%, #14F195 100%)
  min-height: 100vh

.login-card
  min-width: 400px
  max-width: 500px
  border-radius: 16px
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3)
  backdrop-filter: blur(10px)
  background: rgba(255, 255, 255, 0.95)

.password-input
  min-height: 56px

@media (max-width: 480px)
  .login-card
    min-width: 300px
    max-width: 350px
    margin: 20px

.q-btn
  border-radius: 8px
  font-weight: 500
  text-transform: none
  font-size: 14px

.q-input
  .q-field__control
    border-radius: 8px
</style>
