import { ToastContainer } from 'react-toastify'
import { useSite } from './hooks/useSite'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  const { theme } = useSite()

  return (
    <div className="min-h-screen bg-white dark:bg-surface-dark">
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} theme={theme} />
    </div>
  )
}

export default App
