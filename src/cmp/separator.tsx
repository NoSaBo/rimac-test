type SeparatorProps = {
  color?: string;
};

export default function Separator({ color = "#D7DBF5" }: SeparatorProps) {
  const borderColor = `border-[${color}]`;
  return (
    <div className="relative flex w-full py-5 items-center">
      <div
        className={`flex-grow border-t px-4 ${
          borderColor ? borderColor : "border-[#D7DBF5]"
        }`}
      ></div>
    </div>
  );
}
