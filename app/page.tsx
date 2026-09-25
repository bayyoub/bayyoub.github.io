import Link from "next/link";
import { publications } from "./publications/data";

const focus = [
  { n: "01", title: "Oxide surfaces & defects", text: "Vacancies, adsorbates, and reconstructions govern the stability and chemistry of functional oxides.", detail: "SrTiO₃ / metal oxides" },
  { n: "02", title: "Finite-temperature stability", text: "Vibrational and configurational contributions connect first-principles energies to experimental conditions.", detail: "Thermodynamics / phase stability" },
  { n: "03", title: "Molecular interfaces", text: "Molecular dynamics and free-energy methods reveal transport, adsorption, and interfacial processes.", detail: "Dynamics / free energy" },
];

export default function Home() {
  return <main>
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow light">QSMD · Chemical Engineering · Kuwait University</p>
        <h1>Atomistic modeling of materials and interfaces.</h1>
        <p className="hero-lede">Research into the structure, stability, and dynamics of functional materials, with a focus on oxide surfaces, defects, and the environments that shape them.</p>
        <div className="hero-actions"><Link className="button button-light" href="/research">Research <span aria-hidden="true">↗</span></Link><Link className="text-link light-link" href="/publications">Publications <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="hero-index" aria-label="Research themes">
        <div className="index-topline"><span>Research index</span><span>01 — 03</span></div>
        <div className="index-row"><span>01</span><strong>Oxide surfaces &amp; defects</strong><em>Structure</em></div>
        <div className="index-row"><span>02</span><strong>Finite-temperature stability</strong><em>Thermodynamics</em></div>
        <div className="index-row"><span>03</span><strong>Molecular interfaces</strong><em>Dynamics</em></div>
        <div className="index-footnote">From atomic mechanisms to materials behavior.</div>
      </div>
    </section>

    <section className="section-shell intro-section">
      <p className="section-label">About the group</p>
      <div><h2>From atomic mechanisms to materials behavior.</h2><p>Led by Dr. Bader A. Alayyoub at Kuwait University, QSMD combines density functional theory, molecular dynamics, and thermodynamics to investigate surfaces, defects, catalysis, and interfaces.</p><Link className="text-link" href="/team">People <span aria-hidden="true">↗</span></Link></div>
    </section>

    <section className="section-shell focus-section">
      <div className="section-heading"><div><p className="section-label">Research</p><h2>Areas of focus</h2></div><Link className="text-link" href="/research">Explore research <span aria-hidden="true">↗</span></Link></div>
      <div className="focus-grid">{focus.map(item => <article className="focus-card" key={item.n}><span className="card-number">{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-marker">{item.detail}</span></article>)}</div>
    </section>

    <section className="section-shell recent-section">
      <div className="section-heading"><div><p className="section-label">Publications</p><h2>Selected papers</h2></div><Link className="text-link" href="/publications">Full list <span aria-hidden="true">↗</span></Link></div>
      <div className="publication-list compact-list">{publications.slice(0, 3).map(paper => <article className="publication-row" key={paper.doi}><span className="publication-year">{paper.year}</span><div><p className="publication-journal">{paper.journal}</p><h3><a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a></h3></div><a className="publication-action" href={paper.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${paper.title}`}>↗</a></article>)}</div>
    </section>

    <section className="section-shell join-banner"><div><p className="eyebrow light">Join & collaborate</p><h2>Interested in working with QSMD?</h2></div><Link className="button button-light" href="/join">Get in touch <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
