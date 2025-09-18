type PlanTypesProps = {
  name: string;
};

export default function PlanTypes({ name }: PlanTypesProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full md:max-w-xl">
      <div className="mb-6 md:max-w-sm">
        <h1 className="text-2xl md:text-4xl font-bold mt-3">
          {name} ¿Para quién deseas cotizar?
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full mb-6 md:mb-12">
        <button className="flex-1 w-full bg-white drop-shadow-[0_0px_10px_rgba(174,172,243,0.25)] text-lg text-black py-4 px-10 rounded-2xl font-bold hover:bg-gray-100">
          Para mí
        </button>
        <button className="flex-1 w-full bg-white drop-shadow-[0_0px_10px_rgba(174,172,243,0.25)] text-lg text-black py-4 px-10 rounded-2xl font-bold hover:bg-gray-100">
          Para alguien más
        </button>
      </div>
    </div>
  );
}
