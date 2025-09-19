"use client";
import Image from "next/image";
import FamilyImage from "/public/img/family.png";
import Navbar from "@/cmp/navbar";
import Footer from "@/cmp/footer";
import UserForm from "@/cmp/userForm";
import { useDevice } from "@/context/DeviceContext";

export default function Home() {
  const { isMobile } = useDevice();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FF]">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row pt-4">
        {/* Left section */}
        {!isMobile && (
          <section className="flex-1 flex justify-center p-6">
            <div className="max-w-lg">
              <Image
                src={FamilyImage}
                alt="Family insurance"
                className="rounded-xl shadow-md"
              />
            </div>
          </section>
        )}

        {/* Right section */}
        <section className="flex-1 flex p-6 text-black md:ml-6">
          <div className="max-w-sm">
            <div className="mb-6">
              <span className="text-base font-semibold bg-linear-to-r from-[#00F4E2] to-[#00FF7F] px-2 py-1 rounded-sm">
                Seguro Salud Flexible
              </span>
              <h1 className="text-4xl font-bold mt-3">
                Creado para ti y tu familia
              </h1>
              <p className="text-gray-600 text-base mt-2">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría, 100% online.
              </p>
            </div>
            <UserForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
