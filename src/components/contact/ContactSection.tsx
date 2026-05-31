"use client";

import { useState } from "react";

export default function ContactSection() {
  const [type, setType] = useState<"job" | "service">("service");

  return (
    <section className="section-shell overflow-hidden bg-[#FAFAF8] pt-32 md:pt-40">
      <div className="layout-container">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="eyebrow justify-center">Contact Us</p>
          <h1 className="section-title mt-5">Let&apos;s connect.</h1>
          <p className="section-copy mt-6">
            Whether you are exploring workforce support, automation programs,
            partnerships, or career opportunities, our team is ready to help.
          </p>
        </div>

        <div className="premium-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            <div className="featured-card border-0 rounded-none px-6 py-8 text-white md:px-8 md:py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                Reach the right team
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white">
                Tell us what you need.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Choose the inquiry type and share a few details so we can route
                your message to the right team quickly.
              </p>

              <div className="mt-10 space-y-6">
                <InfoBlock title="Location" id="locations">
                  5550 Granite Parkway, Suite 295
                  <br />
                  Plano, TX 75024
                </InfoBlock>
                <InfoBlock title="Email">contact@intacsolution.com</InfoBlock>
                <InfoBlock title="Phone">+1 (469) 922-5472</InfoBlock>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 lg:p-10">
              <div className="mb-8 grid gap-4 md:grid-cols-2">
                <ToggleCard
                  title="Looking for a Service"
                  text="Service request, product inquiry, or partnership."
                  active={type === "service"}
                  onClick={() => setType("service")}
                />
                <ToggleCard
                  title="Looking for a Job"
                  text="Career, internship, or resume inquiry."
                  active={type === "job"}
                  onClick={() => setType("job")}
                />
              </div>

              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form UI only. Backend/email connection is needed next.");
                }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label={type === "job" ? "Your Name" : "Company Name / Name"}
                    placeholder={
                      type === "job"
                        ? "Enter your full name"
                        : "Enter company name or your name"
                    }
                    required
                  />
                  <Field
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <SelectField
                    label="Purpose"
                    required
                    options={
                      type === "job"
                        ? [
                            "Career / Resume",
                            "Internship Inquiry",
                            "General Career Question",
                          ]
                        : [
                            "Staffing / Workforce Service",
                            "NEMO System Inquiry",
                            "Automation Solution",
                            "Partnership Inquiry",
                          ]
                    }
                  />
                  <Field
                    label={type === "job" ? "Desired Location" : "Service Region"}
                    placeholder="e.g., Dallas, TX"
                    required
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label={type === "job" ? "Position of Interest" : "Website"}
                    placeholder={
                      type === "job"
                        ? "e.g., Operations Coordinator"
                        : "https://yourcompany.com"
                    }
                  />
                  <Field
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0B0F14]">
                    Message / Details <span className="text-[#0B3D91]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder={
                      type === "job"
                        ? "Tell us about your experience, availability, and preferred role."
                        : "Tell us about your service needs, project, or business inquiry."
                    }
                    className="premium-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary ml-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#6B7280]">
          Your information is secure and will only be used to respond to your
          inquiry.
        </p>
      </div>
    </section>
  );
}

function ToggleCard({
  title,
  text,
  active,
  onClick,
}: {
  title: string;
  text: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[24px] border p-5 text-left transition-all duration-300 ${
        active
          ? "border-[#0B3D91]/30 bg-[#F4F7FB] shadow-[0_10px_24px_rgba(11,61,145,0.08)]"
          : "border-[#E5E7EB] bg-white hover:border-[#CBD5E1]"
      }`}
    >
      <p className="text-lg font-semibold text-[#0B0F14]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#6B7280]">{text}</p>
    </button>
  );
}

function InfoBlock({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-white/86">{children}</p>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#0B0F14]">
        {label} {required && <span className="text-[#0B3D91]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="premium-input"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  required = false,
}: {
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#0B0F14]">
        {label} {required && <span className="text-[#0B3D91]">*</span>}
      </label>

      <select required={required} className="premium-input text-[#6B7280]">
        <option value="">Select an option</option>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
