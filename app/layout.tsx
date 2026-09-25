import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "QSMD | Bader A. Alayyoub", template: "%s | QSMD" },
  description: "Atomistic materials research led by Dr. Bader A. Alayyoub at Kuwait University.",
  icons: { icon: "/qsmd-logo.png", shortcut: "/qsmd-logo.png" },
};

const links = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/team", label: "People" },
  { href: "/join", label: "Join us" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link href="/" className="brand" aria-label="QSMD Research Group, home">
          <img src="/qsmd-logo.png" width="46" height="46" alt="" className="lab-logo" />
          <span className="brand-name">QSMD<small>Bader A. Alayyoub</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="ku-affiliation" aria-label="Kuwait University">
          <img src="/ku-seal.png" width="64" height="74" alt="Kuwait University crest" />
          <span>Kuwait<br />University</span>
        </div>
        <a className="header-email" href="mailto:bader.alayyoub@ku.edu.kw">Contact <span aria-hidden="true">↗</span></a>
      </div>
    </header>
    {children}
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-identity">
          <img src="/ku-seal.png" width="72" height="84" alt="Kuwait University crest" className="ku-seal" />
          <div><strong>Kuwait University</strong><p>Department of Chemical Engineering<br />College of Engineering & Petroleum</p></div>
        </div>
        <div className="footer-links"><span>QSMD</span>{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
        <div className="footer-links"><span>Connect</span><a href="mailto:bader.alayyoub@ku.edu.kw">Email</a><a href="https://scholar.google.com/citations?user=x6ue484AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a><a href="https://orcid.org/0000-0001-9643-3254" target="_blank" rel="noopener noreferrer">ORCID ↗</a></div>
      </div>
      <div className="section-shell footer-bottom"><span>© {new Date().getUTCFullYear()} Bader A. Alayyoub</span><span>Kuwait University · Kuwait</span></div>
    </footer>
  </body></html>;
}
