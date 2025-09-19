"use client";
import Image from "next/image";
import { PlanType } from "@/types/appTypes";

type PlanTypesProps = {
  name: string;
  planList: PlanType[];
  selectedPlanType?: PlanType | null;
  selectType?: (planId: number) => void;
};

export default function PlanTypes({
  name,
  planList,
  selectedPlanType,
  selectType,
}: PlanTypesProps) {
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
        {planList.map((plan) => (
          <button
            key={plan.id}
            className={`flex-1 w-full text-left bg-white drop-shadow-[0_0px_10px_rgba(174,172,243,0.25)] text-lg text-black py-4 px-10 rounded-2xl font-bold hover:bg-gray-100 ${
              selectedPlanType?.id === plan.id ? "border-3 border-[#03050F]" : ""
            }`}
            onClick={() => selectType?.(plan.id)}
          >
            <Image
              src={"/img/" + plan.icon}
              alt={plan.title}
              width={40}
              height={40}
              className="mb-4"
            />
            <h1 className="text-lg font-bold">{plan.title}</h1>
            <p className="text-xs text-gray-600">{plan.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
