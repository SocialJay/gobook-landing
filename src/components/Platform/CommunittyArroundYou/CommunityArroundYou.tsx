import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Community = {
    id: string;
    name: string;
    logo: string;
    followerCount: number;
};

export default function CommunityArroundYou() {
    const [communities, setCommunities] = useState<Community[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const fetchCommunities = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `${import.meta.env.VITE_GOBOOK_API_URL}/api/tenants/followers`
            );
            if (response.ok) {
                const data = await response.json();
                const sortedTenants = (data.tenants || []).sort(
                    (a: Community, b: Community) => b.followerCount - a.followerCount
                );
                setCommunities(sortedTenants);
            } else {
                setCommunities([]);
            }
        } catch (error) {
            console.error("Failed to fetch communities", error);
            setCommunities([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCommunities();
    }, []);

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener("scroll", checkScroll);
            window.addEventListener("resize", checkScroll);
            return () => {
                carousel.removeEventListener("scroll", checkScroll);
                window.removeEventListener("resize", checkScroll);
            };
        }
    }, [communities]);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = 300;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    if (!isLoading && communities.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-5 max-sm:px-4 w-full xl:w-[1200px] lg:w-[864px] md:w-[671px]">
            <div className="flex items-center justify-between">
                <h2 className="web-title-1 text-text-primary-default">
                    Community around you
                </h2>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                        className="flex items-center justify-center size-8 rounded-full bg-surface-container-foreground hover:bg-surface-container-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={20} className="text-text-primary-default" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                        className="flex items-center justify-center size-8 rounded-full bg-surface-container-foreground hover:bg-surface-container-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight size={20} className="text-text-primary-default" />
                    </button>
                </div>
            </div>

            {isLoading ? (
                <div className="grid grid-rows-2 grid-flow-col gap-6 overflow-hidden">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 w-[160px] md:w-[316px] lg:w-[272px] xl:w-[384px]"
                        >
                            <div className="size-16 md:size-[100px] rounded-full bg-surface-container-foreground animate-pulse flex-shrink-0" />
                            <div className="flex flex-col gap-2">
                                <div className="h-5 w-32 rounded bg-surface-container-foreground animate-pulse" />
                                <div className="h-4 w-24 rounded bg-surface-container-foreground animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    ref={carouselRef}
                    className={`community-carousel grid grid-flow-col gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar ${communities.length > (typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 2)
                            ? "grid-rows-2"
                            : "grid-rows-1"
                        }`}
                >
                    {communities.map((community, index) => {
                        const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
                        const cols = screenWidth >= 1024 ? 3 : 2;
                        const rows = communities.length > cols ? 2 : 1;

                        const page = Math.floor(index / (rows * cols));
                        const indexInPage = index % (rows * cols);
                        const r = Math.floor(indexInPage / cols);
                        const c = (indexInPage % cols) + page * cols;

                        return (
                            <div
                                key={community.id}
                                className="snap-start flex-shrink-0 flex items-center gap-4 w-[160px] md:w-[316px] lg:w-[272px] xl:w-[384px]"
                                style={{
                                    gridRow: r + 1,
                                    gridColumn: c + 1,
                                }}
                            >
                                <div className="size-16 md:size-[100px] rounded-full overflow-hidden bg-surface-container-foreground border border-surface-container-background flex-shrink-0">
                                    {community.logo ? (
                                        <img
                                            src={community.logo}
                                            alt={community.name}
                                            className="size-full object-cover"
                                        />
                                    ) : (
                                        <div className="size-full flex items-center justify-center text-text-label bg-surface-container-foreground">
                                            {community.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col truncate">
                                    <h3 className="web-subheadline text-text-primary-default truncate max-md:text-[14px]">
                                        {community.name}
                                    </h3>
                                    <p className="web-callout text-text-label max-md:text-[12px]">
                                        {community.followerCount} Followers
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <style>{`
        .community-carousel::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
