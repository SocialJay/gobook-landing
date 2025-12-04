export interface EventCardProps {
  name: string;
  banner: string;
  isNew?: boolean;
}

export default function EventCard({ name, banner, isNew }: EventCardProps) {
  console.log({ name, banner });
  return (
    // TODO: @ThejanNims Check tokens
    <div className="p-2 flex flex-col gap-1 w-fit hover:bg-[#422006] rounded-4">
      <div className="relative">
        <img
          src={banner}
          className="rounded-3 size-[227px] aspect-square"
          alt={name}
        />
        {isNew && (
          <div className="absolute inset-3 bg-[#FFF] rounded-circle h-5 w-fit px-2 py-1 flex items-center justify-center">
            <span className="primary-body-label text-[#171717]">New</span>
          </div>
        )}
      </div>
      <div className="flex gap-2 pt-2 pb-1 pr-1">
        <img
          className="rounded-circle size-6"
          src="https://i.pravatar.cc/300"
          alt=""
        />
        <div className="flex flex-col">
          <div className="text-label font-semibold text-[17px]">{name}</div>
          <div className="web-footnote text-[#A3A3A3]">
            Canape Bistro, 23 Nov
          </div>
        </div>
      </div>
    </div>
  );
}
