import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "People", description: "QSMD research group at Kuwait University." };

export default function Team() {
  return <main>
    <section className="page-hero section-shell"><p className="eyebrow">People</p><div className="page-hero-grid"><h1>The group.</h1><p>QSMD is based in the Department of Chemical Engineering at Kuwait University.</p></div></section>
    <section className="section-shell team-section"><p className="section-label">Principal investigator</p><article className="person-card"><div className="person-heading"><span className="person-role">Principal investigator</span><h2>Dr. Bader A. Alayyoub</h2><p>Assistant Professor<br />Department of Chemical Engineering<br />Kuwait University</p></div><div className="person-info"><p>Research spans oxide surfaces and defects, catalysis, phase stability, and interfacial dynamics. The group uses atomistic simulation and thermodynamics to connect microscopic mechanisms with materials behavior.</p><p>Ph.D. in Chemical Engineering, University of Pennsylvania, 2024.</p><div className="person-links"><a href="mailto:bader.alayyoub@ku.edu.kw">Email ↗</a><a href="https://scholar.google.com/citations?user=x6ue484AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a><a href="https://orcid.org/0000-0001-9643-3254" target="_blank" rel="noopener noreferrer">ORCID ↗</a></div></div></article></section>
    <section className="section-shell team-join"><p>Prospective students and collaborators are welcome to get in touch.</p><Link className="text-link" href="/join">Joining QSMD <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
