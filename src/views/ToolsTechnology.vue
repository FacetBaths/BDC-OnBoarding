<template>
  <div class="tools-technology">
    <!-- Page Header -->
    <div class="page-header">
      <div class="logo-container">
        <img
          :src="logoUrl"
          alt="Facet Renovations Logo"
          class="header-logo"
        />
      </div>
      <h1 class="page-title">Tools & Technology</h1>
      <p class="page-subtitle">Everything you need to succeed as a BDC Rep</p>
    </div>

    <!-- Intro Section -->
    <div class="intro-section">
      <p class="intro-text">
        We equip you with the best tools to succeed—because when you're set up right, we all
        benefit from smoother operations and better results. Here's what you'll use, with
        support always available.
      </p>
    </div>

    <!-- Tools Grid -->
    <div class="tools-grid">
      <!-- Primary Tools -->
      <div class="tool-card primary-tool">
        <div class="tool-header">
          <i class="fas fa-database tool-icon"></i>
          <h3 class="tool-title">LEAP CRM</h3>
        </div>
        <div class="tool-content">
          <a href="https://www.jobprogress.com/app/#/" class="tool-link" target="_blank">
            jobprogress.com/app
          </a>
          <p class="tool-description">
            Our primary tool for managing customer data, leads, and appointments. Log all
            interactions, update consent, and keep records accurate to ensure seamless handoffs to sales.
          </p>
          <div class="tool-credentials">
            <div class="credential-item">
              <span class="credential-label">Username:</span>
              <code>bdc@facetrenovations.us</code>
            </div>
            <div class="credential-note">
              Password distributed upon request at initial login
            </div>
          </div>
        </div>
      </div>

      <div class="tool-card primary-tool">
        <div class="tool-header">
          <i class="fas fa-phone tool-icon"></i>
          <h3 class="tool-title">LinkedPhone</h3>
        </div>
        <div class="tool-content">
          <a href="https://linkedphone.com" class="tool-link" target="_blank">
            LinkedPhone.com
          </a>
          <p class="tool-description">
            Shared numbers for inbound calls. Answer promptly, qualify leads, and route non-sales
            queries efficiently—your first touch sets the tone for customer trust.
          </p>
        </div>
      </div>

      <div class="tool-card primary-tool">
        <div class="tool-header">
          <i class="fas fa-voicemail tool-icon"></i>
          <h3 class="tool-title">Google Voice</h3>
        </div>
        <div class="tool-content">
          <a href="https://voice.google.com" class="tool-link" target="_blank">
            voice.google.com
          </a>
          <p class="tool-description">
            Shared numbers for inbound calls. Answer promptly, qualify leads, and route non-sales
            queries efficiently—your first touch sets the tone for customer trust.
          </p>
          <div class="tool-credentials">
            <div class="credential-item">
              <span class="credential-label">Username:</span>
              <code>bdc@facetrenovations.us</code>
            </div>
            <div class="credential-note">
              Password distributed upon request at initial login
            </div>
          </div>
        </div>
      </div>

      <div class="tool-card primary-tool">
        <div class="tool-header">
          <i class="fab fa-discord tool-icon"></i>
          <h3 class="tool-title">Discord Server</h3>
        </div>
        <div class="tool-content">
          <a href="https://discord.gg/wHRyTUXtDe" class="tool-link" target="_blank">
            discord.gg/wHRyTUXtDe
          </a>
          <p class="tool-description">
            For team communication, updates, and quick questions. Use it to notify about issues or
            quick questions—we're always connected to support each other.
          </p>
          <div class="credential-note">
            App is available on all platforms and web
          </div>
        </div>
      </div>

      <!-- Resource Tools -->
      <div class="tool-card resource-tool">
        <div class="tool-header">
          <i class="fas fa-file-alt tool-icon"></i>
          <h3 class="tool-title">BDC WordTrax Document</h3>
        </div>
        <div class="tool-content">
          <p class="tool-description">
            Reference for scripting, objections handling, and quick scheduling tips (e.g.,
            encouraging us as first or last appointment). Helps you deliver consistent, effective
            conversations.
          </p>
        </div>
      </div>

      <div class="tool-card resource-tool">
        <div class="tool-header">
          <i class="fas fa-clipboard-check tool-icon"></i>
          <h3 class="tool-title">Appointment Checklist</h3>
        </div>
        <div class="tool-content">
          <p class="tool-description">
            A key resource to gather complete info and make appointments stick. Use it every time
            to qualify and prepare sales for success.
          </p>
        </div>
      </div>
    </div>

    <!-- Support Section -->
    <div class="support-section">
      <h3 class="support-title">Need Help?</h3>
      <p class="support-text">
        These tools are here to empower you—we're invested in your ease and effectiveness. Need
        training or help? Reach out; we're in this together.
      </p>
      <div class="tagline">A luxurious look. A cut above.</div>
    </div>
  </div>
</template>

<script setup>
import logoImage from '/assets/Logo_v3_hi_res.png'

const logoUrl = logoImage
</script>

<style scoped>
.tools-technology {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: #fafbfc;
  min-height: calc(100vh - 70px);
}

/* Page Header */
.page-header {
  text-align: center;
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.logo-container {
  margin-bottom: 1.5rem;
}

.header-logo {
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #9945FF;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.025em;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  margin: 0;
  font-weight: 500;
}

/* Intro Section */
.intro-section {
  background: linear-gradient(135deg, rgba(20, 241, 149, 0.05) 0%, rgba(153, 69, 255, 0.05) 100%);
  border: 1px solid rgba(20, 241, 149, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.75;
  color: #374151;
  margin: 0;
  text-align: center;
  font-style: italic;
}

/* Tools Grid */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* Tool Cards */
.tool-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.primary-tool {
  border-left: 4px solid #9945FF;
}

.primary-tool:hover {
  border-left-color: #7c3aed;
}

.resource-tool {
  border-left: 4px solid #14F195;
}

.resource-tool:hover {
  border-left-color: #10d9c5;
}

/* Tool Header */
.tool-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tool-icon {
  font-size: 1.5rem;
  color: #9945FF;
  min-width: 24px;
}

.resource-tool .tool-icon {
  color: #14F195;
}

.tool-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  flex: 1;
}

/* Tool Content */
.tool-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tool-link {
  color: #9945FF;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.tool-link:hover {
  color: #7c3aed;
  text-decoration: underline;
}

.tool-description {
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9375rem;
}

/* Credentials */
.tool-credentials {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.credential-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.credential-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}

.credential-item code {
  background: #e5e7eb;
  color: #9945FF;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8125rem;
  font-weight: 600;
}

.credential-note {
  font-size: 0.8125rem;
  color: #6b7280;
  font-style: italic;
  margin: 0;
}

/* Support Section */
.support-section {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.support-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.support-text {
  font-size: 1rem;
  line-height: 1.75;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
}

.tagline {
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 600;
  color: #14F195;
  margin: 0;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(20, 241, 149, 0.05) 0%, rgba(153, 69, 255, 0.05) 100%);
  border-radius: 8px;
  border: 1px solid rgba(20, 241, 149, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .tools-technology {
    padding: 0.75rem;
  }
  
  .page-header {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .header-logo {
    max-width: 150px;
  }
  
  .tools-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tool-card {
    padding: 1.25rem;
  }
  
  .tool-header {
    gap: 0.75rem;
  }
  
  .tool-icon {
    font-size: 1.25rem;
  }
  
  .tool-title {
    font-size: 1.125rem;
  }
  
  .intro-section {
    padding: 1.25rem;
  }
  
  .support-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .tools-technology {
    padding: 0.5rem;
  }
  
  .page-header {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.75rem;
  }
  
  .tool-card {
    padding: 1rem;
  }
  
  .tool-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .tool-icon {
    align-self: center;
  }
}

/* Print Styles */
@media print {
  .tools-technology {
    background: white;
    box-shadow: none;
  }
  
  .tool-card {
    box-shadow: none;
    border: 1px solid #e5e7eb;
    break-inside: avoid;
  }
  
  .page-header {
    box-shadow: none;
    border: 1px solid #e5e7eb;
  }
}
</style>
