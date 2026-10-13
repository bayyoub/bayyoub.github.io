import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "People", description: "QSMD research group at Kuwait University." };

export default function Team() {
  return <main>
    <section className="page-hero section-shell"><p className="eyebrow">People</p><div className="page-hero-grid"><h1>The group.</h1><p>QSMD is based in the Department of Chemical Engineering at Kuwait University.</p></div></section>
    <section className="section-shell team-section"><p className="section-label">Principal investigator</p><article className="person-card"><div className="person-heading"><h2>Bader A. Alayyoub</h2><p>Assistant Professor<br />Department of Chemical Engineering<br />Kuwait University</p></div><div className="person-info"><p>Research spans oxide surfaces and defects, catalysis, phase stability, and interfacial dynamics. The group uses atomistic simulation and thermodynamics to connect microscopic mechanisms with materials behavior.</p><p>Ph.D. in Chemical Engineering, University of Pennsylvania, 2024.</p><div className="person-links"><a href="mailto:bader.alayyoub@ku.edu.kw">Email ↗</a><a href="https://scholar.google.com/citations?user=x6ue484AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a><a href="https://orcid.org/0000-0001-9643-3254" target="_blank" rel="noopener noreferrer">ORCID ↗</a></div></div></article></section>
    <section className="section-shell students-section" aria-labelledby="students-heading">
      <h2 id="students-heading" className="section-label">Students</h2>
      <div className="student-group">
        <h3>Graduate students</h3>
        <div className="student-names">
          <article className="student-entry"><h4>Sarah Aba Alsafi</h4><p>PhD student</p></article>
          <article className="student-entry"><h4>Badryah Alshehab</h4><p>Master’s student</p></article>
        </div>
      </div>
      <div className="student-group">
        <h3>Undergraduates</h3>
        <div className="student-names">
          {['Nadeen Humoda', 'Malak Baleid', 'Shaima Mohammad', 'Layal Nabolsi'].map(name => <article className="student-entry" key={name}><h4>{name}</h4></article>)}
        </div>
      </div>
    </section>
    <section className="section-shell team-join"><p>Prospective students and collaborators are welcome to get in touch.</p><Link className="text-link" href="/join">Joining QSMD <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
