import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Milestones } from './components/Milestones'
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

function Countdown() {
  const targetDate = new Date('2026-03-03T00:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-value">{days}</span>
        <span className="countdown-label">Jours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{hours}</span>
        <span className="countdown-label">Heures</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{minutes}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{seconds}</span>
        <span className="countdown-label">Secondes</span>
      </div>
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
        <section className="teaser-section">
          <p className="announcement-date">Élections municipales 2026</p>
          <Countdown />
        </section>

        <section className="photo-section">
          <img
            src="/avenir-succieu-groupe-2026.jpg"
            alt="Équipe Avenir Succieu 2026"
            className="group-photo"
          />
        </section>

        <section className="intro-text">
          <h2 className="main-heading">PROFESSION DE FOI</h2>
          <p className="lead-text">
            Une équipe investie, présente et à l'écoute.
            Des habitants engagés pour l'avenir de Succieu.
          </p>
        </section>

        <ThematicSection />

        <TeamSection />

        <Milestones />
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
