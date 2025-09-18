"use client";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center text-base text-[#4F4FFF] font-bold"
    >
      <span className="mr-2">←</span>
      Volver
    </button>
  );
}
