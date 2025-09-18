type ProgressBarProps = {
  step: number;
};

export default function ProgressBar({ step }: ProgressBarProps) {
  return (
    <section className="flex w-full items-center justify-center p-6 h-16 bg-[#EDEFFC]">
      <div className="items-center justify-between mx-auto">
        <p className="text-[#141938]">Paso {step} de 2</p>
      </div>
    </section>
  );
}
