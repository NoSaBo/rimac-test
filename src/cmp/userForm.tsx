"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppData } from "@/context/AppDataContext";

export default function UserForm() {
  const [docType, setDocType] = useState("DNI");
  const [docNumber, setDocNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [comms, setComms] = useState(false);
  const [touched, setTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setUserData } = useAppData();

  const isDocNumberValid = /^\d{8}$/.test(docNumber);
  const isPhoneValid = /^\d{9}$/.test(phone);
  const isValid = isDocNumberValid && isPhoneValid && privacy && comms;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/user").then((res) => res.json());
      const userData = { ...response, document: docNumber, phone };
      setUserData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    // Redirect to plans page
    router.push("/plans");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block text-sm font-medium">Documento</label>
        <div className="flex gap-2 mt-1">
          <select
            className="border rounded-md px-2 py-2 w-1/3"
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
          >
            <option>DNI</option>
          </select>
          <input
            type="text"
            placeholder="Nro. de documento"
            className={`flex-1 border rounded-md px-3 py-2 ${
              touched && !isDocNumberValid ? "border-red-500" : ""
            }`}
            value={docNumber}
            onChange={(e) => setDocNumber(e.target.value)}
            required
            maxLength={8}
            inputMode="numeric"
            pattern="\d{8}"
          />
        </div>
        {touched && !docNumber && (
          <span className="text-xs text-red-500">Requerido</span>
        )}
        {touched && !isDocNumberValid && (
          <span className="text-xs text-red-500">
            Debe tener 8 dígitos numéricos
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Celular</label>
        <input
          type="tel"
          placeholder="Número de celular"
          className={`w-full border rounded-md px-3 py-2 ${
            touched && !phone ? "border-red-500" : ""
          }`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {touched && !phone && (
          <span className="text-xs text-red-500">Requerido</span>
        )}
        {touched && phone && !isPhoneValid && (
          <span className="text-xs text-red-500">
            Debe tener 9 dígitos numéricos
          </span>
        )}
      </div>

      <div className="space-y-2 text-sm mt-6">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            required
          />
          <span>Acepto la Política de Privacidad</span>
        </label>
        {touched && !privacy && (
          <span className="text-xs text-red-500 ml-7">Requerido</span>
        )}
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={comms}
            onChange={(e) => setComms(e.target.checked)}
            required
          />
          <span>Acepto la Política Comunicaciones Comerciales</span>
        </label>
        {touched && !comms && (
          <span className="text-xs text-red-500 ml-7">Requerido</span>
        )}
      </div>

      <p className="text-xs font-semibold">
        <a href="#" className="underline">
          Aplican Términos y Condiciones.
        </a>
      </p>

      <button
        type="submit"
        className="w-full md:w-auto bg-black text-2xl text-white mt-4 py-4 px-10 rounded-full font-bold hover:bg-gray-800 disabled:opacity-50"
        disabled={(!isValid && touched) || isLoading}
      >
        {isLoading ? "Cargando..." : "Cotiza aquí"}
      </button>
    </form>
  );
}
