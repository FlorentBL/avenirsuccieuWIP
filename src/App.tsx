import { Analytics } from '@vercel/analytics/react'
import { ThematicSection } from './components/ThematicSection'
import { TeamSection } from './components/TeamSection'

function WheatBackground() {
  return (
    <div className="wheat-bg">
      <svg className="wheat-svg" viewBox="0 0 100 100" fill="#8b5e3c">
        <path d="M50 10 Q55 30 50 90 M50 20 Q65 15 75 25 M50 35 Q65 30 75 40 M50 50 Q65 45 75 55 M50 65 Q65 60 75 70 M50 20 Q35 15 25 25 M50 35 Q35 30 25 40 M50 50 Q35 45 25 55 M50 65 Q35 60 25 70" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="wheat-svg-left" viewBox="0 0 100 100" fill="#2e4d3a">
        <path d="M50 10 Q55 30 50 90 M50 20 Q65 15 75 25 M50 35 Q65 30 75 40 M50 50 Q65 45 75 55 M50 65 Q65 60 75 70 M50 20 Q35 15 25 25 M50 35 Q35 30 25 40 M50 50 Q35 45 25 55 M50 65 Q35 60 25 70" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <WheatBackground />
      <header>
        <h1>Succieu</h1>
        <p className="subtitle">Construisons un avenir en commun</p>
      </header>

      <main>
        <section className="photo-section">
          <img
            src="/avenir-succieu-groupe-20262.jpg"
            alt="Équipe Avenir Succieu 2026"
            className="group-photo"
          />
        </section>

        <TeamSection />
        <ThematicSection />
      </main>

      <footer className="contact-footer">
        <p>Contactez-nous :</p>
        <a href="mailto:avenirsuccieu@gmail.com" className="contact-email">
          avenirsuccieu@gmail.com
        </a>
      </footer>
      <Analytics />
    </div>
  )
}

export default App
