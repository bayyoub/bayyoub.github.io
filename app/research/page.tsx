import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Research", description: "QSMD research in metal oxides, perovskites, finite-temperature stability, and interfacial dynamics." };

const themes = [
  { n: "01", title: "Surfaces, defects & catalysis", text: "Oxygen vacancies, adsorbates, metal dopants, and reconstructions alter metal oxide and perovskite surfaces in ways that are not evident from bulk properties. Atomistic models connect surface structure with stability and catalytic behavior.", tags: ["Metal oxides and perovskites", "Oxygen vacancies & defect ordering", "Dopant segregation and metal ingress / egress"], image: "/oxide-surface.webp", imageAlt: "Conceptual illustration of a metal oxide surface with atoms and a surface vacancy", caption: "Illustration · oxide surface" },
  { n: "02", title: "Stability beyond zero kelvin", text: "First-principles calculations and thermodynamic models reveal how temperature and chemical environment affect competing surface and bulk structures. Vibrational and configurational contributions are essential to that picture.", tags: ["Ab initio thermodynamics", "Vibrational free energies", "Competing phases and structures"] },
  { n: "03", title: "Dynamics & free energy at interfaces", text: "Molecular dynamics and enhanced sampling probe transport, adsorption, and rare events at solid–liquid interfaces. A current student project examines dissolution at oxide–water interfaces and the free-energy pathways involved.", tags: ["Solid–liquid interfaces", "Ongoing student work · dissolution", "Molecular dynamics and enhanced sampling"], image: "/aqueous-interface.webp", imageAlt: "Conceptual illustration of an ion moving from an oxide surface into water", caption: "Illustration · aqueous interface" },
];

export default function Research() {
  return <main>
    <section className="page-hero section-shell"><p className="eyebrow">Research</p><div className="page-hero-grid"><h1>Structure, stability, and dynamics.</h1><p>Computational studies of functional materials, from the atomic structure of a surface to its behavior under operating conditions.</p></div></section>
    <section className="section-shell theme-list" aria-label="Research themes">{themes.map(theme => <article className="theme-row" key={theme.n}><span className="theme-number">{theme.n}</span><div className={`theme-content${theme.image ? " with-visual" : ""}`}><div className="theme-copy"><h2>{theme.title}</h2><p>{theme.text}</p><div className="theme-tags">{theme.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>{theme.image && <figure className="theme-visual"><img src={theme.image} alt={theme.imageAlt} width="1200" height="675" loading="lazy" /><figcaption>{theme.caption}</figcaption></figure>}</div></article>)}</section>
    <section className="methods-band section-shell"><p className="section-label">Methods</p><div><h2>Tools matched to the question.</h2><p>Density functional theory · Molecular dynamics · Enhanced sampling · Phonons and thermodynamics · Free-energy methods</p><Link className="text-link" href="/publications">Related publications <span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}
