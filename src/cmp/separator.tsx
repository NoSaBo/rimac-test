type SeparatorProps = {
  color?: string;
};

export default function Separator({ color = "#D7DBF5" }: SeparatorProps) {
  const borderColor = `border-[${color}]`;
  return (
    <div className="relative flex py-2 items-center">
      <div className={`flex-grow ${borderColor}`}></div>
    </div>
  );
}
