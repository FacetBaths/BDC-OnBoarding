<template>
  <div class="tools-technology">
    <div class="header">
      <div class="logo">
        <img
          max-width="800px"
          width="100%"
          height="auto"
          src="/assets/Logo_v3_hi_res.png"
          alt="Facet Renovations Logo"
        />
      </div>
    </div>
    <h2>Tools & Technology for BDC Reps</h2>
    <p class="intro">
      We equip you with the best tools to succeed—because when you're set up right, we all
      benefit from smoother operations and better results. Here's what you'll use, with
      support always available.
    </p>

    <div class="tool-section">
      <h3>LEAP CRM - <span class="tool_link">https://www.jobprogress.com/app/#/</span></h3>
      <p>
        Our primary tool for managing customer data, leads, and appointments. Log all
        interactions, update consent, and keep records accurate to ensure seamless handoffs to
        sales.<br />
        <sub class="tool_info">
          Username: <span class="tool_username">bdc@facetrenovations.us</span> (password
          distributed upon request at initial login).
        </sub>
      </p>
    </div>

    <div class="tool-section">
      <h3>LinkedPhone - <span class="tool_link">LinkedPhone.com</span></h3>
      <p>
        Shared numbers for inbound calls. Answer promptly, qualify leads, and route non-sales
        queries efficiently—your first touch sets the tone for customer trust.
      </p>
    </div>

    <div class="tool-section">
      <h3>Google Voice - <span class="tool_link">https://voice.google.com</span></h3>
      <p>
        Shared numbers for inbound calls. Answer promptly, qualify leads, and route non-sales
        queries efficiently—your first touch sets the tone for customer trust. Access at
        voice.google.com.<br />
        <sub class="tool_info">
          Username: <span class="tool_username">bdc@facetrenovations.us</span> (password
          distributed upon request at initial login).
        </sub>
      </p>
    </div>

    <div class="tool-section">
      <h3>Discord Server - <span class="tool_link">https://discord.gg/wHRyTUXtDe</span></h3>
      <p>
        For team communication, updates, and quick questions. Use it to notify about issues or
        quick questions—we're always connected to support each other.<br />
        <sub class="tool_info tool_link">App is available on all platforms and web.</sub>
      </p>
    </div>

    <div class="tool-section">
      <h3>BDC WordTrax Document</h3>
      <p>
        Reference for scripting, objections handling, and quick scheduling tips (e.g.,
        encouraging us as first or last appointment). Helps you deliver consistent, effective
        conversations.
      </p>
    </div>

    <div class="tool-section">
      <h3>Appointment Checklist</h3>
      <p>
        A key resource to gather complete info and make appointments stick. Use it every time
        to qualify and prepare sales for success.
      </p>
    </div>

    <p class="note">
      These tools are here to empower you—we're invested in your ease and effectiveness. Need
      training or help? Reach out; we're in this together.
    </p>
    <div class="tagline">A luxurious look. A cut above.</div>
  </div>
</template>

<style scoped>
.tools-technology {
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

.tool-section {
  padding: 20px;
  background-color: #F9F9F9;
  border-left: 5px solid #14F195;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.tool_username {
  color: #9945FF;
  font-weight: 600;
}

.tool_link {
  font-weight: 600;
  color: #7C7C7C;
  margin-top: 10px;
  text-decoration: none;
}

.tool_info {
  margin: 0;
  padding: 0;
}

sub {
  margin-top: 0;
  padding-top: 0;
}
</style>
