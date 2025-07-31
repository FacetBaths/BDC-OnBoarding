<template>
  <div class="interface">
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
    <h2>Facet Renovations Interface</h2>

    <h3>Facet Personnel (Owners/Founders)</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Main Responsibilities</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Peter Roto</td>
          <td>Overall</td>
          <td>847.875.7196</td>
          <td>proto@facetrenovations.us</td>
        </tr>
        <tr>
          <td>Alex Upshaw</td>
          <td>Sales</td>
          <td>224.345.0924</td>
          <td>aupshaw@facetrenovations.us</td>
        </tr>
        <tr>
          <td>Rich Kukielka</td>
          <td>Installation</td>
          <td>847.902.7349</td>
          <td>rkukielka@facetrenovations.us</td>
        </tr>
        <tr>
          <td>Nick Roto</td>
          <td>Procurement</td>
          <td>847.875.6251</td>
          <td>nroto@facetrenovations.us</td>
        </tr>
      </tbody>
    </table>

    <h3>Tools & Technology</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>What For</th>
          <th>How to Find</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Discord</td>
          <td>Main Channel of Communication</td>
          <td>
            <a href="https://discord.gg/wHRyTUXtDe" target="_blank">
              https://discord.gg/wHRyTUXtDe
            </a>
          </td>
          <td class="notes">Must download Discord Mobile app or computer. Preferably Both</td>
        </tr>
        <tr>
          <td>LEAP CRM</td>
          <td>Logging Customer and Job Interactions</td>
          <td>
            <a href="https://www.jobprogress.com/app/#/" target="_blank">
              https://www.jobprogress.com/app/#/
            </a>
          </td>
          <td class="notes">
            Username: bdc@facetrenovations.us, Password: disclosed at time of job acceptance
          </td>
        </tr>
        <tr>
          <td colspan="4">
            LEAP APP LINKS
            <div class="app-links">
              <div class="app-link">
                <a
                  href="https://play.google.com/store/apps/details?id=com.jobprogress.app&pcampaignid=web_share"
                  target="_blank"
                >
                  <img
                    width="150px"
                    height="auto"
                    style="margin: 1rem 0 0 0; padding: 0"
                    src="https://static.vecteezy.com/system/resources/previews/012/871/365/non_2x/google-play-store-download-button-in-black-colors-download-on-the-google-play-store-free-png.png"
                  />
                </a>
              </div>
              <div class="app-link leap_logo">
                <img
                  width="70px"
                  height="auto"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f9/ba/a6/f9baa6b6-bb1f-b082-d429-6ee947b77fb3/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp"
                  alt=""
                />
              </div>
              <div class="app-link">
                <a
                  href="https://apps.apple.com/us/app/leap-formerly-jobprogress/id1063635242"
                  target="_blank"
                >
                  <img
                    width="150px"
                    height="auto"
                    style="margin: 1rem 0 0 0; padding: 0"
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Google Account</td>
          <td>Access to Google Voice and Gmail</td>
          <td>
            <a href="https://accounts.google.com" target="_blank">
              https://accounts.google.com
            </a>
          </td>
          <td class="notes">
            Username: bdc@facetrenovations.us, Password: disclosed at time of job acceptance
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Facet Renovations Company Details</h3>
    <div class="company-details">
      <p>
        <strong>Website:</strong>
        <a href="https://facetrenovations.us" target="_blank">
          https://facetrenovations.us
        </a>
      </p>
      <p><strong>Phone (Main):</strong> 773.234.5911</p>
      <p><strong>Phone (Secondary):</strong> 773.234.5772</p>
      <p><strong>HQ Address:</strong> 1930 Innovation Way, Libertyville, IL 60048</p>
      <p><strong>X.com:</strong> @FacetRenovation</p>
      <p><strong>Facebook:</strong> /FacetRenovations</p>
    </div>

    <p class="note">
      This interface connects you to our team and resources. For support, use the main contact
      numbers or email info@facetrenovations.us—we're here to help you shine!
    </p>
    <div class="tagline">A luxurious look. A cut above.</div>
    
    <!-- PDF Download Section -->
    <div class="pdf-download-section">
      <PdfDownloadButton 
        filename="Intro_bdc_facet_renovations_interface.pdf"
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
.interface {
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

h3 {
  color: #9945FF;
  font-weight: 600;
}

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

table {
  width: 100%;
  max-width: 800px;
  margin: 0 auto 30px;
  border-collapse: collapse;
  background-color: #F9F9F9;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #E6F7EF;
  color: #9945FF;
  font-weight: 600;
  border-left: 5px solid #14F195;
}

td {
  font-weight: 400;
}

tr:last-child td {
  border-bottom: none;
}

.notes {
  font-size: 12px;
  color: #4A4A4A;
  font-style: italic;
  margin-top: 5px;
}

.company-details {
  max-width: 800px;
  margin: 0 auto 30px;
  padding: 20px;
  background-color: #F9F9F9;
  border-left: 5px solid #14F195;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.company-details p {
  margin: 10px 0;
  font-weight: 400;
}

.app-links {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 10px;
  border-radius: 0 0 5px 5px;
}

.app-link a {
  box-shadow: 3px 3px 10px #14F195;
  border-radius: .5rem;
  padding: .5rem .5rem 0rem .5rem;
  margin: 0;
}

.app-link a:hover {
  background-color: #d4f0e8;
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
