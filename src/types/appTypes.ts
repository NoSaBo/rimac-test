export type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

export type PlanType = {
  id: number;
  title: string;
  description: string;
  discount?: number;
  icon: string;
};

export type UserData = {
  name: string;
  lastName: string;
  birthDay: string;
  document: string;
  phone: string;
};