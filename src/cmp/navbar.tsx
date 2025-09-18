import Image from "next/image";

export default function Home() {
  return (
    <header className="flex items-center justify-between px-6 md:px-24 py-4 bg-transparent text-[#03050F]">
      <div className="flex items-center gap-2">
        <Image
          src="/img/rimac_logo.png"
          alt="Rimac logo"
          width={100}
          height={30}
        />
      </div>
      <div className="flex flex-row gap-4 items-center font-bold">
        <p className="hidden md:block text-xs">¡Compra por este medio!</p>
        <a
          href="tel:014116001"
          className="text-lg font-medium text-gray-900 hover:text-gray-700"
        >
          📞 (01) 411 6001
        </a>
      </div>
    </header>
  );
}
