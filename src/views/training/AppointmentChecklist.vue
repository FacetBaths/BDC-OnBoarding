<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-8">
        <q-card class="header-card q-mb-lg">
          <q-card-section class="text-center bg-gradient-primary text-white">
            <div class="text-h4 text-weight-bold text-uppercase letter-spacing">
              Facet Renovations
            </div>
          </q-card-section>
        </q-card>

        <div class="text-h4 text-primary text-center q-mb-md text-weight-medium">
          Appointment Checklist: Setting Strong Leads Together
        </div>
        
        <q-card class="intro-card q-mb-lg">
          <q-card-section class="text-center">
            <p class="text-body1 text-grey-7">
              We're in this as a team—your thoroughness here turns leads into wins for everyone. Gather this info to qualify, confirm, and make appointments stick. We appreciate your persistence; it's how we all thrive!
            </p>
          </q-card-section>
        </q-card>

        <!-- Checklist Items -->
        <div class="checklist-container">
          <q-card 
            v-for="(item, index) in checklistItems" 
            :key="index"
            class="checklist-item q-mb-md" 
            elevated
          >
            <q-card-section>
              <div class="row items-center">
                <div class="col-auto q-pr-md">
                  <q-checkbox 
                    v-model="item.checked" 
                    color="primary" 
                    size="lg"
                  />
                </div>
                <div class="col">
                  <div class="text-h6 text-primary q-mb-xs" :class="{ 'text-italic': item.optional }">
                    {{ item.title }}
                    <q-badge v-if="item.optional" color="amber" text-color="black" class="q-ml-sm">
                      Optional
                    </q-badge>
                  </div>
                  <div class="text-body2 text-grey-7">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <q-card class="note-card q-mb-md" flat>
          <q-card-section class="bg-green-1 text-center">
            <q-icon name="fas fa-star" color="secondary" class="q-mr-sm" />
            <span class="text-body1 text-italic">
              Your attention here builds lasting relationships and boosts our shared success—thanks for caring as much as we do!
            </span>
          </q-card-section>
        </q-card>

        <div class="text-center text-caption text-grey-6 q-mb-md">
          * Optional but encouraged step to enhance customer connection and sales readiness.
        </div>

        <div class="text-center text-h6 text-secondary text-italic text-weight-medium">
          A luxurious look. A cut above.
        </div>

        <!-- Progress Summary -->
        <q-card class="q-mt-lg" flat bordered>
          <q-card-section>
            <div class="text-center">
              <q-circular-progress
                :value="completionPercentage"
                size="80px"
                :thickness="0.2"
                color="primary"
                track-color="grey-3"
                class="q-ma-md"
              >
                {{ Math.round(completionPercentage) }}%
              </q-circular-progress>
              <div class="text-body2 text-grey-6">
                {{ completedItems }} of {{ totalItems }} items completed
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const checklistItems = ref([
  {
    title: 'Customer Full Name',
    description: 'Verify spelling and preferred name for personalized follow-up',
    checked: false,
    optional: false
  },
  {
    title: 'Primary Phone Number',
    description: 'Confirm it\'s accurate; note best time to call',
    checked: false,
    optional: false
  },
  {
    title: 'Backup Contact',
    description: 'Secondary phone or emergency number to ensure reachability',
    checked: false,
    optional: false
  },
  {
    title: 'Email Address',
    description: 'Get permission to send confirmations/reminders',
    checked: false,
    optional: false
  },
  {
    title: 'Home Address',
    description: 'Full address to confirm service area (Northern Illinois) and any access notes (e.g., gate code, parking)',
    checked: false,
    optional: false
  },
  {
    title: 'Project Type/Needs',
    description: 'Details like Wet space conversion or update, Full Remodel, Toilet, Vanities, Lighting, Flooring, New Bathroom Creation, or specific features (e.g., accessibility, modern vs. luxury style)',
    checked: false,
    optional: false
  },
  {
    title: 'Qualification Basics',
    description: 'Confirm they\'re the homeowner; ensure that they are a decision maker',
    checked: false,
    optional: false
  },
  {
    title: 'Appointment Date/Time',
    description: 'Preferred slot; double-check availability and note any flexibility. Will all decision makers be present at the appointment? Do they have any other companies coming to look at this time? If so, encourage them to schedule us first or last -- See BDC WordTrax Document',
    checked: false,
    optional: false
  },
  {
    title: 'Preferred Communication/Consent',
    description: 'How they want reminders (text, email, call); send initial confirmation right away. Also, request permission to send text messages (this consent will not be abused or transferred). Modify consent in LEAP appropriately',
    checked: false,
    optional: false
  },
  {
    title: 'Customer Recon/Report',
    description: 'If the conversation flows naturally, inquire about their motivations for the project (e.g., "What inspired this remodel?") and any recent home improvements they\'ve completed. This builds rapport and provides valuable insights for the sales team',
    checked: false,
    optional: true
  },
  {
    title: 'Pertinent Notes',
    description: 'Jot down pertinent notes like excitements (e.g., "Loves modern designs") or anything that could prove helpful for sales prep',
    checked: false,
    optional: false
  }
])

const completedItems = computed(() => {
  return checklistItems.value.filter(item => item.checked).length
})

const totalItems = computed(() => {
  return checklistItems.value.length
})

const completionPercentage = computed(() => {
  if (totalItems.value === 0) return 0
  return (completedItems.value / totalItems.value) * 100
})
</script>

<style lang="sass" scoped>
.header-card
  .bg-gradient-primary
    background: linear-gradient(90deg, #9945FF 0%, #14F195 100%)

.letter-spacing
  letter-spacing: 2px

.checklist-item
  transition: transform 0.2s, box-shadow 0.2s
  border-left: 5px solid $secondary
  
  &:hover
    transform: translateY(-2px)
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15)

.intro-card
  border-left: 5px solid $secondary

.checklist-container
  max-width: 100%
</style>
