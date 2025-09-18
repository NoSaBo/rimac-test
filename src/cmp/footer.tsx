import Image from "next/image";

export default function Home() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-[#03050F] text-xs text-[#F8F9FF] border-t h-32 md:h-24 px-4 py-6 md:px-24 md:py-6">
      <div className="flex items-center gap-2">
        <Image
          src="/img/rimac_compact.png"
          alt="Rimac logo"
          width={85}
          height={42}
        />
      </div>
      <p>© {new Date().getFullYear()} RIMAC Seguros y Reaseguros</p>
    </footer>
  );
}
