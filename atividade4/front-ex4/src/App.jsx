import "./App.css"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
    <div className="logo-container">
      <img src="src/assets/logo.png"/>
    </div>
      <Navbar />
      <h1 className="text-center">Seja bem-vindo ao PetLovers!</h1>
      <h2 className="text-center">O que deseja você fazer hoje?</h2>
    </>
  )
}

export default App
