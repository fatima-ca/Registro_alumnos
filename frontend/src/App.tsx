import './App.css'
import { useAlumnos } from './hooks/useAlumnos'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import type { CreateAlumnoInput } from './lib/api';
import { createAlumno } from './lib/api';

function App() {
  const { alumnos, loading, error } = useAlumnos();

  async function handleCreate(input: CreateAlumnoInput) {
    try {
      await createAlumno(input);
      window.location.reload();
    } catch (error) {
      console.error('Error al crear alumno:', error);
    }
  }

  return (
    <>
      <div className="bg-pink-50 min-h-screen p-8">
        <h1 className="text-3xl text-pink-900 font-bold text-center mb-2">
          Bienvenid@ al registro de alumnado
        </h1>
    
      <section className="max-w-6xl mx-auto flex gap-6">

        <div className="w-1/3">
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-lg text-pink-700 text-center mb-8">
              Para realizar el registro de una alumna o alumno ingresa su nombre y su grupo
            </h1>
            <Formulario loading={false} onSubmit={handleCreate} />
          </div>
        </div>
      

        <div className="w-2/3">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl text-pink-800 font-semibold mb-4">Lista de Alumnos</h2>
              <Lista alumnos={alumnos} loading={loading} error={error} />
          </div>
        </div>

    </section>
  </div>
</>
  )
}

export default App
