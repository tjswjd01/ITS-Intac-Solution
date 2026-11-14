import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Eyebrow,
  navyButtonClassName,
  outlineButtonClassName,
} from "@/components/site/primitives";

import { hero } from "./homeContent";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-its-offwhite pb-14 pt-28 md:pb-16 md:pt-36 lg:pb-20 lg:pt-40">
      <div className="layout-container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-12">
          <div className="max-w-[660px]">
            <Eyebrow rule>{hero.eyebrow}</Eyebrow>

            <h1 className="mt-6 text-[clamp(2.1rem,3.9vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy">
              {hero.headline.map((line) => (
                <span key={line} className="sm:block">
                  {line}{" "}
                </span>
              ))}
              <span className="text-[#55688A] sm:block">{hero.headlineAccent}</span>
            </h1>

            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.7] text-its-slate-ink">
              {hero.copy}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={hero.primary.href} className={navyButtonClassName}>
                {hero.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={hero.secondary.href} className={outlineButtonClassName}>
                {hero.secondary.label}
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* quiet tinted panel set behind the media */}
            <div
              aria-hidden
              className="absolute -bottom-5 -left-5 right-10 top-10 rounded-[36px] bg-[#E3EAE8] sm:-left-7"
            />
            <div className="relative aspect-video overflow-hidden rounded-[28px] bg-its-dusty-soft sm:rounded-[32px]">
              <Image
                src={hero.poster}
                alt={hero.posterAlt}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              {/* Existing brand footage (16:9, with a caption baked into the
                  clip, so the frame keeps the same ratio and nothing is cropped). Hidden for visitors who prefer reduced
                  motion, who see the still above instead. */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
                tabIndex={-1}
                className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
              >
                <source src={hero.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
