import "./globals.css";
import { Nav } from "@/components/Nav";
import { BackToTop } from "@/components/BackToTop";

export const metadata = {
  title: "Arvind Nachaya | Executive Coaching",
  description:
    "Executive coaching for leaders navigating growth, transition, and complexity. Work with Arvind Nachaya, PCC, on strategic thinking, executive presence, and resilient leadership.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-glow" aria-hidden="true"></div>
        <Nav />
        <main>{children}</main>
        <footer>
          <div className="container">© 2026 Arvind Nachaya. All rights reserved.</div>
        </footer>
        <BackToTop />
      </body>
    </html>
  );
}
