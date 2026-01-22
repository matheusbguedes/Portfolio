import { format } from "date-fns";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  date: string;
}

export function FeaturedCard({ title, description, image, date }: Props) {
  return (
    <li className="relative flex flex-col ml-6 md:ml-10 py-4 gap-3">
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        draggable={false}
        className="w-full object-cover rounded-2xl shadow-md"
      />
      <div className="flex flex-col">
        <div className="flex flex-col pb-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {format(date, "dd MMMM yyyy")}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}
