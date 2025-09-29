import { cn } from "@/lib/utils";

export default function ReviewCard({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        "relative h-[203px] w-[350px] cursor-pointer overflow-hidden flex flex-col justify-between rounded-xl border p-6",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <h2 className="text-lg text-[#475569] font-semibold">{body}</h2>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-[#475569]">
            {name}
          </figcaption>
          <p className="text-xs font-normal text-[#334155]">{username}</p>
        </div>
      </div>
    </figure>
  );
}
