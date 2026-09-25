import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Research", description: "QSMD research in oxide surfaces, finite-temperature stability, and atomistic dynamics." };

const themes = [
  { n: "01", title: "Surfaces, defects & catalysis", text: "Oxygen vacancies, adsorbates, metal dopants, and reconstructions alter oxide surfaces in ways that are not evident from bulk properties. Work on perovskites, including SrTiO₃, connects atomic structure with stability and catalytic behavior.", tags: ["Oxide surface terminations", "Oxygen vacancies & defect ordering", "Dopant segregation and metal ingress / egress"] },
  { n: "02", title: "Stability beyond zero kelvin", text: "First-principles calculations and thermodynamic models reveal how temperature and chemical environment affect competing surface and bulk structures. Vibrational and configurational contributions are essential to that picture.", tags: ["Ab initio thermodynamics", "Vibrational free energies", "Competing phases and structures"] },
  { n: "03", title: "Dynamics & free energy at interfaces", text: "Molecular dynamics and enhanced sampling follow transport, adsorption, and molecular interactions at interfaces. Free-energy landscapes help identify the processes that govern those changes.", tags: ["Solid–liquid interfaces", "Ion transport and adsorption", "Molecular dynamics and enhanced sampling"] },
];

export default function Research() {
  return <main>
    <section className="page-hero section-shell"><p className="eyebrow">Research</p><div className="page-hero-grid"><h1>Structure, stability, and dynamics.</h1><p>Computational studies of functional materials, from the atomic structure of a surface to its behavior under operating conditions.</p></div></section>
    <section className="section-shell theme-list" aria-label="Research themes">{themes.map(theme => <article className="theme-row" key={theme.n}><span className="theme-number">{theme.n}</span><div className="theme-content"><h2>{theme.title}</h2><p>{theme.text}</p><div className="theme-tags">{theme.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</section>
    <section className="methods-band section-shell"><p className="section-label">Methods</p><div><h2>Tools matched to the question.</h2><p>Density functional theory · Molecular dynamics · Phonons and thermodynamics · Free-energy methods</p><Link className="text-link" href="/publications">Related publications <span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}
