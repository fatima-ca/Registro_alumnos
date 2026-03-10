import { useEffect, useState } from 'react';
import { fetchAlumnos, type Alumno } from '../lib/api';

export function useAlumnos() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const loadAlumnos = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchAlumnos();
      setAlumnos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    loadAlumnos();
  }, []);

  return {
    alumnos,
    loading,
    error

  };
}
