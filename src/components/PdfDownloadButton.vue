<template>
  <q-btn
    :label="label"
    :icon="icon"
    color="primary"
    outline
    class="pdf-download-btn"
    @click="downloadPdf"
    :loading="isDownloading"
  >
    <q-tooltip>Download PDF version</q-tooltip>
  </q-btn>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const props = defineProps({
  filename: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Download PDF'
  },
  icon: {
    type: String,
    default: 'fas fa-file-pdf'
  }
})

const $q = useQuasar()
const isDownloading = ref(false)

const downloadPdf = async () => {
  isDownloading.value = true
  
  try {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = `/pdfs/${props.filename}`
    link.download = props.filename
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Success notification
    $q.notify({
      type: 'positive',
      message: 'PDF download started',
      icon: 'fas fa-download',
      position: 'top'
    })
  } catch (error) {
    console.error('Download error:', error)
    $q.notify({
      type: 'negative',
      message: 'Failed to download PDF',
      icon: 'fas fa-exclamation-triangle',
      position: 'top'
    })
  } finally {
    isDownloading.value = false
  }
}
</script>

<style lang="sass" scoped>
.pdf-download-btn
  border-radius: 8px
  font-weight: 500
  text-transform: none
  font-size: 14px
  transition: all 0.3s ease
  
  &:hover
    transform: translateY(-1px)
    box-shadow: 0 4px 12px rgba(153, 69, 255, 0.3)
</style>
