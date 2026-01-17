"use client";

import React, { useState } from "react";

export default function RavelineLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-['Inter',sans-serif] overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* Font Import - ensuring we have the right weights */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* Navigation - Edge to Edge */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-black">
        <div className="flex items-stretch h-14">
          {/* Logo Section */}
          <div className="flex items-center px-6 border-r border-black shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-600"></div>
              <span className="text-lg font-bold tracking-tight">RAVELINE</span>
            </div>
          </div>

          {/* CTA Button */}
          <a className="hidden md:flex ml-auto items-center px-8 bg-black text-white text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors duration-300">
            Get Access
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden ml-auto px-6 border-l border-black flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <div
                className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="pt-14 min-h-screen flex flex-col lg:flex-row border-b border-black">
        {/* Left Content */}
        <div className="lg:w-[60%] border-r border-black flex flex-col justify-between p-6 lg:p-12 pt-20 lg:pt-32">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 border border-black px-3 py-1 bg-black/5">
              <span className="w-1.5 h-1.5 bg-orange-600 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                v0.1.0 Beta
              </span>
            </div>

            <h1 className="text-6xl lg:text-9xl font-semibold tracking-tighter leading-[0.85] mb-12">
              AGENT
              <br />
              NATIVE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-600 stroke-black text-stroke">
                SAFETY
              </span>
            </h1>

            <p className="text-xl md:text-2xl leading-tight max-w-xl font-light opacity-80">
              The moderation infrastructure for the AI era. Deterministic
              protection for stochastic content.
            </p>
          </div>

          <div className="mt-20 flex items-center gap-8">
            <button className="group relative px-8 py-4 bg-black text-white overflow-hidden cursor-pointer">
              <div className="absolute inset-0 w-full h-full bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              <span className="relative text-sm uppercase tracking-widest font-medium group-hover:text-white">
                Start Integration
              </span>
            </button>
            <span className="text-xs uppercase tracking-widest opacity-50">
              Docs available v1.0
            </span>
          </div>
        </div>

        {/* Right Content - Technical Visualization */}
        <div className="lg:w-[40%] bg-neutral-50 relative overflow-hidden flex flex-col">
          {/* Terminal Header */}
          <div className="border-b border-black/10 p-4 flex items-center justify-between bg-white">
            <div className="text-[10px] uppercase tracking-widest opacity-40">
              Live Feed
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full border border-black opacity-20"></div>
              <div className="w-2 h-2 rounded-full border border-black opacity-20"></div>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-6 font-mono text-xs overflow-hidden">
            <div className="space-y-3">
              {[
                {
                  time: "00:12:38",
                  status: "clean",
                  content: "usr_287: message_received",
                },
                {
                  time: "00:12:39",
                  status: "analyzing",
                  content: "processing: content_analysis",
                },
                {
                  time: "00:12:39",
                  status: "clean",
                  content: "allowed: no_violations",
                },
                {
                  time: "00:12:40",
                  status: "clean",
                  content: "usr_288: message_received",
                },
                {
                  time: "00:12:41",
                  status: "analyzing",
                  content: "processing: sentiment_check",
                },
                {
                  time: "00:12:41",
                  status: "clean",
                  content: "allowed: passed_all_checks",
                },
                {
                  time: "00:12:43",
                  status: "analyzing",
                  content: "usr_291: generating response...",
                },
                {
                  time: "00:12:44",
                  status: "flagged",
                  content: "policy_violation: toxicity_detected",
                },
                {
                  time: "00:12:44",
                  status: "blocked",
                  content: "intervention_active",
                },
                {
                  time: "00:12:44",
                  status: "blocked",
                  content: "response_suppressed",
                },
                {
                  time: "00:12:45",
                  status: "clean",
                  content: "usr_292: message_received",
                },
                {
                  time: "00:12:45",
                  status: "analyzing",
                  content: "processing: keyword_scan",
                },
                {
                  time: "00:12:45",
                  status: "clean",
                  content: "allowed: no_violations",
                },
                {
                  time: "00:12:46",
                  status: "clean",
                  content: "usr_293: message_received",
                },
                {
                  time: "00:12:47",
                  status: "analyzing",
                  content: "processing: spam_detection",
                },
                {
                  time: "00:12:47",
                  status: "clean",
                  content: "allowed: passed_all_checks",
                },
              ].map((log, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start opacity-70 border-b border-black/5 pb-2"
                >
                  <span className="opacity-40 shrink-0">{log.time}</span>
                  <span
                    className={`shrink-0 ${
                      log.status === "blocked"
                        ? "text-orange-600 font-bold"
                        : log.status === "flagged"
                          ? "text-orange-500 font-bold"
                          : log.status === "analyzing"
                            ? "text-blue-600"
                            : "text-green-700"
                    }`}
                  >
                    [{log.status.toUpperCase()}]
                  </span>
                  <span className="flex-1">{log.content}</span>
                </div>
              ))}
              <div className="flex gap-2 items-center text-orange-600 animate-pulse mt-6">
                <span>_waiting_for_input</span>
                <span className="w-2 h-4 bg-orange-600"></span>
              </div>
            </div>
          </div>

          {/* Grid decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="border-b border-black overflow-hidden bg-black text-white py-6">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-12">
              <span className="text-sm font-mono uppercase tracking-[0.3em]">
                Real-time content evaluation
              </span>
              <div className="w-1.5 h-1.5 bg-orange-600 ml-12 rotate-45"></div>
              <span className="text-sm font-mono uppercase tracking-[0.3em] ml-12">
                Deterministic decisions
              </span>
              <div className="w-1.5 h-1.5 bg-orange-600 ml-12 rotate-45"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics / "Why" Section */}
      <section className="grid md:grid-cols-3 border-b border-black">
        {[
          { label: "Latency", value: "<15ms", desc: "Edge-computed decisions" },
          {
            label: "Accuracy",
            value: "99.9%",
            desc: "Deterministic policy engine",
          },
          { label: "Uptime", value: "100%", desc: "Distributed redundancy" },
        ].map((stat, i) => (
          <div
            key={i}
            className={`p-16 border-b md:border-b-0 ${i !== 2 ? "md:border-r" : ""} border-black group hover:bg-black hover:text-white transition-all duration-300`}
          >
            <div className="text-[10px] uppercase tracking-[0.25em] mb-6 opacity-40 flex items-center gap-2">
              <div className="w-1 h-1 bg-orange-600"></div>
              {stat.label}
            </div>
            <div className="text-7xl font-bold tracking-tighter mb-4 group-hover:text-orange-600 transition-colors">
              {stat.value}
            </div>
            <div className="text-sm opacity-60 font-mono tracking-wide">
              {stat.desc}
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="border-b border-black">
        <div className="grid lg:grid-cols-12">
          {/* Label Column */}
          <div className="lg:col-span-3 border-r border-black p-12 bg-black text-white flex flex-col justify-center">
            <div className="mb-8">
              <div className="text-8xl font-bold leading-none mb-4 text-orange-600">
                03
              </div>
              <div className="text-2xl font-bold uppercase tracking-widest mb-4">
                Steps
              </div>
              <div className="w-12 h-px bg-white/20"></div>
            </div>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              Every request flows through a deterministic pipeline designed for
              speed and clarity.
            </p>
          </div>

          {/* Content Columns */}
          <div className="lg:col-span-9 grid md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Ingest",
                desc: "API captures content stream instantly. No latency added to user experience.",
                detail: "REST / WebSocket / GraphQL",
              },
              {
                step: "02",
                title: "Analyze",
                desc: "Multi-modal content evaluation against your custom rule engines.",
                detail: "Text / Image / Metadata",
              },
              {
                step: "03",
                title: "Resolve",
                desc: "Immediate action: block, flag, or allow based on confidence scores.",
                detail: "Webhooks / Direct Action",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-12 border-b md:border-b-0 ${i !== 2 ? "md:border-r" : ""} border-black flex flex-col justify-between min-h-[400px] relative group hover:bg-neutral-50 transition-colors`}
              >
                <div>
                  <div className="mb-16">
                    <div className="w-12 h-12 border-2 border-black text-black flex items-center justify-center font-mono text-sm mb-8 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all">
                      {item.step}
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight mb-6">
                      {item.title}
                    </h3>
                    <p className="text-base opacity-70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="border-t border-black/10 pt-6">
                  <div className="text-xs font-mono uppercase tracking-wider opacity-40">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration/API Section */}
      <section className="border-b border-black">
        <div className="grid lg:grid-cols-2">
          <div className="p-16 lg:p-32 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-center bg-white">
            <div className="text-xs uppercase tracking-[0.3em] mb-8 opacity-40 flex items-center gap-2">
              <div className="w-1 h-1 bg-orange-600"></div>
              Integration
            </div>
            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter mb-12 leading-[0.85]">
              BUILT FOR
              <br />
              DEVELOPERS
            </h2>
            <p className="text-xl opacity-60 max-w-md mb-16 leading-relaxed">
              Simple, type-safe SDKs for every major platform. Drop Raveline
              into your middleware and forget about it.
            </p>
            <div className="space-y-6">
              {["TypeScript", "Python", "Go", "Rust"].map((lang, i) => (
                <div
                  key={lang}
                  className="flex items-center gap-6 group cursor-pointer border-l-2 border-transparent hover:border-orange-600 pl-6 transition-all"
                >
                  <div className="w-6 h-6 border-2 border-black group-hover:bg-black transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-base font-mono uppercase tracking-widest group-hover:text-orange-600 transition-colors">
                    {lang} SDK
                  </span>
                  <div className="ml-auto text-2xl font-bold opacity-10 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-16 lg:p-32 flex items-center justify-center relative overflow-hidden">
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            <div className="w-full max-w-lg relative">
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-6">
                <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <span className="ml-auto text-white/40 text-xs font-mono">
                  index.ts
                </span>
              </div>
              <div className="font-mono text-sm text-white/80 space-y-3 leading-relaxed">
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-white">{`{ Raveline }`}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">
                    &apos;@raveline/sdk&apos;
                  </span>
                  ;
                </div>
                <div className="h-4"></div>
                <div>
                  <span className="text-purple-400">const</span> client ={" "}
                  <span className="text-purple-400">new</span>{" "}
                  Raveline(API_KEY);
                </div>
                <div className="h-4"></div>
                <div className="text-white/40">{`// In your middleware`}</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  {`{ decision }`} ={" "}
                  <span className="text-purple-400">await</span>{" "}
                  client.moderate({`{`}
                </div>
                <div className="pl-6">content: req.body.text,</div>
                <div className="pl-6">context: {`{ userId: '123' }`}</div>
                <div>{`});`}</div>
                <div className="h-4"></div>
                <div>
                  <span className="text-purple-400">if</span> (decision ==={" "}
                  <span className="text-green-400">&apos;BLOCK&apos;</span>){" "}
                  {`{`}
                </div>
                <div className="pl-6 text-orange-500">
                  throw new Error(&apos;Policy Violation&apos;);
                </div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - NEW */}
      <section className="border-b border-black">
        <div className="p-16 lg:p-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="text-xs uppercase tracking-[0.3em] mb-6 opacity-40 flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-600"></div>
                Use Cases
              </div>
              <h2 className="text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
                PROTECT EVERY
                <br />
                INTERACTION
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-black border border-black">
              {[
                {
                  title: "Chat Applications",
                  desc: "Real-time message filtering for community platforms, customer support, and social apps.",
                  metrics: [
                    "Spam Detection",
                    "Abuse Prevention",
                    "Auto-moderation",
                  ],
                },
                {
                  title: "Content Platforms",
                  desc: "Pre-publish validation for user-generated posts, comments, and forum contributions.",
                  metrics: [
                    "Policy Compliance",
                    "Quality Control",
                    "Brand Safety",
                  ],
                },
                {
                  title: "AI Assistants",
                  desc: "Output validation for LLM-generated content to ensure safe, compliant responses.",
                  metrics: [
                    "Hallucination Detection",
                    "Toxicity Filtering",
                    "Prompt Injection",
                  ],
                },
                {
                  title: "Live Streaming",
                  desc: "Continuous monitoring of chat messages and metadata during live broadcasts.",
                  metrics: [
                    "Real-time Filtering",
                    "Viewer Protection",
                    "Creator Tools",
                  ],
                },
              ].map((useCase, i) => (
                <div
                  key={i}
                  className="bg-white p-10 group hover:bg-black hover:text-white transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-orange-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-base opacity-70 mb-8 leading-relaxed">
                    {useCase.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, j) => (
                      <div
                        key={j}
                        className="text-xs font-mono uppercase tracking-wider px-3 py-1 border border-black/20 group-hover:border-white/20"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section - NEW */}
      <section className="border-b border-black bg-neutral-50">
        <div className="grid lg:grid-cols-2">
          <div className="p-16 lg:p-32 flex flex-col justify-center border-r border-black bg-white">
            <div className="text-xs uppercase tracking-[0.3em] mb-8 opacity-40 flex items-center gap-2">
              <div className="w-1 h-1 bg-orange-600"></div>
              Architecture
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold tracking-tighter mb-12 leading-[0.85]">
              DESIGNED
              <br />
              FOR SCALE
            </h2>
            <div className="space-y-8">
              {[
                { label: "Edge Computing", value: "Global CDN" },
                { label: "Distributed", value: "Multi-region" },
                { label: "Redundancy", value: "Auto-failover" },
                { label: "Compliance", value: "SOC 2 / GDPR" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-black/10 pb-4"
                >
                  <span className="text-lg font-mono uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-sm opacity-60">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-16 lg:p-32 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="space-y-6">
                {[
                  { label: "Request", offset: 0, color: "orange-600" },
                  { label: "Ingestion", offset: 40, color: "black" },
                  { label: "Evaluation", offset: 80, color: "black" },
                  { label: "Decision", offset: 120, color: "black" },
                  { label: "Response", offset: 160, color: "orange-600" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-3 h-3 bg-${step.color} shrink-0`}></div>
                    <div className="flex-1 border-b border-black/20 pb-4">
                      <div className="text-sm font-mono uppercase tracking-wider">
                        {step.label}
                      </div>
                    </div>
                    <div className="text-xs font-mono opacity-40">
                      +{i * 3}ms
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-black/20">
                <div className="text-sm font-mono opacity-60">
                  Total latency: &lt;15ms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - NEW */}
      <section className="border-b border-black bg-black text-white">
        <div className="p-16 lg:p-32 text-center">
          <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            READY TO
            <br />
            GET STARTED?
          </h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto mb-16">
            Join the waitlist for early access to Raveline v1.0 and help shape
            the future of AI content moderation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-5 bg-orange-600 text-white overflow-hidden text-base uppercase tracking-widest font-medium cursor-pointer">
              <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              <span className="relative group-hover:text-black">
                Request Early Access
              </span>
            </button>
            <a className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-orange-600 transition-colors cursor-pointer">
              Read Documentation →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-20 px-6">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-orange-600"></div>
              <span className="text-lg font-bold tracking-tight">RAVELINE</span>
            </div>
            <p className="text-xs opacity-50 max-w-[200px]">
              © 2026 Raveline Inc.
              <br />
              Pune, Maharashtra, India.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product",
                links: ["Features", "Integrations", "Enterprise", "Pricing"],
              },
              {
                title: "Resources",
                links: ["Documentation", "API Reference", "Status", "GitHub"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a className="text-sm opacity-60 hover:opacity-100 hover:text-orange-600 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant Footer Text */}
        <div className="mt-20 pt-20 border-t border-black max-w-7xl mx-auto">
          <h2 className="text-[12vw] leading-none font-bold tracking-tighter opacity-5 select-none">
            RAVELINE V1
          </h2>
        </div>
      </footer>
    </div>
  );
}
