"use client";

import Separator from "./separator";

type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

type PlanSelectionProps = {
  plans: Plan[];
  discount?: number | undefined;
  selectPlan: (plan: Plan) => void;
};

export default function PlanSelection({
  plans,
  discount,
  selectPlan,
}: PlanSelectionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:max-w-4xl">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-white drop-shadow-[0_0px_10px_rgba(174,172,243,0.25)] text-lg text-black text-left w-sm py-10 px-10 rounded-2xl"
        >
          <h1 className="text-xl mb-2 font-bold">{plan.name}</h1>
          <p className="text-xs">COSTO DEL PLAN</p>

          <div className="flex items-baseline gap-2">
            {discount ? (
              <span className="text-2xl">
                ${Math.round(plan.price * (1 - discount / 100))}
              </span>
            ) : (
              <span className="text-2xl">${plan.price}</span>
            )}
            <span className="text-sm font-normal">al mes</span>
          </div>
          <Separator />
          <div className="mb-4">
            <ul className="list-disc w-[90%] mx-auto">
              {plan.description.map((item) => (
                <li key={item} className="text-sm mb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="w-full bg-[#FF1C44] text-white py-3 rounded-full font-bold hover:bg-gray-800 mt-4"
            onClick={() => selectPlan(plan)}
          >
            Seleccionar Plan
          </button>
        </div>
      ))}
    </div>
  );
}
