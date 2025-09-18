type PlanSummaryProps = {
  //   name: string;
};

export default function PlanSummary({}: PlanSummaryProps) {
  return (
    <div className="flex flex-col w-full text-black">
      <div className="mb-6 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mt-3">
          Resumen del seguro
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-full mb-6 md:mb-12">
        <div className="flex-1 w-full bg-white drop-shadow-[0_0px_10px_rgba(174,172,243,0.25)] py-4 px-6 rounded-2xl font-bold">
          <p className="text-sm">Precios calculados para:</p>
        </div>
      </div>
    </div>
  );
}
