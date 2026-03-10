import type { Alumno} from '../lib/api';

type AlumnoListProps = {
  alumnos: Alumno[];
  loading: boolean;
  
  error: string;
};

export default function Lista({ alumnos, loading, error}: AlumnoListProps) {

  if (loading) {
    return <section className=""><p>Cargando alumnos...</p></section>;
  }

  if (error) {
    return <section className=""><p className="error-text">{error}</p></section>;
  }

  return (

    <section className="p-6 rounded-lg w-full max-w-md mx-auto bg-pink-100">

      {alumnos.map((alumno) => (

        <article key={alumno.id} className='bg-white rounded-lg'>

            <span className="block text-pink-700 mb-1 font-bold">Nombre: {alumno.nombre}</span>
            <p className='block text-pink-700 mb-1'>ID: {alumno.id}</p>
            <p className='block text-pink-700 mb-1'>Grupo: {alumno.grupo}</p>
         
        </article>
      ))}
    </section>
  );

}
