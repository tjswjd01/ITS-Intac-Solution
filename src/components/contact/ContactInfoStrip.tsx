import { BriefcaseBusiness, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

import { contactChannels, type ContactChannel } from "@/content/contact";
import { cn } from "@/lib/utils";

import { contactAccents, type ContactAccent } from "./contactAccents";

const visuals: Record<ContactChannel["id"], { icon: LucideIcon; accent: ContactAccent }> = {
  service: { icon: Mail, accent: "blue" },
  recruiting: { icon: BriefcaseBusiness, accent: "slate" },
  phone: { icon: Phone, accent: "green" },
  office: { icon: MapPin, accent: "amber" },
};

/** Divider lines for one column on phones, two on tablets, four on desktop. */
const dividers = [
  "",
  "border-t sm:border-l sm:border-t-0",
  "border-t xl:border-l xl:border-t-0",
  "border-t sm:border-l xl:border-t-0",
];

export default function ContactInfoStrip() {
  return (
    <section id="locations" className="scroll-mt-28 bg-its-offwhite pt-8 md:pt-10">
      <div className="layout-container">
        <h2 className="sr-only">Contact details</h2>
        <ul className="grid overflow-hidden rounded-[20px] border border-its-line bg-white sm:grid-cols-2 xl:grid-cols-[1.08fr_1.2fr_0.92fr_1.1fr]">
          {contactChannels.map((channel, index) => {
            const { icon: Icon, accent } = visuals[channel.id];
            const tint = contactAccents[accent];

            return (
              <li key={channel.id} className={cn("border-its-line", dividers[index])}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full items-center gap-3.5 px-5 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-its-navy sm:px-6 xl:py-6"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: tint.bg, color: tint.fg }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11.5px] font-semibold uppercase tracking-[0.12em] text-its-slate-ink">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold leading-[1.45] text-its-navy decoration-its-mint decoration-2 underline-offset-4 [overflow-wrap:anywhere] group-hover:underline">
                      {channel.lines.map((line) => (
                        <span key={line} className={cn("block [text-wrap:balance]", channel.id === "phone" && "whitespace-nowrap")}>
                          {line}
                        </span>
                      ))}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
