// Central place for editable copy. Content sourced verbatim from
// advantexbattery.com (fact-checked against the live site) — swap values
// here once new copy arrives, components read from this file so nothing
// else needs to change. A couple of clear source-site typos were corrected
// in place ("Lets's" -> "Let's", "Arial" -> "Aerial"); everything else is
// reproduced as published.

export const SITE = {
  name: "Advantex",
  fullName: "Advantex Battery",
  tagline: "Batteries for Mobility",
  description:
    "Advantex Battery — Eastern India's leading lithium-ion battery manufacturer, for 2-wheelers, 3-wheelers, energy storage systems, and inverters.",
  logo: "/images/logo.png",
  phone: "+91 7599999471",
  email: "contact@advantexbattery.com",
  hours: "Mon-Fri: 8:30am-5:30pm",
  address: "Srijan Industrial Logistics Park, Part A, Block B, Unit 5, 3rd Floor, Howrah, Kolkata, W.B.",
  whatsapp: "917599999471",
  social: {
    linkedin: "https://www.linkedin.com/company/advantex-battery/",
    facebook: "https://www.facebook.com/advantexbattery",
    instagram: "https://www.instagram.com/advantexbattery/",
    youtube: "https://www.youtube.com/@advantexbattery",
  },
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Advantex", href: "/about" },
      { label: "Our Story & Legacy", href: "/our-story-legacy" },
      { label: "Our Expertise", href: "/our-expertise" },
    ],
  },
  {
    label: "Products",
    href: "/our-products",
    children: [
      { label: "2-Wheeler Batteries", href: "/2-wheeler-batteries" },
      { label: "3-Wheeler Batteries", href: "/3-wheeler-batteries" },
      { label: "Energy Storage Systems (ESS)", href: "/energy-storage-systems" },
      { label: "Inverter Battery", href: "/inverter-battery" },
      { label: "Other Solutions", href: "/other-solutions" },
    ],
  },
  { label: "Our Innovation", href: "/our-innovation" },
  { label: "Dealership", href: "/dealership" },
  { label: "Contact Us", href: "/contact-us" },
];

export const FOOTER_LINKS = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// ---------- HOME ----------

export const HERO = {
  eyebrow: "Eastern India's Leading Li-ion Battery Manufacturer",
  heading: "Batteries for Mobility",
  cta: "Learn more",
};

export const CELL_CHEMISTRY_TABS = [
  {
    label: "Cylindrical Cells",
    body: "The most commonly used form factor for NMC (Nickel, Manganese, Cobalt) lithium cells. These cells offer high energy density and are ideal for high-performance applications such as high-speed two-wheelers, compact EVs, and drones, which typically require fast charging and high discharge rates. Advantex can manufacture batteries across all standard cell sizes, ranging from 18650 to 32140.",
  },
  {
    label: "Prismatic Cells",
    body: "Prismatic cells are among the most widely used form factors for Lithium Iron Phosphate (LFP) chemistry. They offer an excellent balance of safety, energy density, and thermal stability, making them well suited for demanding applications such as forklifts, energy storage systems, and battery-powered commercial vehicles. Advantex utilizes LFP prismatic cells ranging from 50Ah to 250Ah to support a wide variety of application requirements.",
  },
];

export const WHY_CHOOSE_US = {
  heading: "Our Manufacturing Control with Stringent Quality Checks",
  cta: "Learn more",
  ctaHref: "/about",
};

export const QUALITY = {
  heading: "Top-Grade Components for Lasting Performance",
  body: "At the heart of every Advantex Battery is an uncompromising commitment to quality. We carefully source top-rated components, from advanced Battery Management Systems (BMS) to high-performance cells and pure nickel strips, ensuring reliability, efficiency, and long battery life.",
};

export const QUALITY_FEATURES = [
  {
    title: "Advanced Design & Battery Management System",
    body: "Every battery pack is designed by expert technicians with a focus on optimal capacity, ease of assembly, and long-term performance. Our Battery Management System (BMS) acts as the heart and brain of every pack, ensuring safety, parameter testing, remote monitoring, and seamless IoT integration across our entire range.",
    icon: "/images/icons/feature-bms.png",
  },
  {
    title: "Premium Lithium Cells",
    body: "We use only select AA-grade LFP cells, and for NMC packs, we are among the few Indian manufacturers using almost exclusively Samsung lithium cells. This ensures superior battery life, reliability, and high-performance standards for every pack.",
    icon: "/images/icons/feature-cells.png",
  },
  {
    title: "Pure & Standard Material Quality",
    body: "From high-purity nickel strips and epoxy sheets to insulation paper, bus bars, and cables, all intermediate materials are carefully selected to meet the highest quality standards. This improves conductivity, reduces resistance, enhances thermal stability, and ensures safer, more efficient battery packs.",
    icon: "/images/icons/feature-material.png",
  },
  {
    title: "Final Product Testing & Best Value",
    body: "Each battery pack undergoes rigorous testing, including 0–100–0 for capacity verification and 0–100–30 for performance evaluation before sealing and packaging. By combining premium components with efficient sourcing and manufacturing, we deliver exceptional quality and performance without unnecessary cost escalation.",
    icon: "/images/icons/feature-testing.png",
  },
];

export const CONNECT_CTA = {
  heading: "Let's power the future together.",
  subheading: "Reach out to learn more or start a conversation.",
};

export interface CategoryPanel {
  title: string;
  href: string;
  image: string;
}

export const CATEGORY_PANELS: CategoryPanel[] = [
  { title: "2-Wheeler Batteries", href: "/2-wheeler-batteries", image: "/images/home/panel-2wheeler.jpg" },
  { title: "3-Wheeler Batteries", href: "/3-wheeler-batteries", image: "/images/home/panel-3wheeler.jpg" },
  { title: "Energy Storage Systems", href: "/energy-storage-systems", image: "/images/home/panel-ess.jpg" },
  { title: "Inverter Battery", href: "/inverter-battery", image: "/images/home/panel-inverter.jpg" },
  { title: "Other Solutions", href: "/other-solutions", image: "/images/home/panel-other-solutions.jpg" },
];

export const CLIENT_LOGOS = [
  "/images/clients/client-b.png",
  "/images/clients/client-c.png",
  "/images/clients/brand-c.jpg",
];

// ---------- ABOUT ----------

export const ABOUT = {
  heading: "About Advantex",
  intro: "Advantex Battery is the latest venture by Patodia Group into the renewable and green sector.",
  whatWeDo: {
    heading: "Advantex Was Born As A Quality-First Manufacturer In India's Lithium Battery Ecosystem.",
    body: "We launched Advantex Battery LLP in November 2020 as part of the Patodia Group. Combining our renewable energy experience and know-how, we saw during the March 2020 COVID lockdown that customers urgently needed reliable solar backup solutions. Frustrated by lead–acid battery shortcomings, we embarked on creating longer-life, high-performance energy storage systems.",
    values: ["Restore Safety", "Restore Trust", "Restore Reliability"],
  },
  growth: {
    heading: "Our Exponential Performance",
    body: "Advantex Battery has scaled rapidly from 850 to over 20,000 units annually, achieving 270% year-on-year growth. With a 3x capacity expansion to 120 MWh/year, we're powering the future with exponential momentum and breakthrough energy solutions.",
  },
};

export const STATS = [
  { value: "60,000", label: "Battery Packs", sub: "Current annual output" },
  { value: "120 MWh", label: "/ Year", sub: "Current capacity" },
  { value: "4.5 Sigma", label: "Rating", sub: "< 0.2% manufacturing defects" },
  { value: "225%", label: "Growth", sub: "For last four years" },
];

export const GROWTH_CHART = "/images/about/growth-chart.png";

export const ABOUT_GALLERY = [1, 2, 3, 4, 5, 8, 9, 11, 12, 13, 14, 16, 18, 19].map(
  (n) => `/images/about/gallery-${n}.png`,
);

// ---------- OUR STORY & LEGACY ----------

export const STORY = {
  heading: "Our Story & Legacy",
  subheading: "Our Journey Toward Energy Innovation",
  intro:
    "From powering solar ambitions to shaping India's green energy journey, Advantex was born from years of industrial expertise. Our legacy is rooted in innovation, trust, and a commitment to a cleaner, safer future.",
};

export const TIMELINE = [
  {
    year: "2020",
    title: "The Spark of Innovation",
    items: [
      "Conducted in-depth market research",
      "Identified critical gaps in battery quality and supply",
      "Entered lithium battery manufacturing",
    ],
  },
  {
    year: "2021",
    title: "Laying the Foundation",
    items: [
      "Finalized product segments and target markets",
      "Early supply chain exploration revealed unmet quality standards",
      "Secured and prepared a 5,000 sq. ft. industrial unit",
      "Established an in-house production facility",
    ],
  },
  {
    year: "2022",
    title: "Production Begins",
    items: [
      "Manufacturing plant fully installed and operational",
      "Commercial production officially launched",
      "Early customer feedback addressed with rapid quality improvements",
    ],
  },
  {
    year: "2023",
    title: "Scaling Up",
    items: [
      "Gained strong acceptance across regional markets",
      "Installed high-capacity cell grading machines to meet growing demand",
      "Introduced 3-wheeler lithium battery product line",
      "Expanded dealer and distribution network into Odisha and Jharkhand",
    ],
  },
  {
    year: "2024",
    title: "Market Leadership & Expansion",
    items: [
      "Recognized as East India's trusted lithium battery brand",
      "Became a preferred supplier for leading regional OEMs",
      "Built a dealership network exceeding 500 partners",
      "Began production with high-density prismatic cells",
      "Scaled Energy Storage Systems (ESS) production with new equipment",
    ],
  },
  {
    year: "2025-26",
    title: "Advancing the Frontier",
    items: [
      "Commissioned a new laser-welded battery pack assembly line",
      "Initiated R&D on drone-specific battery packs",
      "Began facility expansion with an additional 6,000 sq. ft.",
      "Started development of specialized packs for defence and extreme climate conditions",
    ],
  },
  {
    year: "2027+",
    title: "Vision for Tomorrow",
    items: [
      "Strategic expansion with a new assembly facility planned in Central India",
      "Commitment to nationwide growth and next-gen battery technologies",
    ],
  },
];

export const FOUNDER_QUOTE = {
  quote:
    "When we sell lithium batteries, we're not just delivering a product, we're upholding a responsibility. That responsibility means doing everything possible to prevent customer complaints and safety concerns. When a customer comes back, it should be for one reason only, because they trust us completely.",
  name: "Pawan Kumar Patodia",
  role: "Chief Mentor",
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Pawan Kumar Patodia",
    role: "Chief Mentor",
    bio: "With over 50 years of experience, Pawan Kumar Patodia is a seasoned expert in technical product development and quality control. His legacy spans Indian defence armament supplies, strategic market identification, and brand building, making him a guiding force behind Advantex's innovation and excellence.",
  },
  {
    name: "Mayank Patodia",
    role: "Head of Production",
    bio: "With 22+ years of experience across electricity, textiles, and solar EPC, Mayank Patodia brings deep cross-industry expertise. An MNRE-certified Solar Rooftop…",
  },
  {
    name: "Prateek Patodia",
    role: "Head of Admin & Finance",
    bio: "With 15+ years of experience, Prateek Patodia has led patented innovations in municipal and defence hardware. Formerly heading LED solar ventures, he now oversees administrative and financial operations at Advantex, bringing structured control and precision to every layer of the company's operations.",
  },
];

// ---------- OUR EXPERTISE ----------

export const EXPERTISE = {
  heading: "Our Expertise",
  body: "Advantex believes in quality-first approach. Our vetted supply chain includes just 5–6 approved lithium cell manufacturers and 3–4 critical component suppliers, all meeting our stringent material quality standards and process controls.",
  testing: {
    heading: "Advantex takes the Safety of its Battery packs as paramount.",
    body: "We engineer our battery packs with advanced protective features and subject them to rigorous multi-stage testing, ensuring unmatched reliability, durability, and peace of mind for every user.",
    bullets: [
      "100% of cells undergo physical and electrical testing in line with stringent standards.",
      "100% of BMS units are tested pre- and post-production to ensure they meet defined safety parameters.",
      "All battery packs undergo 100% safety testing for short-circuit and overcurrent protection compliance.",
    ],
  },
};

export const SAFETY_FEATURES = [
  {
    title: "BMS Facilities",
    body: "Advantex BMS includes short-circuit and overcurrent protection, SOC-based cell balancing, and temperature-sensitive cutoff logic. It enables real-time monitoring, performance optimization, and safe operation under extreme conditions.",
    icon: "/images/expertise/safety-a.png",
  },
  {
    title: "Fire Safety",
    body: "Multi-layer fire-retardant materials are integrated within the battery structure, along with an external fire-resistant PVC layer. This design enhances fire suppression capability and supports safer emergency response.",
    icon: "/images/expertise/safety-b.png",
  },
  {
    title: "Waterproofing",
    body: "Our battery packs are available with resin protection and IP-rated sealing. Fluid-sealed variants are also offered, making them ideal for rugged industrial environments and resistance to direct water contact.",
    icon: "/images/expertise/safety-c.png",
  },
  {
    title: "AIS Norms",
    body: "All battery packs are designed to meet relevant industry standards and exceed key government safety norms. Each unit is evaluated for structural integrity, fire safety, waterproofing, and short-circuit protection.",
    icon: "/images/expertise/safety-d.png",
  },
];

export const MANUFACTURING_PROCESS = [
  {
    title: "Cell Procurement & Grading",
    body: "High-quality lithium cells sourced from A-grade manufacturers undergo full charge–discharge cycles. This ensures uniform capacity and eliminates out-of-spec cells.",
    icon: "/images/expertise/process-1.png",
  },
  {
    title: "Cell Sorting & Conditioning",
    body: "100% IR testing is conducted with a low tolerance threshold (<±0.06), followed by voltage matching and sorting based on each cell's internal resistance.",
    icon: "/images/expertise/process-2.png",
  },
  {
    title: "Insulation & Layering",
    body: "Barley paper, epoxy sheets, and thermal paste are inserted between layers. All insulation materials are precision-cut to ensure accurate fit and reliable thermal performance.",
    icon: "/images/expertise/process-3.png",
  },
  {
    title: "Assembly & Welding",
    body: "Layout is pre-verified for polarity, shape, and safety using AutoCAD-based holder designs aligned with pack specifications. Cells are grouped and spot-welded using pure nickel.",
    icon: "/images/expertise/process-4.png",
  },
  {
    title: "BMS Integration",
    body: "Custom BMS units with high-current protection are integrated into each pack. Every unit is tested using a dedicated BMS tester to validate overcharge, thermal, and short-circuit protection.",
    icon: "/images/expertise/process-5.png",
  },
  {
    title: "Charge/Discharge Testing",
    body: "Post-assembly, packs undergo controlled charge–discharge test cycles. Charging to ~35% and discharging to ~10–15% verifies voltage accuracy, temperature control, and software stability.",
    icon: "/images/expertise/process-6.png",
  },
  {
    title: "Final QC & Packaging",
    body: "Each unit undergoes visual and technical inspection of insulation and wiring, followed by packaging in custom-designed enclosures with built-in fail-safes for heat and vibration protection.",
    icon: "/images/expertise/process-7.png",
  },
];

// ---------- PRODUCTS ----------

export const PRODUCTS_HUB = {
  heading: "Our Products",
  tagline: "Reliable energy, engineered for performance. Smarter batteries. Stronger tomorrow.",
};

export interface ProductPage {
  slug: string;
  navLabel: string;
  eyebrow: string;
  heading: string;
  body: string;
  configurations?: string[];
  specs?: { label: string; value: string }[];
  heroImage?: string;
  productImage?: string;
  gallery?: string[];
}

export const TWO_WHEELER: ProductPage = {
  slug: "2-wheeler-batteries",
  navLabel: "2-Wheeler Batteries",
  eyebrow: "Battery Solutions",
  heading: "Powering the Future of 2-Wheelers",
  body: "The next generation of electric 2-wheelers runs on lithium-ion technology — and Advantex is leading the charge. We offer battery solutions ranging from 48V to 72V and 21Ah to 43Ah, built to meet diverse performance needs. With flexible configurations and a dedicated in-house design team, we develop custom enclosures that maximize capacity while efficiently utilizing available space, ensuring every ride is powered more intelligently, for longer, and with greater safety.",
  specs: [
    { label: "Voltage Range", value: "48V – 72V" },
    { label: "Capacity Range", value: "21Ah – 43Ah" },
    { label: "Design", value: "Custom enclosures, in-house" },
  ],
  heroImage: "/images/products/2-wheeler/hero.jpg",
  productImage: "/images/products/2-wheeler/product.png",
  gallery: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/images/products/2-wheeler/gallery-${n}.png`),
};

export const THREE_WHEELER: ProductPage = {
  slug: "3-wheeler-batteries",
  navLabel: "3-Wheeler Batteries",
  eyebrow: "Battery Solutions",
  heading: "Powering the Future of 3-Wheelers",
  body: "Electric 3-wheelers are transforming mass mobility with clean, affordable transportation. We support this shift with PCB-integrated BMS and screw-type cells designed for enhanced safety, durability, and cost efficiency. Electric 3-wheelers are rapidly replacing manual carts and internal combustion engine (ICE) vehicles in the last-mile delivery sector. Advantex provides robust battery configurations optimized for high payload capacity and consistent performance. Most battery packs are designed to fit under the rear or middle seat, depending on the vehicle's structure and customer requirements.",
  configurations: ["51.2V 105Ah", "64V 105Ah", "51.2V 132Ah", "51.2V 206Ah", "51.2V–206Ah (64V variant available)", "51.2V 100Ah"],
  heroImage: "/images/products/3-wheeler/hero.png",
  productImage: "/images/products/3-wheeler/product.png",
  gallery: [
    "/images/products/3-wheeler/gallery-9.png",
    "/images/products/3-wheeler/gallery-10.png",
    "/images/products/3-wheeler/gallery-11.png",
    "/images/products/3-wheeler/gallery-12.png",
    "/images/products/3-wheeler/gallery-ud16.png",
    "/images/products/3-wheeler/gallery-ud17.png",
    "/images/products/3-wheeler/gallery-ud18.png",
  ],
};

export const ESS: ProductPage = {
  slug: "energy-storage-systems",
  navLabel: "Energy Storage Systems (ESS)",
  eyebrow: "Battery Solutions",
  heading: "Smart Energy Storage Systems for Smarter Infrastructure",
  body: "Envision a Battery Energy Storage System that's simple to install and relocate, boasts up to 10 years of service life, and is fully scalable and aesthetically refined. Our lithium-ion technology requires no maintenance \"top-ups\" and supports advanced features such as remote monitoring, real-time charge status, and beyond.",
  heroImage: "/images/products/ess/hero.png",
};

export const ESS_PRODUCTS = [
  {
    title: "Rack-Mount ESS",
    body: "Rack mountable ESS battery pack. Up to 14 parallel (74 kW). Up to 6 units in one stack.",
    image: "/images/products/ess/product.png",
  },
  {
    title: "Wall-Mount ESS",
    body: "Capacity: 51.2V – 105Ah / Power: 5.3 kW / Mounting: Wall mount",
    image: "/images/products/ess/product.png",
  },
  {
    title: "Stackable Rack ESS",
    body: "Capacity: 51.2V – 105Ah / Power: 5.3 kW / Mounting: Stackable rack mount",
    image: "/images/products/ess/product.png",
  },
  {
    title: "Compact Wall-Mount ESS",
    body: "Capacity: 51.2V – 105Ah / Power: 5.3 kW / Mounting: Wall mount",
    image: "/images/products/ess/product.png",
  },
];

export const ESS_SECTIONS = {
  commercial: {
    heading: "Commercial ESS",
    body: "Our energy storage systems provide uninterrupted power supply (UPS), voltage stabilization, and backup power in one space-saving solution. Ideal for homes, offices, and industrial facilities, they occupy up to one-third the footprint of conventional lead-acid systems and reliably support high-demand loads such as air conditioning.",
    disclaimer: "Battery systems can be configured for 1C discharge rates (full discharge in one hour). Heavy appliances such as air conditioners should be operated through inverter-driven systems only.",
    image: "/images/products/ess/commercial.png",
  },
  solar: {
    heading: "Solar Batteries",
    hook: "If a solar plant lasts over 20 years, why settle for battery storage that lasts only 3–4 years?",
    subheading: "Durable, maintenance-free performance",
    body: "Our lithium-ion solar storage systems deliver over 10 years of reliable operation, with no servicing or water refilling required.",
    images: ["/images/products/ess/solar-1.jpg", "/images/products/ess/solar-2.jpg"],
  },
};

export const INVERTER_BATTERY: ProductPage = {
  slug: "inverter-battery",
  navLabel: "Inverter Battery",
  eyebrow: "Battery Solutions",
  heading: "Inverter Battery",
  body: "Lithium-ion inverter battery solutions built for dependable backup power — compact, maintenance-free, and engineered to replace lead-acid systems with longer service life and faster recharge.",
  heroImage: "/images/products/inverter/hero.png",
};

export const INVERTER_PRODUCTS = [
  {
    title: "All-in-One Inverter Combo",
    body: "Nominal Voltage: 220Vac / Output Voltage: 220Vac / Inverter Rating: 1100VA / Battery Power: 1200 Watt",
    image: "/images/products/inverter/product.png",
  },
  {
    title: "Inverter Battery — 1.6–2.6kW",
    body: "Nominal Voltage: 12.8V / Power: 1.6 – 2.6kW / Battery Power: 1600 – 2600 Watt",
    image: "/images/products/inverter/gallery-1.png",
  },
  {
    title: "Inverter Battery — 1.3kW",
    body: "Nominal Voltage: 12.8V / Power: 1.3kW / Battery Power: 1300 Watt",
    image: "/images/products/inverter/gallery-3.png",
  },
  {
    title: "Inverter Battery — 2.7–5.33kW",
    body: "Nominal Voltage: 25.6V / Power: 2.7 – 5.33kW / Battery Power: 2700 – 5330 Watt",
    image: "/images/products/inverter/gallery-2.jpg",
  },
];

export const OTHER_SOLUTIONS: ProductPage = {
  slug: "other-solutions",
  navLabel: "Other Solutions",
  eyebrow: "Battery Solutions",
  heading: "Other Solutions",
  body: "Solar batteries engineered for 2000+ reliable charge cycles. Tailor-made and custom battery solutions for aerial drones, heavy loaders, commercial vehicular applications, and electronics power backup.",
  heroImage: "/images/products/other-solutions/hero.png",
};

// ---------- OUR INNOVATION ----------

export const INNOVATION = {
  heading: "Our Innovation",
  tagline: "Where technology meets purpose and batteries do more than power.",
  cellChemistry: {
    heading: "Advanced Cell Chemistry",
    body: "We work with the world's most trusted cell manufacturers to deliver batteries with longer life, higher energy density, and unmatched reliability.",
    taglines: [
      { label: "Smart Power.", icon: "/images/innovation/icon-1.png" },
      { label: "Intelligent Design.", icon: "/images/innovation/icon-2.png" },
      { label: "Reliable Performance.", icon: "/images/innovation/icon-3.png" },
    ],
  },
  supplierBanner: "/images/innovation/samsung-sdi.png",
};

export const CELL_TYPES = [
  {
    title: "Ni-Co-Mn (NCM) Lithium-Ion Cells",
    points: [
      "Available in IP 67 enclosure",
      "Up to 5-year warranty support for electric mobility applications",
      "Ideal for high-performance, compact applications",
    ],
  },
  {
    title: "Lithium Ferro Phosphate (LFP) Cells",
    points: [
      "Premium cells sourced from EVE, Ganfeng, and Highstar",
      "Up to 10 years of service life",
      "Extended warranty options for long-term applications",
      "Available for versatile applications",
    ],
  },
];

export const PRISMATIC_LFP = {
  heading: "Prismatic LFP Cells",
  intro: "Engineered for High-Demand Industrial Applications such as Forklifts and Energy Storage Systems (ESS), our prismatic LFP cells offer:",
  points: ["High Power Density", "Enhanced Thermal Stability", "Large Capacity Variants (50Ah and Above)"],
};

export const BMS = {
  heading: "Smart Battery Management System (BMS)",
  body: "All Advantex battery packs are equipped with robust BMS solutions from Jiabaida (JBD), ensuring precise control, comprehensive protection, and intelligent diagnostics.",
  safety: [
    "1C continuous discharge capability",
    "Configurable fast-charging support",
    "Intelligent cell balancing",
    "Integrated temperature monitoring",
    "Multi-layer protection against over/under voltage, over-current, short circuit, and over-temperature",
  ],
  smart: [
    "Real-time State of Charge (SOC) monitoring",
    "Cycle history tracking for battery health analysis",
    "Cell-level voltage and temperature diagnostics",
    "Remote charge/discharge enable control",
    "Remote system cut-off and restart",
    "Access via mobile application or PC dashboard",
  ],
};

export const CELL_SUPPLIERS = ["Samsung", "EVE", "Ganfeng", "Highstar", "Jiabaida (JBD)"];

// ---------- DEALERSHIP ----------

export const DEALERSHIP = {
  heading: "Our Dealers",
  subheading: "Find an Advantex Dealer Near You",
  body: "Explore answers to the most frequently asked questions about our batteries, services, safety, and dealership support, all in one place. We're just a message away.",
};

export interface Dealer {
  shop: string;
  address: string;
  city: string;
  pin?: string;
  phone?: string;
}

// A representative sample from the live dealer directory (99 entries total) —
// wire up the full dataset from the client once available.
export const DEALERS: Dealer[] = [
  { shop: "B. Gupta (Tea) Pvt. Ltd.", address: "Hailkanadi", city: "Assam", phone: "9051355557" },
  { shop: "Induautomated Solution", address: "North 24 Parganas", city: "West Bengal", phone: "9051355557" },
  { shop: "Jyotilaxmi Tandia", address: "Karamdihi, Sundargarh", city: "Odisha" },
  { shop: "Mr. Nandan Chakraborty", address: "Paschim Medinipore", city: "West Bengal", pin: "721124" },
  { shop: "Pranab Electrical Service & Solution", address: "Jhargram", city: "West Bengal", phone: "9635396176" },
  { shop: "Sagar Cycle Mart", address: "Badu Road, Abdalpur", city: "West Bengal" },
  { shop: "Amarjeet Singh", address: "Dhulagarh, Rasikal", city: "West Bengal" },
  { shop: "Evana Electricals Private Limited", address: "Chinsurah", city: "West Bengal" },
  { shop: "A.S Enterprise", address: "Krishnagar", city: "West Bengal" },
];

export const DEALER_INQUIRY_OPTIONS = [
  "2-Wheeler Batteries",
  "3-Wheeler Batteries",
  "Energy Storage System",
  "Inverter Battery",
  "Other Solutions",
];

// ---------- CONTACT ----------

export const CONTACT = {
  heading: "Contact Us",
  subheading: "Let's Connect",
  tagline: "Your next battery upgrade starts here",
};

export const STRAIGHT_TO_DEALERS = {
  heading: "Meet Our Dealers at Their Locations",
  body: "All Advantex dealers undergo thorough training in product specifications, safety standards, and service protocols, ensuring you connect with informed, reliable experts who guide you with confidence and clarity at every step. Find a certified dealer near you.",
  cta: "Partner with Us",
};

// ---------- FOOTER ----------

export const FOOTER_CTA = {
  heading: "Your next battery upgrade starts here.",
  body: "We'd love to hear from you — drop us a message anytime.",
  cta: "Let's Get Started",
};
