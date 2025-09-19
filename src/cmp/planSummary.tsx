"use client";
import { useAppData } from "@/context/AppDataContext";
import Separator from "./separator";

export default function PlanSummary() {
  const { userData, plan } = useAppData();

  return (
    <div className="flex flex-col w-full text-black">
      <div className="mb-6 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mt-3">
          Resumen del seguro
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-full mb-6 md:mb-12">
        <div className="flex-1 w-full bg-white drop-shadow-[0_0px_10px_rgba(174,172,243,0.25)] py-4 px-6 rounded-2xl font-bold">
          <div className="">
            <p className="text-sm">Precios calculados para:</p>
            <h1 className="text-lg font-bold">
              {userData?.name + " " + userData?.lastName}
            </h1>
          </div>
          <Separator />
          <div className="mb-4">
            <h2 className="text-sm font-bold">Responsable de pago</h2>
            <p className="text-sm font-normal">DNI {userData?.document}</p>
            <p className="text-sm font-normal">Celular {userData?.phone}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-bold">Plan elegido</h2>
            <p className="text-sm font-normal">{plan?.name}</p>
            <p className="text-sm font-normal">
              Costo del plan: ${plan?.price} al mes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
