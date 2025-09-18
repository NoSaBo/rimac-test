import Image from "next/image";
import FamilyImage from "/public/img/family.png";
import Navbar from "@/cmp/navbar";
import GoBackButton from "@/cmp/goBack";
import PlanSelection from "@/cmp/planSelection";
import PlanTypes from "@/cmp/planTypes";
import ProgressBar from "@/cmp/progressBar";
import PlanSummary from "@/cmp/planSummary";

export default function PlansPage() {
  const name = "Rocío";
  let step = 1;

  return (
    <div className="h-screen flex flex-col bg-[#FAFBFF]">
      <Navbar />
      <main className="flex flex-col items-center">
        <ProgressBar step={step} />
        <section className="flex p-6 w-full md:max-w-4xl">
          <GoBackButton />
        </section>

        {/* Main section */}
        {step === 1 && (
          <section className="flex flex-col w-full md:max-w-4xl justify-center items-center p-6 text-black text-left md:text-center">
            <PlanTypes name={name} />
            <PlanSelection />
          </section>
        )}
        {step === 2 && (
          <section className="flex flex-col w-full md:max-w-4xl p-6 text-black text-left">
            <PlanSummary />
          </section>
        )}
      </main>
    </div>
  );
}
