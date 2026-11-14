"use client";

import { Briefcase, User } from "lucide-react";
import { useState } from "react";

const inputClassName =
  "h-12 w-full rounded-[10px] border border-[#D7DEE8] bg-white px-4 text-[14px] text-[#0B0F14] outline-none transition duration-200 placeholder:text-[#94A3B8] focus:border-[#173F7A] focus:ring-4 focus:ring-[#173F7A]/10";

const textareaClassName =
  "min-h-[140px] w-full rounded-[10px] border border-[#D7DEE8] bg-white px-4 py-3 text-[14px] text-[#0B0F14] outline-none transition duration-200 placeholder:text-[#94A3B8] focus:border-[#173F7A] focus:ring-4 focus:ring-[#173F7A]/10";

export default function ContactSection() {
  const [type, setType] = useState<"job" | "service">("service");

  return (
    <section className="bg-[#FAFAF8] pb-20 pt-4 md:pb-24 md:pt-6">
      <div className="layout-container">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-[-0.03em] text-[#081F3D]">
              Get In Touch
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.75] text-[#64748B] md:text-[16px]">
              Whether you are exploring workforce support, automation programs,
              partnerships, or career opportunities, our team is ready to help.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ToggleCard
              title="Looking for a Service"
              text="Service request, product inquiry, or partnership."
              icon={Briefcase}
              active={type === "service"}
              onClick={() => setType("service")}
            />
            <ToggleCard
              title="Looking for a Job"
              text="Career, internship, or resume inquiry."
              icon={User}
              active={type === "job"}
              onClick={() => setType("job")}
            />
          </div>

          <form
            className="mt-8 grid gap-5"
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
              <label className="mb-2 block text-[13px] font-semibold text-[#081F3D]">
                Message / Details <span className="text-[#173F7A]">*</span>
              </label>
              <textarea
                rows={5}
                required
                placeholder={
                  type === "job"
                    ? "Tell us about your experience, availability, and preferred role."
                    : "Tell us about your service needs, project, or business inquiry."
                }
                className={textareaClassName}
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#173F7A] px-7 py-3.5 text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0F2F5F] hover:shadow-[0_10px_24px_rgba(15,47,95,0.22)]"
              >
                Submit Inquiry
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-[#64748B]">
            Your information is secure and will only be used to respond to your
            inquiry.
          </p>
        </div>
      </div>
    </section>
  );
}

function ToggleCard({
  title,
  text,
  icon: Icon,
  active,
  onClick,
}: {
  title: string;
  text: string;
  icon: typeof Briefcase;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[16px] border p-5 text-left transition-all duration-200 ${
        active
          ? "border-[#173F7A]/25 bg-[#EEF4FF] shadow-[0_8px_24px_rgba(23,63,122,0.08)]"
          : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${
            active ? "bg-[#173F7A]" : "bg-[#F1F5F9]"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${active ? "text-white" : "text-[#173F7A]"}`}
            strokeWidth={1.8}
          />
        </div>
        <div>
          <p className="text-[16px] font-semibold text-[#081F3D]">{title}</p>
          <p className="mt-1.5 text-[14px] leading-6 text-[#64748B]">{text}</p>
        </div>
      </div>
    </button>
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
      <label className="mb-2 block text-[13px] font-semibold text-[#081F3D]">
        {label} {required && <span className="text-[#173F7A]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={inputClassName}
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
      <label className="mb-2 block text-[13px] font-semibold text-[#081F3D]">
        {label} {required && <span className="text-[#173F7A]">*</span>}
      </label>

      <select required={required} className={`${inputClassName} text-[#64748B]`}>
        <option value="">Select an option</option>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
