import { Reveal } from "./Reveal";

export function PullQuote({ children }) {
  return (
    <section className="section pull-quote-section">
      <div className="container">
        <Reveal className="pull-quote">
          <blockquote>{children}</blockquote>
        </Reveal>
      </div>
    </section>
  );
}
