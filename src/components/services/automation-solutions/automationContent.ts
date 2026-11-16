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

/**
 * Equipment designed and built by ITS for its mobile-device refurbishment
 * line. Names and front-view photos come from the owner's Oct 2026 proposal
 * deck (HD Hyundai Electric). The photos are cropped from that deck at low
 * resolution: TODO(owner): replace with original product shots when available.
 * TODO(owner): confirm each one-line description against the actual function.
 */
export const automationEquipment = {
  label: "Our Equipment",
  title: "Designed and Built In-House.",
  intro:
    "Equipment ITS designed and built for its own refurbishment line, developed and refined through daily operation before being standardized.",
  note: "Shown: equipment in use on the ITS mobile-device refurbishment line.",
  // From the deck: process developed in-house, then standardized. TODO(owner): edit.
  statement: ["Developed on our own line and proven in daily operation,", "before it is standardized for yours."],
  items: [
    {
      key: "grader",
      name: "Grader",
      role: "Device grading",
      description:
        "Supports consistent cosmetic grading of incoming devices before they enter the refurbishment process.",
      image: "/images/automation/equipment/grader.jpg",
      alt: "Front view of the ITS Grader equipment unit",
    },
    {
      key: "function-tester",
      name: "Function Tester",
      role: "Functional testing",
      description:
        "Runs repeatable functional checks on devices to verify operation before and after repair.",
      image: "/images/automation/equipment/function-tester.jpg",
      alt: "Front view of the ITS Function Tester equipment unit",
    },
    {
      key: "polisher",
      name: "Polisher",
      role: "Surface finishing",
      description:
        "Automates surface polishing steps so cosmetic finishing is uniform across volume.",
      image: "/images/automation/equipment/polisher.jpg",
      alt: "Front view of the ITS Polisher equipment unit",
    },
    {
      key: "auto-screw-machine",
      name: "Auto Screw Machine",
      role: "Assembly",
      description:
        "Dual-station automated screw fastening for accurate, repeatable reassembly of devices.",
      image: "/images/automation/equipment/auto-screw-machine.jpg",
      alt: "Front view of the ITS Auto Screw Machine with two operator screens",
    },
  ],
} as const;

export const automationClosing = {
  title: "Need a Customized Automation Solution?",
  copy: "Tell us about your process, equipment, or AMR requirements.",
  label: "Discuss Your Automation Needs",
};
