interface CardProps {
  title?: string | number;
  value?: string | number;
  
}

export default function Card({
  title,
  value,
 
}: CardProps) {
  return (
    <div className="md:h-[150px] h-[100px] hover:bg-black transition ease-out duration-500 shadow-2xl w-[180px] md:w-[250px] border rounded-lg  p-3 bg-blue-600">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="md:text-xl font-bold ">{title}</div>
          <div className="md:text-xl font-bold">{value}</div>
        </div>
      </div>
    </div>
  );
}
