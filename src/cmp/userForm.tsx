import Link from "next/link";

type UserFormProps = {
  //   name: string;
};

export default function UserForm({}: UserFormProps) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Documento</label>
        <div className="flex gap-2 mt-1">
          <select className="border rounded-md px-2 py-2 w-1/3">
            <option>DNI</option>
            <option>CE</option>
          </select>
          <input
            type="text"
            placeholder="Nro. de documento"
            className="flex-1 border rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div className="">
        <label className="block text-sm font-medium">Celular</label>
        <input
          type="tel"
          placeholder="Número de celular"
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div className="space-y-2 text-sm mt-6">
        <label className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4" />
          <span>Acepto la Política de Privacidad</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4" />
          <span>Acepto la Política Comunicaciones Comerciales</span>
        </label>
      </div>

      <p className="text-xs font-semibold">
        <a href="#" className="underline">
          Aplican Términos y Condiciones
        </a>
        .
      </p>

      <button
        type="submit"
        className="w-full md:w-auto bg-black text-2xl text-white mt-4 py-4 px-10 rounded-full font-bold hover:bg-gray-800"
      >
        <Link href="/plans">Cotiza aquí</Link>
      </button>
    </form>
  );
}
