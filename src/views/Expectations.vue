<template>
  <div class="expectations">
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
    <h2>Expectations & Responsibilities for BDC Reps</h2>
    <p class="intro">
      We're building something special together—your role is key, and we're committed to
      supporting you every step. Here's what we expect, knowing your contributions make a
      real difference for the team and our customers.
    </p>

    <div class="section">
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Receive inbound calls to the shared numbers (Linked Phone and Google Voice),
          effectively relaying information (if non-sales related).
        </li>
        <li>Diligently use the tools and technology provided (LEAP CRM) to maintain accurate
          information regarding jobs and customers.
        </li>
        <li>Set sales appointments, which includes qualifying leads to ensure they're a good
          fit.
        </li>
        <li>Make outbound calls to set appointments, aiming for at least 20 per day.</li>
        <li>Communicate with the sales team and customers to coordinate and support smooth
        operations.
        </li>
        <li>Reschedule appointments as needed, minimizing disruptions.</li>
        <li>Provide people with the best possible impression of the company—your interactions
          set the tone for our relationships.
        </li>
      </ul>
    </div>

    <div class="section">
      <h3>Performance Expectations</h3>
      <ul>
        <li>Goal: Set 10 appointments per week from all sources to drive our growth.</li>
        <li>Acceptable: Averaging 5 appointments per week, with room to improve as we support
          your success.
        </li>
        <li>Be persistent with leads: If someone doesn't pick up, try again in a few hours or
          at a different time the next day (e.g., 11 AM one day, 8 AM the next).
        </li>
        <li>Ensure appointments stick by using the
          <span style="color:#14F195; font-weight: 600;">Appointment Checklist</span> to
          gather complete info and reduce no-shows or out-of-scope leads.
        </li>
      </ul>
    </div>

    <div class="section">
      <h3>Company Policies</h3>
      <ul>
        <li><strong>Attendance & Availability</strong>: We value your work-life balance while
          ensuring our team is primed to handle incoming calls from 8:00 AM Monday through
          Saturday, committing to at least 30 hours weekly. If unexpected challenges arise,
          simply notify us via Discord or by calling the main line—we're flexible and
          committed to supporting you while maintaining our operational flow.
        </li>
        <li><strong>Confidentiality</strong>: Safeguard customer information as if it were your
          own—maintain its security, avoid sharing it beyond the team, and utilize LEAP CRM
          with utmost responsibility. Any breaches will be handled promptly to preserve the
          trust that binds our team like family and protects our business integrity.
        </li>
        <li><strong>Code of Conduct</strong>: Deliver your best with a warm, confident
          energy—remain respectful, timely, and professional in all interactions with clients
          and colleagues. Foster positivity during work hours; we're focused on mutual
          upliftment and success. If you have external commitments, that's fine—just keep us
          informed so we can collaborate effectively.
        </li>
        <li><strong>Technology Use</strong>: Leverage the tools provided by Facet Renovations
          (LEAP CRM, Linked Phone, Google Voice, Discord) with diligence to drive efficiency.
          Questions or need guidance? We're here to provide thorough support and training—your
          success with these tools directly fuels ours.
        </li>
        <li><strong>Communication Standards</strong>: Greet calls with genuine enthusiasm,
          document details precisely, and forward non-sales inquiries swiftly. Every
          conversation is an opportunity to wow our customers—you're the welcoming face of
          Facet, setting the stage for exceptional experiences and strong results.
        </li>
      </ul>
    </div>

    <p class="note">
      Your role matters to us—we're invested in your success because it's tied to ours. Let's
      build great things together!
    </p>
    <div class="tagline">A luxurious look. A cut above.</div>
    
    <!-- PDF Download Section -->
    <div class="pdf-download-section">
      <PdfDownloadButton 
        filename="Intro_expectations_responsibilities.pdf"
        label="Download PDF Version"
        icon="fas fa-file-pdf"
      />
    </div>
  </div>
</template>

<script setup>
import logoImage from '/assets/Logo_v3_hi_res.png'
import PdfDownloadButton from '../components/PdfDownloadButton.vue'

const logoUrl = logoImage
</script>

<style scoped>
.expectations {
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

h2 {
  font-size: 28px;
  color: #9945FF;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

.intro,
.note {
  font-style: italic;
  text-align: center;
  margin-top: 30px;
  color: #14F195;
  font-size: 16px;
  padding: 10px;
  background-color: #E6F7EF;
  border-radius: 5px;
  font-weight: 500;
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

.section {
  padding: 20px;
  background-color: #F9F9F9;
  border-left: 5px solid #14F195;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.pdf-download-section {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  background-color: #F9F9F9;
  border-radius: 10px;
  border: 2px dashed #9945FF;
}
</style>

