import { cn } from "@/lib/utils";

export default function ReviewCard({
  name,
  username,
  body,
  avatar,
}: {
  name: string;
  username: string;
  body: string;
  avatar?: string;
}) {
  return (
    <figure
      className={cn(
        "w-fit min-w-[200px] max-w-[300px]",
        "h-[180px] sm:h-[203px] p-4 sm:p-6",
        "bg-[rgba(52,51,51,0.3)] rounded-[14px]",
        "border border-[rgba(140,140,140,0.12)] flex flex-col justify-between"
      )}
    >
      <div className="flex-1 overflow-hidden">
        <p className="text-[#A3A3A3] text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[22px] break-words line-clamp-5 sm:line-clamp-6">
          {body}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] min-h-[32px] rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <span className="text-[#A3A3A3] text-[12px] sm:text-[14px] font-semibold leading-[18px] sm:leading-[21px]">
            {name}
          </span>
          <span className="text-[#737373] text-[10px] sm:text-[12px] font-normal leading-4 sm:leading-5">
            {username}
          </span>
        </div>
      </div>
    </figure>
  );
}
