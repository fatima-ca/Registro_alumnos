import './App.css'
import { useAlumnos } from './hooks/useAlumnos'
import Formulario from './components/Formulario'
import Lista from './components/Lista'

function App() {
  const { alumnos, loading, error} = useAlumnos();

  return (
    <>
    <section>
      <Formulario  />
    </section>
    <section>
      <Lista alumnos={alumnos} loading={loading} error={error} />
      
    </section>
    </>
  )
}

export default App
