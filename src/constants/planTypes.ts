import { PlanType } from "@/types/appTypes";

export const PLAN_TYPES = <PlanType[]>[
  {
    id: 1,
    title: "Para mí",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    icon: "IcProtectionLight.png",
  },
  {
    id: 2,
    title: "Para alguien más",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    discount: 5,
    icon: "IcAddUserLight.png",
  },
];
