import { useEffect, useState } from 'react';
import type { Alumno, CreateAlumnoInput } from '../lib/api';

type AlumnoFormProps = {
  initialValues?: Alumno;
  loading: boolean;
  onSubmit: (input: CreateAlumnoInput) => Promise<void>;
  onCancel?: () => void;
};

const DEFAULT_VALUES: Alumno = {
  id: 0,
  nombre: '',
  grupo: '',
};

export default function Formulario({initialValues, loading, onSubmit, onCancel,}: AlumnoFormProps) {

  const [values, setValues] = useState<Alumno>(initialValues ?? DEFAULT_VALUES);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    setValues(initialValues ?? DEFAULT_VALUES);
    setFormError('');
  }, [initialValues]);

  function updateField<K extends keyof Alumno>(key: K, value: Alumno[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.nombre.trim() || !values.grupo.trim()) {
      setFormError('Nombre y grupo son obligatorios.');
      return;
    }

    setFormError('');
    await onSubmit({
      nombre: values.nombre.trim(),
      grupo: values.grupo.trim(),
    });

    if (!initialValues) {
      setValues(DEFAULT_VALUES);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg w-full max-w-md mx-auto bg-pink-100">

      <h1 className="text-2xl text-pink-900 font-bold">Registro de Alumnado</h1>

      <div className='mb-4'>
        <label className='block text-pink-700 mb-1 font-bold'>
          Nombre
          <input className='text-pink-700 w-full border border-pink-300 rounded px-3 py-2 focus:border-pink-500'
            value={values.nombre} onChange={(event) => updateField('nombre', event.target.value)}
          />
        </label>
      </div>

      <div className='mb-4'>
        <label className='block text-pink-700 mb-1 font-bold'> 
          Grupo
          <input className='text-pink-700 w-full border border-pink-300 rounded px-3 py-2 focus:border-pink-500'
            value={values.grupo} onChange={(event) => updateField('grupo', event.target.value)}
          />
        </label>
      </div>
    
      {formError ? <p className="error-text">{formError}</p> : null}

      <div className='mb-4'>
        <button type="submit" disabled={loading} className='w-3/4 bg-pink-900 text-white py-2 rounded hover:bg-pink-700'>
          {loading ? 'Guardando...' : 'Registrar'}
        </button>
        {onCancel ? (
          <button type="button" onClick={onCancel} disabled={loading}>
            Cancelar
          </button>
        ) : null}
      </div> 
    </form>
  );
}