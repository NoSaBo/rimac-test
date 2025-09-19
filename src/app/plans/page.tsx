"use client";
import { useEffect, useState } from "react";
import Navbar from "@/cmp/navbar";
import GoBackButton from "@/cmp/goBack";
import PlanSelection from "@/cmp/planSelection";
import PlanTypes from "@/cmp/planTypes";
import ProgressBar from "@/cmp/progressBar";
import PlanSummary from "@/cmp/planSummary";
import { useRouter } from "next/navigation";
import { useAppData } from "@/context/AppDataContext";
import { Plan, PlanType } from "@/types/appTypes";
import { PLAN_TYPES } from "@/constants/planTypes";
import { calcAge } from "@/utils/calcAge";

type STEP = 1 | 2;

export default function PlansPage() {
  const [planList, setPlanList] = useState<Plan[]>([]);
  const [step, setStep] = useState<STEP>(1);
  const [selectedPlanType, setSelectedPlanType] = useState<PlanType | null>(
    null
  );
  const { setPlan } = useAppData();
  const userData = useAppData().userData;
  const name = userData?.name ?? "";
  const birthDay = userData?.birthDay ?? "";
  const router = useRouter();

  useEffect(() => {
    if (!userData) {
      router.push("/");
      return;
    }
  }, [userData, router]);

  useEffect(() => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => {
        const plans = data.list.filter(
          (plan: Plan) => calcAge(birthDay) >= plan.age
        );
        setPlanList(plans);
      })
      .catch((err) => {
        console.error("Error fetching plans:", err);
      });
  }, [userData, birthDay]);

  const handlePlanTypeSelect = (planId: number) => {
    const selectedPlanType =
      PLAN_TYPES.find((plantype: PlanType) => plantype.id === planId) || null;
    setSelectedPlanType(selectedPlanType);
  };

  const handlePlanSelect = (plan: Plan) => {
    setPlan({
      ...plan,
      price: selectedPlanType?.discount
        ? Math.round(
            plan.price - (plan.price * selectedPlanType.discount) / 100
          )
        : plan.price,
    });
    setStep(2);
  };

  return (
    <div className="flex flex-col bg-[#FAFBFF]">
      <Navbar />
      <main className="flex flex-col items-center">
        <ProgressBar step={step} />
        <section className="flex p-6 w-full md:max-w-4xl">
          <GoBackButton />
        </section>

        {/* Main section */}
        {step === 1 && (
          <section className="flex flex-col w-full md:max-w-4xl justify-center items-center p-6 text-black text-left md:text-center">
            <PlanTypes
              name={name}
              planList={PLAN_TYPES}
              selectedPlanType={selectedPlanType}
              selectType={handlePlanTypeSelect}
            />
            {selectedPlanType && planList.length > 0 && (
              <PlanSelection
                plans={planList}
                discount={selectedPlanType.discount}
                selectPlan={handlePlanSelect}
              />
            )}
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
