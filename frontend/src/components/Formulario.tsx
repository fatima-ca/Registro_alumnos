



export default function Formulario() {
  return (

    <form className="p-6 rounded-lg w-full max-w-md mx-auto bg-pink-100">

        <h1 className="text-2xl text-pink-900 font-bold">Registro de Alumnado</h1>

        <div className="mb-4">
            <p className="block text-pink-700 mb-1 font-bold">ID</p>
            <input type="text" placeholder="ID del/la alumn@"
                className="text-pink-700 w-full border border-pink-300 rounded px-3 py-2 focus:border-pink-500"
            />
        </div>
        <div className="mb-4">
            <p className="block text-pink-700 mb-1 font-bold">Nombre</p>
            <input type="text" placeholder="Nombre del/la alumn@"
                className="text-pink-700 w-full border border-pink-300 rounded px-3 py-2 focus:border-pink-500"
            />
        </div>

        <div className="mb-4">
            <p className="block text-pink-700 mb-1 font-bold">Grupo</p>
            <input type="text" placeholder="Grupo del/la alumn@"
                className="text-pink-700 w-full border border-pink-300 rounded px-3 py-2 focus:border-pink-500"
            />
        </div>

        <button type="submit" className="w-full bg-pink-900 text-white py-2 rounded hover:bg-pink-700">
            Registrar
        </button>
    </form>

  );
}