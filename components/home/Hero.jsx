"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, Search, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.fromTo(
        visualRef.current,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        },
      );
    }, contentRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={contentRef}
      className="section-space overflow-hidden"
      aria-labelledby="home-hero-title"
    >
      <div className="container-codxr grid min-h-[72vh] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="hero-reveal mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#6f9900] dark:text-codxr-green">
            Digital studio · CODXR 2.0
          </p>

          <h1
            id="home-hero-title"
            className="hero-reveal max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.05em] md:text-7xl lg:text-[5.5rem]"
          >
            Building modern digital experiences that grow businesses.
          </h1>

          <p className="hero-reveal mt-7 max-w-2xl text-lg leading-8 text-codxr-lightMuted dark:text-codxr-darkMuted">
            We build high-quality websites, web applications, e-commerce
            experiences, and digital growth systems for ambitious businesses.
          </p>

          <div className="hero-reveal mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-codxr-green px-6 py-3.5 font-semibold text-black transition hover:opacity-90"
            >
              Start Your Project
              <ArrowUpRight className="ml-2" size={18} />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center rounded-full border border-codxr-lightBorder px-6 py-3.5 font-semibold transition hover:border-codxr-green dark:border-codxr-darkBorder"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div ref={visualRef} className="opacity-0">
          <div className="placeholder-surface relative min-h-[430px] overflow-hidden rounded-[2rem] p-7">
            <div className="absolute right-7 top-7 h-24 w-24 rounded-full bg-codxr-green/20 blur-2xl" />

            <div className="relative flex h-full min-h-[370px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-codxr-lightBorder px-3 py-1.5 text-xs dark:border-codxr-darkBorder">
                  CODXR / DIGITAL
                </span>

                <Sparkles size={18} aria-hidden="true" />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-codxr-lightBorder bg-codxr-light p-5 dark:border-codxr-darkBorder dark:bg-codxr-darkCard">
                  <Code2 size={20} />
                  <p className="mt-8 text-sm font-semibold">Build</p>
                </div>

                <div className="rounded-2xl border border-codxr-lightBorder bg-codxr-light p-5 dark:border-codxr-darkBorder dark:bg-codxr-darkCard">
                  <Search size={20} />
                  <p className="mt-8 text-sm font-semibold">Optimize</p>
                </div>

                <div className="rounded-2xl bg-codxr-green p-5 text-black">
                  <ArrowUpRight size={20} />
                  <p className="mt-8 text-sm font-semibold">Grow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
