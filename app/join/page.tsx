import type { Metadata } from "next";

export const metadata: Metadata = { title: "Join us", description: "Contact QSMD about computational materials research at Kuwait University." };

export default function Join() {
  return <main>
    <section className="page-hero section-shell"><p className="eyebrow">Join & collaborate</p><div className="page-hero-grid"><h1>Work with QSMD.</h1><p>Inquiries from students and collaborators interested in computational materials research are welcome.</p></div></section>
    <section className="section-shell join-content"><div className="join-main"><p className="section-label">Get in touch</p><h2>Send a brief introduction.</h2><p>Describe your research interests and background. Students can include a CV and relevant experience with programming, simulation, thermodynamics, or materials science. Prior experience with every method is not expected.</p><a className="button button-dark" href="mailto:bader.alayyoub@ku.edu.kw?subject=QSMD%20research%20inquiry">Email Dr. Alayyoub <span aria-hidden="true">↗</span></a><p className="email-address">bader.alayyoub@ku.edu.kw</p></div><aside className="join-aside"><span className="section-label">Research interests</span><ul><li>Density functional theory</li><li>Oxide surfaces and defects</li><li>Molecular dynamics</li><li>Thermodynamics and free energy</li></ul></aside></section>
  </main>;
}
