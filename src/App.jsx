import Layout from "./Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Resultados from "./pages/Resultados"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';          // Estilos de los componentes
import 'primeicons/primeicons.css';                        // Íconos
import './App.css'
import Example from "./pages/Example"
import ResultadosPartidos from "./pages/ResultadosPorFecha"

function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/partidos" element={<Resultados/>} />
          <Route path="/resultados" element={<ResultadosPartidos/>} />
          <Route path="/example" element={<Example/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
