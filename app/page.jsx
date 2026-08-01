import { Reveal } from "@/components/Reveal";
import { HeroSplash } from "@/components/HeroSplash";
import { PullQuote } from "@/components/PullQuote";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { BookingDialog } from "@/components/BookingDialog";
import { BlogCard } from "@/components/BlogCard";
import { AnimatedGroup } from "@/components/core/animated-group";
import { getAllPosts } from "@/lib/posts";

const CREDIBILITY_ITEMS = [
  "PCC, International Coaching Federation",
  "Former Banking & Business Leader",
  "Coaching leaders across industries and geographies",
];

const SEEKING_ITEMS = [
  "Sharper strategic thinking and stronger decisions",
  "Greater confidence in uncertainty and change",
  "More aligned, accountable, high-performing teams",
  "Stronger executive presence and influence",
  "Greater resilience under pressure",
  "Clearer alignment between values and action",
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSplash />

      <section className="section hero-intro" id="intro">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">What Leaders Often Seek</div>
            <h2>Through coaching, leaders gain</h2>
          </Reveal>

          <AnimatedGroup className="why-chip-grid">
            {SEEKING_ITEMS.map((item) => (
              <div className="why-chip" key={item}>
                <span className="why-chip-icon">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </AnimatedGroup>

          <Reveal className="hero-audience-tags">
            <span className="stat">Senior Leaders</span>
            <span className="stat">Founders</span>
            <span className="stat">Emerging Executives</span>
          </Reveal>

          <Reveal className="hero-intro-copy">
            <p className="lead">
              I work with senior leaders, founders, and emerging executives to
              strengthen strategic thinking, executive presence, team leadership,
              and resilience, helping them lead with greater clarity, confidence,
              and lasting impact.
            </p>
            <blockquote className="hero-aside">
              In today&apos;s demanding business environment, leadership calls for
              far more than experience or technical expertise. It requires
              perspective, self-awareness, adaptability, and the ability to stay
              clear-headed under pressure. My coaching helps leaders develop these
              qualities so they lead with greater presence and purpose, stay
              aligned with their values, and grow confident in their decision
              making.
            </blockquote>

            <div className="btn-group">
              <BookingDialog triggerClassName="btn btn-primary">
                Book a Discovery Conversation
              </BookingDialog>
              <a href="#approach" className="btn btn-secondary">
                Explore My Coaching Approach
              </a>
            </div>
          </Reveal>

          <div className="credibility-strip">
            <div className="credibility-track">
              {[...CREDIBILITY_ITEMS, ...CREDIBILITY_ITEMS].map((item, i) => (
                <div className="credibility-item" key={i} aria-hidden={i >= CREDIBILITY_ITEMS.length}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PullQuote>
        Coaching offers a space to pause, reflect deeply, and move forward with
        greater intention.
      </PullQuote>

      <section className="section" id="who">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Who I Work With</div>
            <h2>Trusted coaching for leaders operating in high-stakes environments</h2>
            <p className="lead">
              I work with leaders who are looking for a trusted thinking partner to
              help them navigate complexity, growth, pressure, and change.
            </p>
          </Reveal>

          <AnimatedGroup className="grid-2">
            <div className="card glass">
              <h3>My clients typically include</h3>
              <ul className="list">
                <li>Senior executives and business heads in large domestic and global corporations</li>
                <li>Founders and entrepreneurs</li>
                <li>Directors and functional leaders</li>
                <li>Mid-level leaders preparing for broader responsibilities</li>
                <li>Professionals in transition seeking greater purpose and effectiveness in how they lead</li>
              </ul>
            </div>
            <div className="card glass">
              <h3>Range and depth of my coaching work</h3>
              <p>
                My coaching spans industries and geographies, supporting leaders
                from mid-management to Senior Management.
              </p>
              <p>
                A significant share of my work has been with Managing Directors,
                Directors, and Business Unit Heads.
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      <section className="section" id="challenges">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">What Leaders Bring to Coaching</div>
            <h2>Leadership challenges are rarely about capability alone</h2>
            <p className="lead">
              Leaders rarely come to coaching because they lack ability. More
              often, they seek support because the demands of leadership have
              become more complex, more visible, and more consequential.
            </p>
          </Reveal>

          <AnimatedGroup className="grid-3">
            <div className="card glass"><h3>Bigger-picture thinking</h3><p>Thinking more strategically and gaining clarity while making decisions.</p></div>
            <div className="card glass"><h3>Steady under change</h3><p>Leading with greater confidence during uncertainty.</p></div>
            <div className="card glass"><h3>Stronger teams</h3><p>Building stronger, more accountable teams.</p></div>
            <div className="card glass"><h3>Stepping into bigger roles</h3><p>Navigating transitions into broader or more senior roles.</p></div>
            <div className="card glass"><h3>Staying grounded</h3><p>Developing resilience in high-pressure environments.</p></div>
            <div className="card glass"><h3>Navigating hard calls</h3><p>Gaining clarity on difficult people, business, or career decisions.</p></div>
            <div className="card glass"><h3>Showing up as a leader</h3><p>Strengthening executive presence and influence.</p></div>
            <div className="card glass"><h3>Living your values at work</h3><p>Aligning personal values with professional leadership.</p></div>
            <div className="card glass"><h3>Unlearning what holds you back</h3><p>Breaking patterns that may be limiting growth or effectiveness.</p></div>
          </AnimatedGroup>
        </div>
      </section>

      <section className="section" id="focus">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Coaching Focus</div>
            <h2>Five core capabilities for effective, sustainable leadership</h2>
            <p className="lead">
              My work with leaders is centered around five core capabilities that
              are essential for effective and sustainable leadership.
            </p>
          </Reveal>

          <div className="timeline">
            {[
              ["01", "Strategic Thinking", "Strengthening the ability to step back, see the bigger picture, challenge assumptions, and approach problems with greater clarity and creativity."],
              ["02", "Team Excellence", "Helping leaders build aligned, high-performing teams rooted in trust, accountability, and shared purpose."],
              ["03", "Purpose-Driven Leadership", "Supporting leaders in connecting vision, purpose, and values with their everyday decisions and actions."],
              ["04", "Executive Presence", "Developing credibility, influence, communication, and relationship-building so leaders can lead with both authority and authenticity."],
              ["05", "Emotional Resilience", "Building the inner steadiness needed to handle ambiguity, pressure, setbacks, and change with maturity and composure."],
            ].map(([num, title, body]) => (
              <Reveal key={num} className="step">
                <div className="step-number">{num}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="philosophy">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">My Coaching Philosophy</div>
            <h2>Meaningful development comes from expanded awareness and deeper perspective</h2>
          </Reveal>

          <AnimatedGroup className="grid-2">
            <div className="card glass">
              <p>
                I believe every individual has the capacity for meaningful growth.
                Leadership development is not simply about learning new
                techniques. It is about expanding awareness, deepening
                perspective, and building the inner capability to lead more
                consciously and effectively.
              </p>
              <p>
                My role as a coach is to create a space that is safe, thoughtful,
                and appropriately challenging, where leaders can reflect openly,
                examine their current ways of thinking, and discover new
                possibilities for action.
              </p>
            </div>
            <div className="card glass">
              <h3>Through this process, clients are able to:</h3>
              <ul className="list">
                <li>Gain clarity on complex challenges</li>
                <li>Recognize patterns that may be limiting their leadership</li>
                <li>Make stronger, more grounded decisions</li>
                <li>Create practical pathways toward meaningful goals</li>
                <li>Build the confidence and courage needed for lasting change</li>
              </ul>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      <PullQuote>
        I do not believe in one-size-fits-all coaching. Every engagement is
        shaped by the individual, their context, and the outcomes they want to
        create.
      </PullQuote>

      <section className="section" id="approach">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">How I Work</div>
            <h2>A structured coaching process tailored to the individual</h2>
            <p className="lead">
              Every coaching engagement is tailored to the individual, but most
              follow a thoughtful and structured progression. The process is
              rigorous yet human, reflective yet practical, and always grounded
              in the realities of leadership.
            </p>
          </Reveal>

          <div className="timeline">
            {[
              ["01", "Discovery", "We begin by understanding your context, leadership challenges, aspirations, and what meaningful progress would look like."],
              ["02", "Reflection and Assessment", "We explore strengths, patterns, blind spots, and the internal and external factors shaping your leadership."],
              ["03", "Goal Alignment", "Together, we define clear coaching priorities and outcomes that matter to your role, your team, and your growth."],
              ["04", "Coaching Conversations", "Through focused one-to-one sessions, we work on building insight, perspective, confidence, and practical movement on the issues that matter most."],
              ["05", "Integration and Action", "Coaching creates the most impact when insight turns into action. I support clients in translating reflection into behavioral shifts, better decisions, and sustained leadership growth."],
            ].map(([num, title, body]) => (
              <Reveal key={num} className="step">
                <div className="step-number">{num}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Why Clients Choose to Work With Me</div>
            <h2>Professional coaching expertise shaped by lived leadership experience</h2>
          </Reveal>

          <AnimatedGroup className="why-layout">
            <div className="card glass why-stat">
              <span className="why-stat-number">20+</span>
              <span className="why-stat-label">
                Years across banking leadership and executive coaching
              </span>
            </div>
            <div className="card glass">
              <p>
                What I bring to coaching is a blend of professional coaching
                expertise and lived leadership experience.
              </p>
              <p>
                With over two decades as a Senior banking executive and several
                years devoted to executive coaching, I understand leadership not
                only as a concept but as a real responsibility. I have led large
                and diverse teams, managed growth mandates, worked within complex
                institutions, and experienced firsthand the pressures leaders
                face when performance, people, and expectations all converge.
              </p>
            </div>
          </AnimatedGroup>

          <p className="why-chip-lead">Clients value working with me because I bring</p>
          <AnimatedGroup className="why-chip-grid">
            {[
              "Real-world leadership experience",
              "Deep coaching presence and listening",
              "Strategic and commercial understanding",
              "Sensitivity to the emotional side of leadership",
              "A balanced approach that is both reflective and practical",
              "Global coaching experience",
            ].map((item) => (
              <div className="why-chip" key={item}>
                <span className="why-chip-icon">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <PullQuote>
        My coaching helps leaders think more clearly, lead more consciously,
        and act with greater intention.
      </PullQuote>

      <section className="section" id="results">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">What Clients Gain</div>
            <h2>Meaningful shifts in how leaders think, lead, and show up</h2>
            <p className="lead">
              Every coaching journey is different, but clients often experience
              meaningful shifts in how they think, lead, and show up. The value
              of coaching lies not only in addressing immediate leadership
              challenges, but also in helping leaders build capabilities that
              continue long after the engagement ends.
            </p>
          </Reveal>

          <AnimatedGroup className="grid-4">
            {[
              "Greater strategic clarity",
              "Improved confidence in decision-making",
              "Stronger leadership presence",
              "Better stakeholder relationships",
              "More effective teams",
              "Increased self-awareness",
              "Greater alignment between values and action",
              "Stronger resilience under pressure",
            ].map((item) => (
              <div className="card glass" key={item}>
                <h3>{item}</h3>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">About Arvind</div>
            <h2>Executive coach, investor, and former business leader</h2>
          </Reveal>

          <AnimatedGroup className="grid-2">
            <div className="card glass">
              <p>
                I am an executive coach, investor, and former business leader
                with a career spanning commercial banking, business leadership,
                investing, and leadership development.
              </p>
              <p>
                I am the Founder of Solutions at Source Consulting, where I
                support leaders in thriving within today&apos;s complex business
                landscape through evidence-based coaching frameworks.
              </p>
              <p>
                Before focusing more deeply on coaching, I spent over two decades
                in leadership roles across India&apos;s commercial banking sector,
                including senior positions at HSBC, Citi, and ICICI Bank. These
                experiences gave me direct exposure to the strategic,
                operational, and human dimensions of leadership at scale.
              </p>
              <p>
                Today, I bring that experience into my coaching work, helping
                leaders grow not only in performance, but also in clarity,
                presence, resilience, and impact.
              </p>
            </div>
            <div className="card glass">
              <h3>Coaching Credentials</h3>
              <ul className="list">
                <li>Professional Certified Coach (PCC) – International Coaching Federation</li>
                <li>Professional Transformative Coach – CMA Singapore</li>
                <li>Member, ICF Bangalore Chapter</li>
              </ul>
              <h3 style={{ marginTop: "22px" }}>Leadership Background</h3>
              <ul className="list">
                <li>Investor in the Indian startup ecosystem and venture debt fund</li>
                <li>Investor and Head of Business – Stride Fintree Pvt Ltd</li>
                <li>External Risk Committee Member – Stride Fintree Pvt Ltd</li>
                <li>Director &amp; Business Head, SME – HSBC Bank</li>
                <li>Director roles at Citi Bank</li>
                <li>Group Cluster Head, SME – ICICI Bank</li>
              </ul>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Industries &amp; Client Profile</div>
            <h2>Leaders across sectors, markets, and organizational contexts</h2>
          </Reveal>

          <AnimatedGroup className="grid-2">
            <div className="card glass">
              <p>
                My coaching work has spanned a wide range of sectors, including
                manufacturing, software, consulting, finance, utilities, media,
                education, startups, retail, and real estate.
              </p>
              <p>
                Having coached leaders across all continents, I bring an
                appreciation for cultural nuance, varied work dynamics, and the
                different leadership realities that emerge across markets and
                organizational settings.
              </p>
            </div>
            <div className="card glass">
              <h3>This breadth enables me to work effectively with leaders while staying grounded in the universal demands of leadership</h3>
              <ul className="list">
                <li>Thinking clearly</li>
                <li>Leading people well</li>
                <li>Navigating uncertainty</li>
                <li>Delivering results</li>
              </ul>
              <p style={{ marginTop: "4px" }}>
                A substantial portion of my clients have been senior leaders,
                including Managing Directors, Directors, and Business Unit
                Heads, alongside high-potential mid-level leaders preparing for
                broader mandates.
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Testimonials</div>
            <h2>What clients say</h2>
          </Reveal>

          <AnimatedGroup className="grid-3">
            <div className="quote card glass">
              &quot;Arvind brings a rare combination of business wisdom, calm
              presence, and the ability to ask exactly the right question at
              the right time.&quot;
              <span>Client Perspective</span>
            </div>
            <div className="quote card glass">
              &quot;Our work together helped me think more clearly, lead with
              more confidence, and navigate a critical transition with far
              greater effectiveness.&quot;
              <span>Client Perspective</span>
            </div>
            <div className="quote card glass">
              &quot;He combines executive insight with genuine coaching depth,
              making every conversation both practical and transformative.&quot;
              <span>Client Perspective</span>
            </div>
          </AnimatedGroup>
          <Reveal as="p" className="testimonial-note">
            Sample quotes shown as placeholders — to be replaced with real
            client testimonials.
          </Reveal>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="section" id="insights">
          <div className="container">
            <Reveal className="section-head">
              <div className="eyebrow">Insights</div>
              <h2>Latest from the blog</h2>
            </Reveal>
            <AnimatedGroup className="blog-grid">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </AnimatedGroup>
          </div>
        </section>
      )}

      <section className="section" id="faq">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">FAQ</div>
            <h2>Frequently asked questions</h2>
          </Reveal>
          <FaqAccordion />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <Reveal className="cta glass">
            <div className="cta-grid">
              <div>
                <div className="eyebrow">Begin the Conversation</div>
                <h2>Lead with greater perspective, confidence, and purpose</h2>
                <p className="lead">
                  Leadership can be demanding, especially when the stakes are
                  high and the path ahead is not always clear. A thoughtful
                  coaching partnership can help you lead with greater
                  perspective, confidence, and purpose.
                </p>
                <p>
                  If you are navigating growth, transition, complexity, or a
                  broader leadership mandate, I would be glad to explore
                  whether coaching could support you.
                </p>
                <ContactForm />
              </div>

              <div className="contact-box">
                <strong>Arvind Nachaya</strong>
                <p>Founder, Solutions at Source Consulting</p>
                <p>
                  <a href="mailto:arvind@solutionsatsource.in">arvind@solutionsatsource.in</a>
                </p>
                <p>
                  <a href="tel:+919930407361">+91 9930407361</a>
                </p>
                <p>
                  <a href="#" title="LinkedIn link to be added">LinkedIn: Arvind Nachaya</a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
