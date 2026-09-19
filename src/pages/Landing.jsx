import React from "react";
import Logo from "../components/Logo";
import dashboard from "../assets/screenshot-dashboard.png"
import learningAi from "../assets/learning-ai.png"
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-(--bg) text-(--ink) p-2">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <Logo
          logo={true}
          className="flex flex-col items-center gap-1 scale-150 mt-4"
        />

        <p className="mt-8 text-xl md:text-2xl text-(--ink-soft)">
          Intelligence Layer for AV Hardware
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl md:text-4xl font-serif font-bold leading-tight">
          Intelligent software for the spaces where people meet, learn, and
          collaborate.
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-(--ink-soft)">
          Xeobit builds AI-powered solutions that connect people, platforms, and
          AV hardware, from unified meeting environments to interactive learning
          experiences.
        </p>

        <a className="mt-8 px-6 py-3 bg-(--accent) text-white! rounded-lg font-semibold" href="/#products">
          Explore Products
        </a>
      </section>

      {/* Products */}
      <section className="px-6 py-24" id="products">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-(--accent)">
            Products
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl font-serif font-bold">
            Software that makes technology work better.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* Product 1 */}
            <article className="bg-(--bg-card) rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video bg-(--accent-light) overflow-hidden">
                <img
                  src={dashboard}
                  alt="Xeobit Unified Meeting Dashboard"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-95"
                />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-widest text-(--accent)">
                  Meetings
                </p>

                <h3 className="mt-2 text-2xl font-serif font-bold">
                  Xeobit Meeting Dashboard
                </h3>

                <p className="mt-3 text-(--ink-soft)">
                  Bring conferencing platforms, calendars, and meeting-room
                  workflows into a single, simple interface.
                </p>

                <button
                  className="mt-6 text-(--accent) font-semibold"
                  onClick={() => {
                    navigate("/home/#");
                    window.scrollTo(0, 0);
                  }}
                >
                  Explore product →
                </button>
              </div>
            </article>

            {/* Product 2 */}
            <article className="bg-(--bg-card) rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video bg-(--accent-light) overflow-hidden">
                <img
                  src={learningAi}
                  alt="learning ai dashboard"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-95"
                />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-widest text-(--accent)">
                  Learning
                </p>

                <h3 className="mt-2 text-2xl font-serif font-bold">
                  Xeobit Lecture AI
                </h3>

                <p className="mt-3 text-(--ink-soft)">
                  Turn uploaded lectures and learning material into interactive
                  experiences with AI-generated questions.
                </p>

                <button
                  className="mt-6 text-(--accent) font-semibold"
                  onClick={() => {
                    window.open("https://lectureai.xeobitindia.in/", "_blank");
                  }}
                >
                  Explore product →
                </button>
              </div>
            </article>
            {/* Product 3 */}
            <article className="md:col-span-2 md:w-1/2 md:justify-self-center bg-(--bg-card) rounded-lg overflow-hidden shadow-sm">
              <div className="relative aspect-video bg-(--accent-light) overflow-hidden">
                <img
                  src={learningAi}
                  alt="Healthcare AI"
                  className="w-full h-full object-cover blur-md scale-105"
                />

                <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-black/20">
                  Comming Soon
                </span>
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-widest text-(--accent)">
                  Health Care
                </p>

                <h3 className="mt-2 text-2xl font-serif font-bold">
                  Xeobit e-Care
                </h3>

                <p className="mt-3 text-(--ink-soft)">
                  Connecting health care through intellegent AV
                </p>

                {/* <button className="mt-6 text-(--accent) font-semibold">
                  Explore product →
                </button> */}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About
      <section className="px-6 py-24">...</section> */}
    </main>
  );
};

export default Landing;
