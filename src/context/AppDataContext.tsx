"use client";

import { createContext, useContext, useState } from "react";
import type { Plan, UserData } from "@/types/appTypes";

type AppDataContextType = {
  userData: UserData | null;
  plan: Plan | null;
  setUserData: (data: UserData) => void;
  setPlan: (plan: Plan) => void;
};

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [plan, setPlan] = useState<Plan | null>(null);

  return (
    <AppDataContext.Provider value={{ userData, plan, setUserData, setPlan }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }
  return context;
}