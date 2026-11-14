/**
 * Automation & Robotics page: approved copy and the single media map.
 *
 * Scope rules (owner brief): ITS is not a general warehouse-automation
 * integrator and does not design or manufacture AMR hardware. Automation
 * here means equipment for mobile-device refurbishment processes, plus AMR
 * robots used inside the ITS refurbishment facility. No unverified counters.
 */

// Every image and video on the page is listed here. To swap one, replace the
// file in /public or point the path at the new file. All are existing ITS
// assets except where noted.
export const automationMedia = {
  amr: {
    // Existing brand clip of an AMR robot in the ITS facility (5 s loop,
    // has a caption baked into the footage). TODO(owner): replace with a
    // longer, caption-free AMR clip when available.
    video: "/videos/its-smart.mp4",
    // Still frame taken from the clip above.
    poster: "/images/automation/amr-facility.jpg",
    alt: "AMR robot moving through the ITS refurbishment facility",
  },
  applications: {
    // TODO(owner): confirm each photo shows the equipment named in its tab.
    deviceTesting: {
      image: "/images/IMG_E8933.JPG",
      alt: "Mobile device seated in an equipment fixture",
    },
    inspection: {
      image: "/images/IMG_E8936.JPG",
      alt: "Machine vision inspection screen on ITS equipment",
    },
    customEquipment: {
      image: "/images/IMG_E8916.JPG",
      alt: "ITS-built refurbishment equipment units",
    },
    amr: {
      image: "/images/automation/amr-facility.jpg",
      alt: "AMR robot moving materials inside the ITS refurbishment facility",
    },
  },
} as const;

export const automationHero = {
  label: "Automation & Robotics",
  headline: "Automation Built for Real Operations.",
  accent: "Tested on the Floor.",
  intro:
    "We develop and customize automation equipment for selected mobile-device refurbishment processes, combining engineering know-how with hands-on operations experience. We also support AMR robots used for material movement within our facility.",
  primary: { label: "Discuss Your Project", href: "/contact" },
  secondary: { label: "View Applications", href: "#application-areas" },
};

export const automationCapabilities = {
  label: "Our Capabilities",
  title: "Practical Automation, Built Around the Process.",
  intro:
    "Focused technical solutions informed by day-to-day refurbishment operations—not a claim to automate entire warehouses.",
  cards: [
    {
      key: "custom",
      title: "Custom Equipment",
      description:
        "Purpose-built and customized equipment for specific refurbishment tasks.",
    },
    {
      key: "inspection",
      title: "Inspection & QA",
      description:
        "Systems and devices supporting repeatable checks and quality verification.",
    },
    {
      key: "process",
      title: "Process Automation",
      description:
        "Select automated steps in testing, handling and repair workflows.",
    },
    {
      key: "amr",
      title: "AMR Robots",
      description:
        "AMR-supported movement of materials within our refurbishment facility, with rental, sales and repair inquiries.",
    },
    {
      key: "support",
      title: "Integration & Support",
      description:
        "Equipment integration, troubleshooting and technical service aligned to confirmed project scope.",
    },
  ],
} as const;

export const automationFeatured = {
  label: "Featured Application",
  heading: "AMR Robots in Our Facility.",
  body: "We operate AMR robots within our mobile-device refurbishment facility to support internal material movement. Ask our team about available AMR rental, sales and repair options.",
  options: ["Rental", "Sales", "Repair & Service"],
  cta: { label: "Ask About AMR Robots", href: "/contact" },
};

export const automationClosing = {
  title: "Need a Customized Automation Solution?",
  copy: "Tell us about your process, equipment, or AMR requirements.",
  label: "Discuss Your Automation Needs",
};
