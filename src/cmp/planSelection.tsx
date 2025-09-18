type PlanSelectionProps = {
//   name: string;
};

export default function PlanSelection({ }: PlanSelectionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center md:max-w-4xl">
      <div className="flex-1 w-full bg-white shadow-lg shadow-[#AEACF359] text-lg text-black py-4 px-10 rounded-2xl font-bold hover:bg-gray-100">
        Plan 1
      </div>
      <div className="flex-1 w-full bg-white shadow-lg shadow-[#AEACF359] text-lg text-black py-4 px-10 rounded-2xl font-bold hover:bg-gray-100">
        Plan 2
      </div>
      <div className="flex-1 w-full bg-white shadow-lg shadow-[#AEACF359] text-lg text-black py-4 px-10 rounded-2xl font-bold hover:bg-gray-100">
        Plan 3
      </div>
    </div>
  );
}
