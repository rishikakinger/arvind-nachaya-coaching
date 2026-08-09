export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" aria-hidden="true"></div>
        <div className="hero-glow glow-two" aria-hidden="true"></div>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              ICF Professional Certified Coach · Former Banking and Business Leader
            </p>
            <h1>
              Executive coaching for leaders navigating{" "}
              <em>growth, transition and complexity.</em>
            </h1>
            <p className="hero-lead">
              I work with senior leaders, founders and emerging executives to strengthen
              strategic thinking, executive presence, team leadership and resilience. Leaders
              may engage me privately and independently of their employer, or through an
              organisation-sponsored coaching journey.
            </p>
            <p className="hero-support">
              In either setting, coaching creates a confidential space to pause, reflect
              deeply and move forward with greater intention.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://calendly.com/arvind-solutionsatsource/30min?utm_source=website&utm_campaign=discovery-conversation"
                target="_blank"
                rel="noopener noreferrer"
                data-calendly-popup
              >
                Book a discovery conversation
              </a>
              <a className="button button-secondary" href="#ways-to-work">
                See ways to work together
              </a>
            </div>
          </div>

          <div className="hero-model reveal" aria-label="P.A.C.T. coaching model visual">
            <div className="model-shell">
              <div className="model-orbit orbit-one"></div>
              <div className="model-orbit orbit-two"></div>
              <div className="model-centre">
                <span>The leader and the</span>
                <strong>live challenge</strong>
              </div>
              <div className="model-node node-p">
                <b>P</b>
                <span>Possibilities</span>
              </div>
              <div className="model-node node-a">
                <b>A</b>
                <span>Alignment</span>
              </div>
              <div className="model-node node-c">
                <b>C</b>
                <span>Clarity</span>
              </div>
              <div className="model-node node-t">
                <b>T</b>
                <span>Transformation</span>
              </div>
            </div>
            <div className="model-caption">
              <span>Context &amp; System</span>
              <span>Dynamic lenses, not a fixed funnel</span>
              <span>Evidence &amp; Sustainment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="credibility" aria-label="Credentials and experience">
        <div className="container credibility-grid">
          <div>
            <strong>PCC</strong>
            <span>International Coaching Federation</span>
          </div>
          <div>
            <strong>20+ years</strong>
            <span>Corporate and business leadership</span>
          </div>
          <div>
            <strong>Global</strong>
            <span>Coaching across industries and cultures</span>
          </div>
          <div>
            <strong>1,300+</strong>
            <span>Session records informing the model</span>
          </div>
        </div>
      </section>

      <section className="section section-intro" id="approach">
        <div className="container two-col">
          <div className="section-heading reveal">
            <p className="eyebrow">A trusted thinking partnership</p>
            <h2>Leaders rarely bring abstract leadership problems.</h2>
          </div>
          <div className="prose reveal">
            <p className="lead">
              They bring live situations where performance, people, judgement and
              expectations converge.
            </p>
            <p>
              The issue may be a high-stakes decision, an inherited team, a strategic
              transition, a stakeholder impasse, a difficult conversation or the need to lead
              through ambiguity without losing clarity or trust.
            </p>
            <p>
              My coaching begins with the reality the leader is facing. It provides a safe,
              thoughtful and appropriately challenging space to step back, examine
              assumptions, understand what matters and build a practical path forward.
            </p>
          </div>
        </div>

        <div className="container audience-grid">
          <article className="audience-card reveal">
            <span>01</span>
            <h3>Senior executives and business heads</h3>
            <p>Leading through complexity, strategic change and consequential decisions.</p>
          </article>
          <article className="audience-card reveal">
            <span>02</span>
            <h3>Founders and entrepreneurs</h3>
            <p>Scaling themselves, their teams and the leadership system around the business.</p>
          </article>
          <article className="audience-card reveal">
            <span>03</span>
            <h3>Directors and functional leaders</h3>
            <p>Strengthening influence, executive presence and cross-functional leadership.</p>
          </article>
          <article className="audience-card reveal">
            <span>04</span>
            <h3>Emerging leaders in transition</h3>
            <p>
              Preparing for broader responsibility, greater visibility and a new leadership
              identity.
            </p>
          </article>
        </div>
      </section>

      <section className="section work-modes-section" id="ways-to-work">
        <div className="container">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow">Ways to work together</p>
              <h2>Coaching can begin with you, or with your organisation.</h2>
            </div>
            <p>
              The coaching architecture remains the same. What changes is how the engagement
              is contracted, how goals are aligned and whether an organisational sponsor is
              involved.
            </p>
          </div>

          <div className="work-modes-grid">
            <article className="work-mode-card work-mode-private reveal">
              <p className="mode-label">Private executive coaching</p>
              <h3>For leaders choosing to invest in their own development.</h3>
              <p>
                You may wish to work with a coach independently of your company, without
                waiting for a formal leadership programme or organisational nomination. The
                engagement is contracted directly with you, and your agenda remains entirely
                your own.
              </p>
              <ul>
                <li>A confidential thinking space with no organisational sponsor</li>
                <li>Goals shaped around your leadership, career and personal context</li>
                <li>
                  Support through role transitions, difficult decisions, stakeholder
                  challenges or a search for greater purpose
                </li>
                <li>
                  Flexible three-, six- or twelve-month journeys depending on the depth of
                  work required
                </li>
              </ul>
              <a
                className="button button-primary"
                href="https://calendly.com/arvind-solutionsatsource/30min?utm_source=website&utm_campaign=private-coaching"
                target="_blank"
                rel="noopener noreferrer"
                data-calendly-popup
              >
                Explore private coaching
              </a>
            </article>

            <article className="work-mode-card work-mode-sponsored reveal">
              <p className="mode-label">Organisation-sponsored coaching</p>
              <h3>For CHROs, talent leaders and businesses developing critical leaders.</h3>
              <p>
                Organisation-sponsored engagements connect the leader’s development with the
                business context while protecting the confidentiality necessary for honest
                reflection and meaningful change.
              </p>
              <ul>
                <li>Clear three-way alignment between the leader, sponsor and coach</li>
                <li>Defined confidentiality boundaries and success markers</li>
                <li>Optional stakeholder inputs, assessments and progress reviews</li>
                <li>
                  Integration with transitions, succession, transformation or
                  leadership-development priorities
                </li>
              </ul>
              <a
                className="button button-outline"
                href="https://calendly.com/arvind-solutionsatsource/30min?utm_source=website&utm_campaign=organisation-sponsored"
                target="_blank"
                rel="noopener noreferrer"
                data-calendly-popup
              >
                Discuss organisational coaching
              </a>
            </article>
          </div>

          <div className="confidentiality-note reveal">
            <strong>Confidentiality is foundational.</strong>
            <span>
              In private coaching, there is no reporting to an employer. In sponsored
              coaching, the boundaries of information-sharing are agreed at the outset, while
              the content of coaching conversations remains confidential.
            </span>
          </div>
        </div>
      </section>

      <section className="section themes-section">
        <div className="container">
          <div className="section-heading centred reveal">
            <p className="eyebrow">What leaders often bring to coaching</p>
            <h2>Complexity becomes workable when the right questions are held.</h2>
          </div>
          <div className="theme-cloud reveal" role="list">
            <span role="listitem">Strategic thinking</span>
            <span role="listitem">High-stakes decisions</span>
            <span role="listitem">Executive presence</span>
            <span role="listitem">Leadership transitions</span>
            <span role="listitem">Stakeholder influence</span>
            <span role="listitem">Team accountability</span>
            <span role="listitem">Values under pressure</span>
            <span role="listitem">Emotional resilience</span>
            <span role="listitem">Career direction</span>
            <span role="listitem">Breaking limiting patterns</span>
          </div>
        </div>
      </section>

      <section className="section pact-section" id="pact">
        <div className="container">
          <div className="pact-intro reveal">
            <div>
              <p className="eyebrow light">My coaching architecture</p>
              <h2>The P.A.C.T. Executive Coaching Architecture</h2>
            </div>
            <p>
              P.A.C.T. helps leaders move from complexity to perspective, alignment, grounded
              decisions and sustained action. The four lenses are dynamic. A leader may enter
              through any one of them depending on the live situation.
            </p>
          </div>

          <div className="architecture reveal">
            <div className="architecture-band band-top">
              <strong>Context &amp; System</strong>
              <span>
                Mandate · Sponsor alignment · Culture · Stakeholders · Constraints ·
                Confidentiality
              </span>
            </div>

            <div className="lens-layout">
              <div className="lens-tabs" role="tablist" aria-label="P.A.C.T. lenses">
                <button className="lens-tab active" data-lens="p" role="tab" aria-selected="true">
                  <b>P</b>
                  <span>Possibilities</span>
                </button>
                <button className="lens-tab" data-lens="a" role="tab" aria-selected="false">
                  <b>A</b>
                  <span>Alignment</span>
                </button>
                <button className="lens-tab" data-lens="c" role="tab" aria-selected="false">
                  <b>C</b>
                  <span>Clarity</span>
                </button>
                <button className="lens-tab" data-lens="t" role="tab" aria-selected="false">
                  <b>T</b>
                  <span>Transformation</span>
                </button>
              </div>

              <div className="lens-detail" aria-live="polite">
                <p className="lens-kicker">P · Possibilities</p>
                <h3>Widen the field of view.</h3>
                <p>
                  Surface assumptions, patterns, choices and options that are difficult to see
                  from inside the immediate problem. Explore what becomes possible when the
                  leader steps beyond the familiar frame.
                </p>
                <div className="lens-question">
                  What are we not yet seeing, and what new choice becomes available if the
                  frame changes?
                </div>
              </div>
            </div>

            <div className="architecture-band band-bottom">
              <strong>Evidence &amp; Sustainment</strong>
              <span>
                Observable outcomes · Leader experiments · Stakeholder pulse · Behaviour
                evidence · 60/90-day review
              </span>
            </div>
          </div>

          <div className="pact-proof reveal">
            <p>
              <strong>Practice-grounded.</strong> The refined architecture emerged from a
              structured review of 1,326 dated coaching-session records across emerging,
              mid-level and senior-leader populations, together with client feedback. It
              reflects an established coaching practice rather than a model imposed after the
              fact.
            </p>
          </div>

          <div className="motion-grid">
            <article className="motion-card reveal">
              <span className="motion-number">01</span>
              <h3>Navigate the Maze</h3>
              <p>
                Enter the live issue and explore the unknowns, stakeholders, constraints,
                assumptions and emotional charge without simplifying too early.
              </p>
            </article>
            <article className="motion-card reveal">
              <span className="motion-number">02</span>
              <h3>Reflect &amp; Nudge</h3>
              <p>
                Create a psychologically safe yet rigorous space for self-observation, pattern
                recognition, perspective shifts and choice.
              </p>
            </article>
            <article className="motion-card reveal">
              <span className="motion-number">03</span>
              <h3>Anchor Change</h3>
              <p>
                Translate insight into an explicit experiment, conversation, decision,
                operating principle or behaviour that can be practised and sustained.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="focus">
        <div className="container">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow">My coaching focus</p>
              <h2>Five capabilities that strengthen leadership impact.</h2>
            </div>
            <p>
              Every engagement is shaped by the leader, the context and the outcomes that
              matter. These capabilities recur across assignments and leadership levels.
            </p>
          </div>

          <div className="focus-grid">
            <article className="focus-card reveal">
              <div className="focus-icon">↗</div>
              <h3>Strategic Thinking</h3>
              <p>
                Step back, see the larger system, challenge assumptions and approach decisions
                with greater clarity and creativity.
              </p>
            </article>
            <article className="focus-card reveal">
              <div className="focus-icon">◎</div>
              <h3>Team Excellence</h3>
              <p>
                Build aligned, high-performing teams rooted in trust, accountability,
                capability and shared purpose.
              </p>
            </article>
            <article className="focus-card reveal">
              <div className="focus-icon">◇</div>
              <h3>Purpose-Driven Leadership</h3>
              <p>
                Connect vision, values and leadership identity to everyday choices, behaviour
                and responsibility.
              </p>
            </article>
            <article className="focus-card reveal">
              <div className="focus-icon">◌</div>
              <h3>Executive Presence</h3>
              <p>
                Strengthen credibility, influence, communication and relationships so authority
                and authenticity reinforce each other.
              </p>
            </article>
            <article className="focus-card reveal">
              <div className="focus-icon">≈</div>
              <h3>Emotional Resilience</h3>
              <p>
                Build the inner steadiness to navigate ambiguity, setbacks, pressure and change
                with maturity and composure.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section levels-section">
        <div className="container">
          <div className="section-heading centred reveal">
            <p className="eyebrow">One model, three leadership contexts</p>
            <h2>The architecture stays constant. The leadership pressure point changes.</h2>
          </div>
          <div className="levels-grid">
            <article className="level-card reveal">
              <p className="level-label">Emerging managers</p>
              <h3>From self to team</h3>
              <ul>
                <li>New-manager identity</li>
                <li>Expectations and feedback</li>
                <li>Delegation with boundaries</li>
                <li>Confidence and follow-through</li>
              </ul>
            </article>
            <article className="level-card reveal">
              <p className="level-label">Mid-level managers</p>
              <h3>From unit leadership to influence</h3>
              <ul>
                <li>Managing up and across</li>
                <li>Strategic thinking</li>
                <li>Stakeholder alignment</li>
                <li>Team capability and visibility</li>
              </ul>
            </article>
            <article className="level-card reveal">
              <p className="level-label">Senior leaders and directors+</p>
              <h3>From effectiveness to system movement</h3>
              <ul>
                <li>Ambiguity and judgement</li>
                <li>Leading leaders</li>
                <li>Values under pressure</li>
                <li>Organisation-level alignment</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section ai-section" id="organisations">
        <div className="container ai-grid">
          <div className="ai-copy reveal">
            <p className="eyebrow">Leadership in the age of AI disruption</p>
            <h2>
              Technology changes the context. The human work of leadership becomes more
              consequential.
            </h2>
            <p>
              As organisations redesign work around AI, leaders need more than tool fluency.
              They need judgement, agency, stakeholder trust and the ability to translate
              possibility into responsible operating choices.
            </p>
            <p>
              The P.A.C.T. architecture helps leaders convert AI disruption into sound
              decisions, aligned stakeholders, redesigned work and sustained human behaviour
              change.
            </p>
            <a
              className="text-link"
              href="https://calendly.com/arvind-solutionsatsource/30min?utm_source=website&utm_campaign=ai-era-leadership"
              target="_blank"
              rel="noopener noreferrer"
              data-calendly-popup
            >
              Discuss an AI-era leadership journey <span>→</span>
            </a>
          </div>
          <div className="ai-cards">
            <article className="ai-card reveal">
              <span>01</span>
              <h3>Possibility to judgement</h3>
              <p>
                Test assumptions, strengthen verification and retain clear human
                accountability.
              </p>
            </article>
            <article className="ai-card reveal">
              <span>02</span>
              <h3>Strategy to operating model</h3>
              <p>
                Translate ambition into roles, workflows, decision rights and practical
                experiments.
              </p>
            </article>
            <article className="ai-card reveal">
              <span>03</span>
              <h3>Anxiety to agency</h3>
              <p>
                Help leaders and teams locate their distinctive human contribution and act
                purposefully.
              </p>
            </article>
            <article className="ai-card reveal">
              <span>04</span>
              <h3>Deployment to trust</h3>
              <p>
                Build a coherent narrative, stakeholder participation, guardrails and realistic
                expectations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section engagement-section">
        <div className="container">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow">How engagements work</p>
              <h2>Rigorous yet human. Reflective yet practical.</h2>
            </div>
            <p>
              The coaching model is dynamic, while every engagement is clearly contracted,
              aligned and reviewed—directly with the leader in private coaching, and with
              agreed sponsor involvement where the organisation funds the journey.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item reveal">
              <span>01</span>
              <div>
                <h3>Discovery and context</h3>
                <p>
                  Understand the leader’s mandate, aspirations, business reality and what
                  meaningful progress would look like.
                </p>
              </div>
            </article>
            <article className="timeline-item reveal">
              <span>02</span>
              <div>
                <h3>Reflection and assessment</h3>
                <p>
                  Explore strengths, patterns, blind spots, stakeholder perspectives and the
                  internal and external factors shaping leadership.
                </p>
              </div>
            </article>
            <article className="timeline-item reveal">
              <span>03</span>
              <div>
                <h3>Goal and engagement alignment</h3>
                <p>
                  For private coaching, priorities are defined directly with the leader. For
                  organisation-sponsored coaching, this may also include sponsor alignment,
                  agreed confidentiality boundaries and observable markers of movement.
                </p>
              </div>
            </article>
            <article className="timeline-item reveal">
              <span>04</span>
              <div>
                <h3>Coaching conversations and experiments</h3>
                <p>
                  Use the P.A.C.T. lenses to build insight, perspective, judgement and
                  practical movement on the issues that matter most.
                </p>
              </div>
            </article>
            <article className="timeline-item reveal">
              <span>05</span>
              <div>
                <h3>Integration and sustainment</h3>
                <p>
                  Convert learning into behavioural shifts, operating rhythms, stakeholder
                  feedback and a 60/90-day sustainment plan.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="container outcomes-grid">
          <div className="outcomes-copy reveal">
            <p className="eyebrow light">What clients gain</p>
            <h2>Meaningful shifts in how leaders think, decide and show up.</h2>
            <p>
              The value of coaching lies not only in addressing the immediate challenge, but in
              building capabilities that continue after the engagement ends.
            </p>
          </div>
          <div className="outcome-list reveal">
            <span>Greater strategic clarity</span>
            <span>More grounded decisions</span>
            <span>Stronger executive presence</span>
            <span>Better stakeholder relationships</span>
            <span>Clearer team accountability</span>
            <span>Greater alignment between values and action</span>
            <span>More resilience under pressure</span>
            <span>Sustained habits and leadership practices</span>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading centred reveal">
            <p className="eyebrow">What clients say</p>
            <h2>Reflection that creates grounded and lasting movement.</h2>
          </div>

          <div className="testimonial-slider reveal" aria-roledescription="carousel">
            <button className="slider-button slider-prev" aria-label="Previous testimonial">
              ←
            </button>
            <div className="testimonial-track">
              <article className="testimonial active">
                <blockquote>
                  “Arvind doesn’t offer answers; he enables shifts, and those shifts endure.”
                </blockquote>
                <p>
                  <strong>Srinivas Burli</strong>
                  <span>Senior Director, Talent Acquisition · Twilio India</span>
                </p>
              </article>
              <article className="testimonial">
                <blockquote>
                  “He enabled me to think differently, stretch my perspectives and explore
                  possibilities I had not considered before.”
                </blockquote>
                <p>
                  <strong>Dr Lavanya Kannairam</strong>
                  <span>Senior Manager, Global Early Talent &amp; Regional TA · Caterpillar India</span>
                </p>
              </article>
              <article className="testimonial">
                <blockquote>
                  “His ability to ask the right questions helped me step back, appreciate the
                  bigger picture and arrive at my own answers.”
                </blockquote>
                <p>
                  <strong>Ipshita Ghosh</strong>
                  <span>Managing Director · Accenture</span>
                </p>
              </article>
              <article className="testimonial">
                <blockquote>
                  “His coaching was pragmatic, insight driven and deeply personal, helping me
                  translate my values into consistent leadership behaviours.”
                </blockquote>
                <p>
                  <strong>David Pearson</strong>
                  <span>Senior Brand Director · Mars, Chicago</span>
                </p>
              </article>
            </div>
            <button className="slider-button slider-next" aria-label="Next testimonial">
              →
            </button>
            <div className="slider-dots" aria-label="Choose testimonial"></div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual reveal">
            <div className="portrait-frame">
              <img
                src="/arvind-nachaya.jpg"
                alt="Portrait of Arvind Nachaya, executive coach"
                width={886}
                height={1069}
              />
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">About Arvind Nachaya</p>
            <h2>Coaching expertise grounded in lived leadership responsibility.</h2>
            <p>
              I am an executive coach, investor and former business leader with a career
              spanning commercial banking, business leadership, investing and leadership
              development.
            </p>
            <p>
              Before focusing more deeply on coaching, I spent over two decades in leadership
              roles across India’s commercial banking sector, including senior positions at
              HSBC, Citi and ICICI Bank. These experiences gave me direct exposure to the
              strategic, operational and human dimensions of leadership at scale.
            </p>
            <p>
              Today, as Founder of Solutions at Source Consulting, I support leaders across
              industries and geographies to grow in clarity, presence, resilience and impact
              through a practice-grounded coaching approach.
            </p>
            <div className="credentials">
              <div>
                <strong>Professional Certified Coach</strong>
                <span>International Coaching Federation</span>
              </div>
              <div>
                <strong>Professional Transformative Coach</strong>
                <span>CMA Singapore</span>
              </div>
              <div>
                <strong>Former Director and Business Head</strong>
                <span>HSBC, Citi and ICICI Bank</span>
              </div>
              <div>
                <strong>Investor and business advisor</strong>
                <span>Indian startup ecosystem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">Frequently asked questions</p>
            <h2>A clear starting point.</h2>
            <p>
              A discovery conversation is an opportunity to understand the context, explore the
              desired outcomes and assess whether the coaching partnership is the right fit.
            </p>
          </div>
          <div className="faq-list reveal">
            <details className="faq" open>
              <summary>Who is your coaching best suited for?</summary>
              <div className="faq-answer"><p>
                Senior leaders, founders, business heads, directors and emerging leaders who
                want to grow in effectiveness, clarity and leadership impact.
              </p></div>
            </details>
            <details className="faq" open>
              <summary>What kinds of issues can coaching help with?</summary>
              <div className="faq-answer"><p>
                Strategic thinking, leadership transitions, executive presence, stakeholder
                influence, team effectiveness, resilience, confidence and greater alignment
                between purpose and action.
              </p></div>
            </details>
            <details className="faq" open>
              <summary>Do you work only with senior executives?</summary>
              <div className="faq-answer"><p>
                No. Much of my work is with senior leaders, and I also work with mid-level and
                emerging leaders preparing for broader responsibility and influence.
              </p></div>
            </details>
            <details className="faq" open>
              <summary>Can I engage you privately, independently of my company?</summary>
              <div className="faq-answer"><p>
                Yes. Leaders can contract with me directly and fund their own coaching. No
                employer nomination or organisational sponsor is required, and the coaching
                goals are set entirely around what matters to you.
              </p></div>
            </details>
            <details className="faq" open>
              <summary>Will my company know that I am being coached?</summary>
              <div className="faq-answer"><p>
                Not in a privately contracted engagement. The relationship is confidential and
                there is no reporting to your employer. In organisation-sponsored coaching,
                information-sharing boundaries are agreed in advance, while the content of
                coaching conversations remains confidential.
              </p></div>
            </details>
            <details className="faq" open>
              <summary>Is coaching virtual or in person?</summary>
              <div className="faq-answer"><p>
                Engagements can be conducted virtually. In-person sessions may also be possible
                depending on context and location.
              </p></div>
            </details>
            <details className="faq" open>
              <summary>How long does an engagement usually last?</summary>
              <div className="faq-answer"><p>
                The duration depends on the goals and context. Focused engagements may run for
                three months, while broader leadership-development journeys commonly span six
                to twelve months.
              </p></div>
            </details>
            <details className="faq" open>
              <summary>How is coaching different from mentoring or consulting?</summary>
              <div className="faq-answer"><p>
                Coaching does not begin with ready-made answers. It helps the leader think more
                deeply, access their own clarity and take responsible action. Mentoring or
                consulting input, when useful, is clearly contracted rather than blended
                silently into the coaching conversation.
              </p></div>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid reveal">
          <div>
            <p className="eyebrow light">Begin the conversation</p>
            <h2>Choose the coaching route that fits your context.</h2>
            <p>
              Whether you are a leader seeking a private and confidential coaching partnership,
              or an organisation investing in the growth of a critical leader, the first
              conversation is an opportunity to clarify the need, the intended outcomes and
              whether the partnership is the right fit.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="button button-light"
              href="https://calendly.com/arvind-solutionsatsource/30min?utm_source=website&utm_campaign=private-coaching"
              target="_blank"
              rel="noopener noreferrer"
              data-calendly-popup
            >
              I am seeking private coaching
            </a>
            <a
              className="button button-ghost-light"
              href="https://calendly.com/arvind-solutionsatsource/30min?utm_source=website&utm_campaign=organisation-sponsored"
              target="_blank"
              rel="noopener noreferrer"
              data-calendly-popup
            >
              I represent an organisation
            </a>
            <a href="tel:+919930407361">+91 99304 07361</a>
            <a href="mailto:arvind@solutionsatsource.in">arvind@solutionsatsource.in</a>
          </div>
        </div>
      </section>
    </>
  );
}
