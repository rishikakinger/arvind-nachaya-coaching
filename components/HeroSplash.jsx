import { ShaderBackground } from "./ShaderBackground";

export function HeroSplash() {
  return (
    <section className="hero-full" id="home">
      <ShaderBackground />
      <div className="container">
        <h1 className="hero-h1">
          Executive Coaching for Leaders Navigating Growth, Transition, and
          Complexity
        </h1>
      </div>

      <a href="#intro" className="hero-scroll-cue">
        <span>Scroll</span>
        <span className="hero-scroll-cue-line" />
      </a>
    </section>
  );
}
