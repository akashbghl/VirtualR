import Feature from "./components/Feature"
import Hero from "./components/hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero/>
        <Feature/>
      </div>
    </div>
  )
}

export default App
