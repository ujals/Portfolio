import { useEffect, useState, type FormEvent } from "react";

const ACCENT = "#3DDC97";
const EMAIL = "ujalsingh1997@gmail.com";
const LINKEDIN_URL = "#contact"; // TODO: replace with your LinkedIn profile URL

const path = [
  { n: "01", title: "Field devices", tech: "RS485 energy meters · pH / TDS sensors · GPS" },
  { n: "02", title: "Gateways & firmware", tech: "Modbus decoders · LoRaWAN · ChirpStack" },
  { n: "03", title: "Transport", tech: "MQTT · TCP/IP · WebSocket" },
  { n: "04", title: "Cloud infrastructure", tech: "AWS IoT · DigitalOcean · Docker · Terraform" },
  { n: "05", title: "Dashboards & automation", tech: "ThingsBoard · Grafana · Node-RED · n8n" },
];

const metrics = [
  { value: "58+", label: "RS485 meters integrated into a forging-plant energy management system" },
  { value: "60%", label: "Faster ChirpStack rollouts after automating deployment with Python & Docker" },
  { value: "3+", label: "Years shipping industrial IoT, from firmware to cloud dashboards" },
  { value: "2", label: "Countries delivered for — India and a fleet client in Singapore" },
];

const jobs = [
  {
    dates: "Jul 2024 — Present",
    role: "IoT Engineer",
    company: "Energeia Microgrid Pvt Ltd",
    place: "Delhi, India",
    summary: "Industrial energy monitoring and SCADA-style systems.",
    points: [
      "Integrated 58+ RS485 meters into a forging-plant energy management system",
      "Built real-time SCADA-style dashboards for water quality",
      "Optimised MQTT and LoRa pipelines across industrial energy systems",
    ],
  },
  {
    dates: "Jun 2022 — Present",
    role: "IoT Solutions Architect",
    company: "Freelance",
    place: "Remote",
    summary: "Custom IoT solutions, embedded firmware and cloud integrations.",
    points: [
      "Developed embedded firmware and Modbus decoders for EV and energy sensors",
      "Integrated Stripe into ThingsBoard for meter credit top-ups using n8n and webhooks",
      "Delivered white-label ThingsBoard with custom dashboards and advanced rule chains",
    ],
  },
  {
    dates: "Jun 2022 — Jun 2024",
    role: "IoT Engineer",
    company: "Nibiaa Devices Pvt. Ltd.",
    place: "Imphal, India",
    summary: "LoRaWAN infrastructure and water treatment monitoring.",
    points: [
      "Led LoRaWAN-based water treatment monitoring across the Andaman & Nicobar Islands",
      "Automated ChirpStack deployment with Python and Docker — 60% faster rollout",
      "Built a golf-cart asset tracking and fleet management solution for a Singapore client",
    ],
  },
];

const projects = [
  { n: "01", kind: "Case study", title: "Forging Plant EMS", desc: "Real-time energy monitoring for a forging plant, with 58+ RS485 meters feeding live dashboards.", tags: ["Modbus RS485", "MQTT", "Real-time"] },
  { n: "02", kind: "Enterprise", title: "Water Treatment Monitoring", desc: "LoRaWAN water-quality network across the Andaman & Nicobar Islands with live pH and TDS tracking.", tags: ["LoRaWAN", "Water quality", "Sensors"] },
  { n: "03", kind: "International client", title: "Golf Cart Asset Tracking", desc: "Real-time tracking and fleet management system for a client in Singapore.", tags: ["GPS", "Asset tracking", "Fleet"] },
  { n: "04", kind: "Open source", title: "Helium Network Mapper", desc: "Flask web app for LoRaWAN coverage diagnostics and network optimisation.", tags: ["Flask", "Helium", "Network analysis"] },
  { n: "05", kind: "DevOps", title: "ChirpStack Automation", desc: "Scripted ChirpStack deployments with Python and Docker, cutting rollout time by 60%.", tags: ["Docker", "Python", "ChirpStack"] },
  { n: "06", kind: "Custom platform", title: "White-label ThingsBoard", desc: "Branded ThingsBoard with custom dashboards, advanced rule chains and Stripe-powered meter credit.", tags: ["ThingsBoard", "Stripe API", "n8n"] },
];

const skills = [
  { name: "PROTOCOLS", items: ["LoRaWAN", "Modbus RS485", "MQTT", "TCP/IP", "BLE", "WebSocket"] },
  { name: "PLATFORMS", items: ["ThingsBoard", "ChirpStack", "Node-RED", "n8n", "Grafana", "Prometheus"] },
  { name: "CLOUD & DEVOPS", items: ["AWS (EC2, S3, IoT Core)", "DigitalOcean", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { name: "LANGUAGES", items: ["Python", "C++", "JavaScript", "TypeScript", "Shell scripting", "HTML / CSS"] },
];

const certs = [
  { name: "AWS IoT Core", by: "Amazon Web Services", year: "2025" },
  { name: "Cybersecurity", by: "Google", year: "2024" },
  { name: "Web Development", by: "Udemy", year: "2024" },
  { name: "Hardware Repair", by: "Certified", year: "2019" },
];

const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };
const display = { fontFamily: "'Space Grotesk', Inter, sans-serif" };

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="m-0 text-[13px] tracking-[0.04em]" style={{ ...mono, color: ACCENT }}>
      {children}
    </p>
  );
}

function H2({ children }: { children: string }) {
  return (
    <h2 className="mt-3 text-[32px] md:text-[44px] font-semibold leading-[1.15] tracking-[-0.01em]" style={display}>
      {children}
    </h2>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="mt-[10px] h-1.5 w-1.5 flex-none rounded-[1px]" style={{ background: ACCENT }} />
      <span>{children}</span>
    </li>
  );
}

const card = "bg-[#121821] border border-[#1F2A37] rounded-2xl";

export default function Home() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const id = "portfolio-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap";
      document.head.appendChild(link);
    }
    document.title = "Kshetrimayum Ujal Singh — IoT Engineer";
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry from ${f.get("name") || "your website"}`);
    const body = encodeURIComponent(`${f.get("message") || ""}\n\n— ${f.get("name") || ""} (${f.get("email") || ""})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E6EDF3] text-base leading-[1.6]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* NAV */}
      <header className="border-b border-[#1F2A37]">
        <nav aria-label="Main" className="mx-auto max-w-[1200px] px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-lg border flex items-center justify-center text-[13px] font-medium" style={{ ...mono, borderColor: ACCENT, color: ACCENT }}>
              KU
            </span>
            <span className="text-[17px] font-semibold" style={display}>Ujal Singh</span>
          </a>
          <div className="flex flex-wrap items-center gap-7 text-[15px]">
            <a href="#experience" className="text-[#93A1B0] hover:text-white">Experience</a>
            <a href="#projects" className="text-[#93A1B0] hover:text-white">Projects</a>
            <a href="#skills" className="text-[#93A1B0] hover:text-white">Skills</a>
            <a href="#contact" className="text-[#93A1B0] hover:text-white">Contact</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex min-h-[44px] items-center rounded-lg px-[18px] font-semibold text-[#0B0F14]" style={{ background: ACCENT }}>
              Hire me
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-[1200px] px-6 pt-24 pb-20 flex flex-wrap items-center gap-16">
        <div className="flex-[1_1_520px] min-w-0">
          <p className="mb-6 flex items-center gap-2.5 text-[13px] tracking-[0.02em] text-[#93A1B0]" style={mono}>
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
            OPEN TO IIoT PROJECTS · DELHI, INDIA
          </p>
          <h1 className="m-0 text-[40px] sm:text-[56px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-0.02em]" style={display}>
            I connect industrial machines to the cloud.
          </h1>
          <p className="mt-7 max-w-[560px] text-[19px] text-[#B4C0CC]">
            Kshetrimayum Ujal Singh — IoT Engineer &amp; Solutions Architect with 3+ years building end-to-end industrial
            automation: field meters on Modbus RS485 and LoRaWAN, MQTT pipelines, and ThingsBoard dashboards on AWS and
            DigitalOcean.
          </p>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <a href="#projects" className="inline-flex min-h-[48px] items-center gap-2.5 rounded-lg px-6 font-semibold text-[#0B0F14]" style={{ background: ACCENT }}>
              See my projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </a>
            <a href="#contact" className="inline-flex min-h-[48px] items-center rounded-lg border border-[#2B3A4A] px-6 font-medium hover:border-[#3B4A5A]">
              Get in touch
            </a>
          </div>
          <div className="mt-9 flex gap-5 text-sm">
            <a href="https://github.com/ujals" target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-[#93A1B0] hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
              GitHub
            </a>
            <a href={LINKEDIN_URL} className="inline-flex min-h-[44px] items-center gap-2 text-[#93A1B0] hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 0 0-4 0" /></svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={`${card} flex-[1_1_380px] min-w-0 max-w-[460px] p-7`}>
          <div className="flex items-center justify-between text-xs tracking-[0.04em] text-[#93A1B0]" style={mono}>
            <span>SIGNAL PATH</span>
            <span style={{ color: ACCENT }}>● WHAT I BUILD</span>
          </div>
          <div className="mt-6 flex flex-col gap-1.5">
            {path.map((s, i) => (
              <div key={s.n} className="flex flex-col">
                <div className="flex items-center gap-4 rounded-[10px] border border-[#1F2A37] bg-[#0E141B] px-4 py-3.5">
                  <span className="w-6 text-xs" style={{ ...mono, color: ACCENT }}>{s.n}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold">{s.title}</div>
                    <div className="text-xs text-[#93A1B0]" style={mono}>{s.tech}</div>
                  </div>
                </div>
                {i < path.length - 1 && (
                  <div className="pl-[26px] text-[#3B4A5A]">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 1v12" /><path d="m3 10 4 4 4-4" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section aria-label="Highlights" className="border-y border-[#1F2A37] bg-[#0E141B]">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-12 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {metrics.map((m) => (
            <div key={m.value}>
              <div className="text-5xl font-semibold leading-none" style={{ ...display, color: ACCENT }}>{m.value}</div>
              <p className="mt-3 text-[15px] text-[#B4C0CC]">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-[1200px] px-6 pt-28 pb-12 scroll-mt-4">
        <Eyebrow>01 / EXPERIENCE</Eyebrow>
        <H2>Where I've worked</H2>
        <div className="mt-14 flex flex-col gap-5">
          {jobs.map((j) => (
            <article key={j.company + j.dates} className={`${card} flex flex-wrap gap-x-12 gap-y-6 p-8`}>
              <div className="flex-[1_1_240px] min-w-0">
                <p className="text-[13px] text-[#93A1B0]" style={mono}>{j.dates}</p>
                <h3 className="mt-2.5 mb-1 text-[22px] font-semibold" style={display}>{j.role}</h3>
                <p className="font-medium">{j.company}</p>
                <p className="mt-1 text-sm text-[#93A1B0]">{j.place}</p>
              </div>
              <div className="flex-[2_1_420px] min-w-0">
                <p className="mb-4 text-[#B4C0CC]">{j.summary}</p>
                <ul className="flex flex-col gap-2.5">
                  {j.points.map((p) => <Bullet key={p}>{p}</Bullet>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-[1200px] px-6 pt-24 pb-12 scroll-mt-4">
        <Eyebrow>02 / PROJECTS</Eyebrow>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <H2>Selected industrial IoT work</H2>
          <p className="max-w-[420px] text-[#93A1B0]">Systems running in plants, water networks and fleets — from the sensor bus to the dashboard.</p>
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(min(320px,100%),1fr))]">
          {projects.map((p) => (
            <article key={p.n} className={`${card} flex flex-col gap-3.5 p-7`}>
              <div className="flex items-center justify-between text-xs text-[#93A1B0]" style={mono}>
                <span style={{ color: ACCENT }}>{p.n}</span>
                <span>{p.kind}</span>
              </div>
              <h3 className="mt-2 text-[22px] font-semibold leading-[1.25]" style={display}>{p.title}</h3>
              <p className="flex-1 text-[15px] text-[#B4C0CC]">{p.desc}</p>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-[#263445] bg-[#0E141B] px-2.5 py-1 text-xs text-[#C9D4DE]" style={mono}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-[1200px] px-6 pt-24 pb-12 scroll-mt-4">
        <Eyebrow>03 / STACK</Eyebrow>
        <H2>Tools I work with, sensor to cloud</H2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#1F2A37] bg-[#1F2A37] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {skills.map((g) => (
            <div key={g.name} className="bg-[#121821] p-7">
              <h3 className="mb-[18px] text-[13px] font-medium tracking-[0.04em] text-[#93A1B0]" style={mono}>{g.name}</h3>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="education" className="mx-auto max-w-[1200px] px-6 pt-24 pb-12 scroll-mt-4">
        <Eyebrow>04 / CREDENTIALS</Eyebrow>
        <H2>Education &amp; certifications</H2>
        <div className="mt-14 flex flex-wrap gap-5">
          <div className={`${card} flex-[1_1_360px] min-w-0 p-8`}>
            <p className="text-[13px] text-[#93A1B0]" style={mono}>2016 — 2020</p>
            <h3 className="mt-2.5 mb-1 text-[22px] font-semibold" style={display}>B.E. Computer Science Engineering</h3>
            <p className="font-medium">Anna University · 1st Division</p>
            <ul className="mt-5 flex flex-col gap-2.5 text-[#B4C0CC]">
              <Bullet>Ranked in the top 1% of the State Board Examination</Bullet>
              <Bullet>Selected for the INSPIRE Award</Bullet>
            </ul>
          </div>
          <div className={`${card} flex-[1_1_360px] min-w-0 px-8 py-3`}>
            {certs.map((c, i) => (
              <div key={c.name} className={`flex items-center justify-between gap-4 py-5 ${i < certs.length - 1 ? "border-b border-[#1F2A37]" : ""}`}>
                <div>
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-sm text-[#93A1B0]">{c.by}</div>
                </div>
                <span className="text-[13px] text-[#93A1B0]" style={mono}>{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1200px] px-6 pt-24 pb-28 scroll-mt-4">
        <div className="flex flex-wrap gap-14 rounded-[20px] border border-[#1F2A37] bg-[#121821] p-7 md:p-16">
          <div className="flex-[1_1_380px] min-w-0">
            <Eyebrow>05 / CONTACT</Eyebrow>
            <h2 className="mt-3 mb-5 text-[32px] md:text-[44px] font-semibold leading-[1.15] tracking-[-0.01em]" style={display}>
              Got a plant, a fleet or a sensor network to connect?
            </h2>
            <p className="mb-9 text-[#B4C0CC]">Tell me what you're monitoring and where the data needs to go. I usually reply within a day.</p>
            <div className="flex flex-col gap-[18px]">
              <a href={`mailto:${EMAIL}`} className="flex min-h-[44px] items-center gap-3.5 hover:text-white">
                <svg className="text-[#93A1B0]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                {EMAIL}
              </a>
              <a href="tel:+916009857163" className="flex min-h-[44px] items-center gap-3.5 hover:text-white">
                <svg className="text-[#93A1B0]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
                +91 60098 57163
              </a>
              <div className="flex min-h-[44px] items-center gap-3.5">
                <svg className="text-[#93A1B0]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                Delhi, India
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="flex flex-[1_1_380px] min-w-0 flex-col gap-[18px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="cf-name" className="text-sm text-[#B4C0CC]">Your name</label>
              <input id="cf-name" name="name" type="text" required placeholder="Jane Doe" className="min-h-[48px] rounded-lg border border-[#2B3A4A] bg-[#0B0F14] px-3.5 text-[#E6EDF3] placeholder:text-[#5B6878] focus:outline-none focus:ring-2" style={{ ["--tw-ring-color" as string]: ACCENT }} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cf-email" className="text-sm text-[#B4C0CC]">Email</label>
              <input id="cf-email" name="email" type="email" required placeholder="jane@company.com" className="min-h-[48px] rounded-lg border border-[#2B3A4A] bg-[#0B0F14] px-3.5 text-[#E6EDF3] placeholder:text-[#5B6878] focus:outline-none focus:ring-2" style={{ ["--tw-ring-color" as string]: ACCENT }} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cf-msg" className="text-sm text-[#B4C0CC]">What are you building?</label>
              <textarea id="cf-msg" name="message" rows={5} required placeholder="e.g. 40 energy meters on RS485, need a live dashboard" className="resize-y rounded-lg border border-[#2B3A4A] bg-[#0B0F14] px-3.5 py-3 text-[#E6EDF3] placeholder:text-[#5B6878] focus:outline-none focus:ring-2" style={{ ["--tw-ring-color" as string]: ACCENT }} />
            </div>
            <button type="submit" className="min-h-[48px] self-start rounded-lg px-6 font-semibold text-[#0B0F14]" style={{ background: ACCENT }}>
              Send message
            </button>
            {sent && <p className="text-sm text-[#93A1B0]" role="status">Your email app should open with the message ready to send.</p>}
          </form>
        </div>
      </section>

      <footer className="border-t border-[#1F2A37]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 px-6 py-7 text-sm text-[#93A1B0]">
          <span>© {new Date().getFullYear()} Kshetrimayum Ujal Singh</span>
          <span className="text-[13px]" style={mono}>Modbus · LoRaWAN · MQTT · Cloud</span>
        </div>
      </footer>
    </div>
  );
}
