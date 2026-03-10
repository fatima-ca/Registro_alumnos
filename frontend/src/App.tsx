import './App.css'
import { useAlumnos } from './hooks/useAlumnos'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import type { Alumno } from './lib/api';
import { createAlumno } from './lib/api';

function App() {
  const { alumnos, loading, error } = useAlumnos();

  // Función para crear un alumno (por ahora, mock o vacío)
  async function handleCreate(input: Alumno) {
    try {
      await createAlumno(input);
      // Recarga la lista para mostrar el nuevo alumno
      window.location.reload();
    } catch (error) {
      console.error('Error al crear alumno:', error);
    }
  }

  return (
    <>
      <section>
        <Formulario loading={false} onSubmit={handleCreate} />
      </section>
      <section>
        <Lista alumnos={alumnos} loading={loading} error={error} />
      </section>
    </>
  )
}

export default App
