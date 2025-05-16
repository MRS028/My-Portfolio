import { ThemeProvider } from './context/ThemeContext'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-blue-900/5 dark:to-gray-900 transition-all duration-500">
        <Navbar />
        <main>
          <Hero />
          <About />
          {/* Add other sections here as they are created */}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
