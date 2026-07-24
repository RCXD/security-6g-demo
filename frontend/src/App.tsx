import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Overview } from './components/Overview'
import { Contributions } from './components/Contributions'
import { AttackTypes } from './components/AttackTypes'
import { ResultsExplorer } from './components/ResultsExplorer'
import { Research } from './components/Research'
import { Team } from './components/Team'
import { Footer } from './components/Footer'
import { LanguageGate } from './components/LanguageGate'
import { LanguageProvider } from './i18n/LanguageContext'
import { useTheme } from './hooks/useTheme'

function AppShell() {
  const { theme, toggle } = useTheme()
  return (
    <div className="min-h-screen">
      <LanguageGate />
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <Overview />
        <Contributions />
        <AttackTypes />
        <ResultsExplorer />
        <Research />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}
