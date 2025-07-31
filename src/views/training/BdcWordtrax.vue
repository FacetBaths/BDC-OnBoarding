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
          BDC WordTrax: Mastering Customer Conversations
        </div>
        
        <q-card class="intro-card q-mb-lg">
          <q-card-section class="text-center">
            <p class="text-body1 text-grey-7">
              You're the first spark in our process—your words set the stage for quality appointments and big
              wins. Use these responses to handle objections, set clear expectations, and empower our sales team to close
              deals. Let's thrive together!
            </p>
          </q-card-section>
        </q-card>

        <!-- Objection Sections -->
        <q-card class="objection-section q-mb-lg" elevated>
          <q-card-section>
            <div class="text-h6 text-primary q-mb-md">
              Objection: 'I'm not making a decision that day'
            </div>
            
            <q-card class="objection-card q-mb-md" flat bordered>
              <q-card-section class="bg-green-1">
                <q-icon name="fas fa-quote-left" color="secondary" class="q-mr-sm" />
                <span class="text-weight-medium">Customer says:</span> "I'm not making a decision that day."
              </q-card-section>
            </q-card>

            <q-card class="response-card q-mb-md" flat bordered>
              <q-card-section class="bg-purple-1">
                <q-icon name="fas fa-reply" color="primary" class="q-mr-sm" />
                <span class="text-weight-medium">Response:</span> "No worries at all! Our design consultant will give you a full rundown—pictures,
                measurements, product options, and an exact price—giving you the chance to decide right then if it feels
                right. If you choose to wait, that's totally fine; we'll hold your initial price for 90 days, offer a 10-day
                discount, and have tools to adjust if cost is your focus. We just want everyone involved to have that option
                from the start."
              </q-card-section>
            </q-card>

            <q-card class="rationale-card q-mb-lg" flat>
              <q-card-section class="bg-grey-2">
                <q-icon name="fas fa-lightbulb" color="amber" class="q-mr-sm" />
                <span class="text-weight-medium text-italic">Rationale:</span> This reassures them they're not pressured, highlights the detailed process,
                and sets the expectation that a decision is possible. The 90-day lock and 10-day discount incentivize
                attendance, while the flexibility shows care, ensuring all decision-makers are mentally engaged for a better
                sales outcome.
              </q-card-section>
            </q-card>

            <q-card class="objection-card q-mb-md" flat bordered>
              <q-card-section class="bg-green-1">
                <q-icon name="fas fa-quote-left" color="secondary" class="q-mr-sm" />
                <span class="text-weight-medium">Customer says:</span> "I don't need everyone there to decide."
              </q-card-section>
            </q-card>

            <q-card class="response-card q-mb-md" flat bordered>
              <q-card-section class="bg-purple-1">
                <q-icon name="fas fa-reply" color="primary" class="q-mr-sm" />
                <span class="text-weight-medium">Response:</span> "We get it, but our design consultant packs the visit with industry insights,
                material comparisons, and live design work—info that's tough to pass on accurately. Having all
                decision-makers there ensures everyone gets the full picture and can grab any time-sensitive perks we might
                offer."
              </q-card-section>
            </q-card>

            <q-card class="rationale-card" flat>
              <q-card-section class="bg-grey-2">
                <q-icon name="fas fa-lightbulb" color="amber" class="q-mr-sm" />
                <span class="text-weight-medium text-italic">Rationale:</span> This emphasizes the value of the appointment's depth, encouraging full
                attendance without sounding pushy. It sets expectations for a comprehensive experience, giving sales a
                stronger chance to close by aligning all parties.
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>

        <q-card class="objection-section q-mb-lg" elevated>
          <q-card-section>
            <div class="text-h6 text-primary q-mb-md">
              Objection: 'Why do you need my phone/email/contact info?'
            </div>
            
            <q-card class="objection-card q-mb-md" flat bordered>
              <q-card-section class="bg-green-1">
                <q-icon name="fas fa-quote-left" color="secondary" class="q-mr-sm" />
                <span class="text-weight-medium">Customer says:</span> "Why do you need my phone/email/contact info?"
              </q-card-section>
            </q-card>

            <q-card class="response-card q-mb-md" flat bordered>
              <q-card-section class="bg-purple-1">
                <q-icon name="fas fa-reply" color="primary" class="q-mr-sm" />
                <span class="text-weight-medium">Response:</span> "Great question! We got your info from one of our marketing efforts and just
                want to confirm it's correct so we can stay in touch effectively. Rest assured, we won't sell it or share it
                with anyone outside our team."
              </q-card-section>
            </q-card>

            <q-card class="rationale-card" flat>
              <q-card-section class="bg-grey-2">
                <q-icon name="fas fa-lightbulb" color="amber" class="q-mr-sm" />
                <span class="text-weight-medium text-italic">Rationale:</span> This builds trust by explaining the source and purpose, addressing privacy
                concerns. Accurate contact info ensures smooth communication, setting up a quality appointment and reducing
                follow-up friction for sales.
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>

        <q-card class="objection-section q-mb-lg" elevated>
          <q-card-section>
            <div class="text-h6 text-primary q-mb-md">
              Objection: 'Can you give me a ballpark price over the phone?'
            </div>
            
            <q-card class="objection-card q-mb-md" flat bordered>
              <q-card-section class="bg-green-1">
                <q-icon name="fas fa-quote-left" color="secondary" class="q-mr-sm" />
                <span class="text-weight-medium">Customer says:</span> "Can you give me a ballpark price over the phone?"
              </q-card-section>
            </q-card>

            <q-card class="response-card q-mb-md" flat bordered>
              <q-card-section class="bg-purple-1">
                <q-icon name="fas fa-reply" color="primary" class="q-mr-sm" />
                <span class="text-weight-medium">Response:</span> "I'd love to help, and our projects range from $3,000 to $80,000 depending on
                the scope. But it'll make the most sense to have a design consultant visit to assess your space, design your
                project, and guide you on what's essential versus aesthetic. That way, you'll get an exact price and can
                decide how to proceed with confidence."
              </q-card-section>
            </q-card>

            <q-card class="rationale-card" flat>
              <q-card-section class="bg-grey-2">
                <q-icon name="fas fa-lightbulb" color="amber" class="q-mr-sm" />
                <span class="text-weight-medium text-italic">Rationale:</span> Providing a range satisfies curiosity while redirecting to the appointment,
                where your detailed process shines. This sets expectations for a personalized quote, giving sales the edge
                to close with a tailored solution.
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>

        <q-card class="objection-section q-mb-lg" elevated>
          <q-card-section>
            <div class="text-h6 text-primary q-mb-md">
              Objection: Other Companies Coming (Subtle Discovery)
            </div>
            
            <q-card class="objection-card q-mb-md" flat bordered>
              <q-card-section class="bg-green-1">
                <q-icon name="fas fa-quote-left" color="secondary" class="q-mr-sm" />
                <span class="text-weight-medium">Customer implies or doesn't mention others.</span>
              </q-card-section>
            </q-card>

            <q-card class="response-card q-mb-md" flat bordered>
              <q-card-section class="bg-purple-1">
                <q-icon name="fas fa-reply" color="primary" class="q-mr-sm" />
                <div class="text-weight-medium q-mb-sm">Response 1:</div>
                <div class="q-mb-sm">"We're excited to help you get started—are you exploring options with any
                other folks right now, or is this your first step in the process?"</div>
                <div class="text-weight-medium q-mb-sm">Response 2:</div>
                <div>"It's great you're looking
                into this—have you had any other visits lined up to check out your project, or are we kicking things off for
                you?"</div>
              </q-card-section>
            </q-card>

            <q-card class="rationale-card" flat>
              <q-card-section class="bg-grey-2">
                <q-icon name="fas fa-lightbulb" color="amber" class="q-mr-sm" />
                <span class="text-weight-medium text-italic">Rationale:</span> These open-ended questions subtly uncover if others are involved without
                pressure. If first, schedule early to set the standard. If others are planned, request the last slot to
                leverage your superior process and incentives, boosting closure odds.
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>

        <q-card class="objection-section q-mb-lg" elevated>
          <q-card-section>
            <div class="text-h6 text-primary q-mb-md">
              General Non-Appointment Topics
            </div>
            
            <q-card class="objection-card q-mb-md" flat bordered>
              <q-card-section class="bg-green-1">
                <q-icon name="fas fa-quote-left" color="secondary" class="q-mr-sm" />
                <span class="text-weight-medium">Customer asks:</span> [Any question outside appointment scope, e.g., 'How long does installation
                take?']
              </q-card-section>
            </q-card>

            <q-card class="response-card q-mb-md" flat bordered>
              <q-card-section class="bg-purple-1">
                <q-icon name="fas fa-reply" color="primary" class="q-mr-sm" />
                <span class="text-weight-medium">Response:</span> "That's a great point! I'll note it for your design consultant to cover in
                detail during the appointment. Let's get that scheduled so they can give you the full scoop."
              </q-card-section>
            </q-card>

            <q-card class="rationale-card" flat>
              <q-card-section class="bg-grey-2">
                <q-icon name="fas fa-lightbulb" color="amber" class="q-mr-sm" />
                <span class="text-weight-medium text-italic">Rationale:</span> This keeps the focus on booking, ensures all details reach sales, and avoids
                overcommitting over the phone, setting a professional tone for the visit.
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>

        <q-card class="note-card q-mb-md" flat>
          <q-card-section class="bg-green-1 text-center">
            <q-icon name="fas fa-star" color="secondary" class="q-mr-sm" />
            <span class="text-body1 text-italic">
              Your knack for these chats builds trust and sets up sales for success—every win boosts your
              commissions. We're here to back you up!
            </span>
          </q-card-section>
        </q-card>

        <div class="text-center text-h6 text-secondary text-italic text-weight-medium">
          A luxurious look. A cut above.
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.header-card
  .bg-gradient-primary
    background: linear-gradient(90deg, #9945FF 0%, #14F195 100%)

.letter-spacing
  letter-spacing: 2px

.objection-section
  transition: transform 0.2s, box-shadow 0.2s
  
  &:hover
    transform: translateY(-2px)
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15)

.objection-card,
.response-card,
.rationale-card
  border-radius: 8px
  
.intro-card
  border-left: 5px solid $secondary
</style>
