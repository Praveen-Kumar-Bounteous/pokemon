import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NavigationBar from "./components/NavigationBar"
import PokemonList from "./pages/PokemonList"
import PokemonDetailsPage from "./pages/PokemonDetailsPage"

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poke" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage/>} />
      </Routes>
    </>
  )
}

export default App