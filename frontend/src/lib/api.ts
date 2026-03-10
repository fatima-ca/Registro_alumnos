export type Alumno = {
  id: number;
  nombre: string;
  grupo: string;
};


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3002';

async function handleResponse<T>(response: Response, defaultMessage: string): Promise<T> {
  if (!response.ok) {
    throw new Error(defaultMessage);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

//GET
export async function fetchAlumnos(): Promise<Alumno[]> {
  const response = await fetch(`${API_BASE_URL}/items`);
  return handleResponse<Alumno[]>(response, 'No se pudieron cargar los alumnos');
}



//POST
export async function createAlumno(input: Alumno): Promise<Alumno[]> {
  const response = await fetch(`${API_BASE_URL}/api/items`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(input),
  });
  return handleResponse<Alumno[]>(response, 'No se pudo crear el alumno');
}


