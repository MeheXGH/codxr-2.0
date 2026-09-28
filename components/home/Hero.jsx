"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  AppWindow,
  ArrowUpRight,
  BarChart3,
  Code2,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
} from "lucide-react";
import gsap from "gsap";

const floatingServices = [
  {
    id: "website",
    title: "Website Development",
    description: "Fast, secure & modern websites that perform.",
    icon: Code2,
    position: "website",
  },
  {
    id: "social",
    title: "Social Media Management",
    description: "Consistent content & community growth.",
    icon: Megaphone,
    position: "social",
  },
  {
    id: "web-app",
    title: "Web Applications",
    description: "Custom digital platforms built for your business.",
    icon: AppWindow,
    position: "web-app",
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    description: "Performance-focused campaigns that deliver results.",
    icon: BarChart3,
    position: "meta-ads",
  },
  {
    id: "seo",
    title: "SEO & AI Search",
    description: "Improve visibility across search and AI discovery.",
    icon: Search,
    position: "seo",
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    description: "Online stores designed to convert and scale.",
    icon: ShoppingBag,
    position: "ecommerce",
  },
  {
    id: "branding",
    title: "Branding & Design",
    description: "Distinct identities that make businesses stand out.",
    icon: Palette,
    position: "branding",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      data-floating-card
      className={`hero-card hero-card-${service.position}`}
    >
      <div className="hero-card-icon">
        <Icon
          size={19}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <div className="hero-card-content">
        <h2 className="hero-card-title">
          {service.title}
        </h2>

        <p className="hero-card-description">
          {service.description}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="hero-card-dot"
      />
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const imageCardRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      /*
       * Main content entrance
       */
      gsap.from(".hero-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      /*
       * Main visual entrance
       */
      gsap.from(".hero-visual", {
        scale: 0.96,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      /*
       * Floating cards entrance
       */
      gsap.from("[data-floating-card]", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        stagger: 0.08,
        ease: "power3.out",
      });

      /*
       * Coordinated floating animation.
       *
       * All cards use the same movement pattern and
       * approximately the same speed. Small delays keep
       * the movement organic without making the cards
       * feel disconnected.
       */
      gsap.utils
        .toArray("[data-floating-card]")
        .forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -6 : 6,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.35,
          });
        });
    }, heroRef);

    return () => context.revert();
  }, []);

  /*
   * ----------------------------------------------------------
   * SUBTLE IMAGE TILT
   * ----------------------------------------------------------
   */

  const handleImageMouseMove = (event) => {
    const card = imageCardRef.current;

    if (!card || window.innerWidth < 768) {
      return;
    }

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY =
      ((x - centerX) / centerX) * 4;

    const rotateX =
      ((centerY - y) / centerY) * 4;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.015,
      duration: 0.45,
      ease: "power2.out",
      transformPerspective: 1000,
      overwrite: true,
    });
  };

  const handleImageMouseLeave = () => {
    const card = imageCardRef.current;

    if (!card) {
      return;
    }

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <section
      ref={heroRef}
      className="hero-section"
      aria-labelledby="hero-title"
    >
      <div className="container-codxr">
        <div className="hero-grid">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="hero-content">
            <div className="hero-reveal hero-badge">
              <span
                className="hero-badge-icon"
                aria-hidden="true"
              >
                ⚡
              </span>

              <span>
                Digital Solutions That Drive Real Growth
              </span>
            </div>

            <h1
              id="hero-title"
              className="hero-reveal hero-title"
            >
              Building Modern
              <br />
              Digital Brands
              <br />
              That{" "}
              <span className="hero-title-accent">
                Grow.
              </span>
            </h1>

            <p className="hero-reveal hero-description">
              We create powerful websites, build web
              applications, optimize search visibility, and
              develop digital experiences that help
              businesses stand out and scale.
            </p>

            <div className="hero-reveal hero-actions">
              <Link
                href="/contact"
                className="hero-primary-button codxr-gradient"
              >
                <span>
                  Start Your Project
                </span>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/work"
                className="hero-secondary-button"
              >
                <span>
                  View Portfolio
                </span>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div
            ref={visualRef}
            className="hero-visual"
            aria-label="CODXR digital services"
          >
            <div className="hero-visual-area">
              {/* Light / Dark Hero Image */}
              <div
                ref={imageCardRef}
                className="hero-image-card"
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
              >
                <Image
                  src="/images/codxr-hero.png"
                  alt="CODXR digital solutions and services"
                  fill
                  priority
                  sizes="
                    (max-width: 480px) 82vw,
                    (max-width: 767px) 72vw,
                    (max-width: 1024px) 58vw,
                    48vw
                  "
                  className="hero-image hero-image-light"
                />

                <Image
                  src="/images/codxr-hero-dark.png"
                  alt="CODXR digital solutions and services"
                  fill
                  priority
                  sizes="
                    (max-width: 480px) 82vw,
                    (max-width: 767px) 72vw,
                    (max-width: 1024px) 58vw,
                    48vw
                  "
                  className="hero-image hero-image-dark"
                />
              </div>

              {/* Floating Service Cards */}
              {floatingServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}