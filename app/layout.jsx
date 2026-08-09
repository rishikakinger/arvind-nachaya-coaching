import "./globals.css";
import { SiteScript } from "@/components/SiteScript";

export const viewport = {
  themeColor: "#102733",
};

export const metadata = {
  title: "Arvind Nachaya | Executive Coaching for Growth, Transition and Complexity",
  description:
    "Private and organisation-sponsored executive coaching for senior leaders, founders and emerging executives. Build strategic clarity, executive presence, resilient leadership and sustained impact through the P.A.C.T. coaching architecture.",
  openGraph: {
    title: "Arvind Nachaya | Executive Coach",
    description:
      "Private and organisation-sponsored coaching that helps leaders move from complexity to perspective, alignment, grounded decisions and sustained action.",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Solutions at Source Consulting",
  founder: {
    "@type": "Person",
    name: "Arvind Nachaya",
    jobTitle: "Executive Coach and Founder",
  },
  description:
    "Private and organisation-sponsored executive coaching for leaders navigating growth, transition and complexity.",
  email: "mailto:arvind@solutionsatsource.in",
  telephone: "+91 9930407361",
  areaServed: "Worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <header className="site-header" id="top">
          <div className="container nav-wrap">
            <a className="brand" href="/#top" aria-label="Arvind Nachaya home">
              <span className="brand-mark" aria-hidden="true">
                AN
              </span>
              <span className="brand-copy">
                <strong>Arvind Nachaya</strong>
                <small>Executive Coach</small>
              </span>
            </a>

            <button className="menu-button" aria-expanded="false" aria-controls="primary-nav">
              <span></span>
              <span></span>
              <span></span>
              <span className="sr-only">Open navigation</span>
            </button>

            <nav className="primary-nav" id="primary-nav" aria-label="Primary navigation">
              <a href="/#approach">Approach</a>
              <a href="/#pact">P.A.C.T.</a>
              <a href="/#focus">Focus</a>
              <a href="/#ways-to-work">Ways to Work</a>
              <a href="/#about">About</a>
              <a
                className="nav-cta"
                href="mailto:arvind@solutionsatsource.in?subject=Discovery%20Conversation"
              >
                Book a conversation
              </a>
            </nav>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <a className="brand footer-brand" href="/#top">
                <span className="brand-mark">AN</span>
                <span className="brand-copy">
                  <strong>Arvind Nachaya</strong>
                  <small>Founder, Solutions at Source Consulting</small>
                </span>
              </a>
            </div>
            <div className="footer-links">
              <a href="/#approach">Approach</a>
              <a href="/#pact">P.A.C.T.</a>
              <a href="/#ways-to-work">Ways to Work</a>
              <a href="/#about">About</a>
            </div>
            <div className="footer-contact">
              <a href="mailto:arvind@solutionsatsource.in">Email</a>
              <a href="tel:+919930407361">Call</a>
              <a
                href="https://www.linkedin.com/in/arvindnachaya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>
              © <span id="year"></span> Arvind Nachaya. All rights reserved.
            </span>
            <span>Private and organisation-sponsored coaching · Global engagements</span>
          </div>
        </footer>

        <SiteScript />
      </body>
    </html>
  );
}
