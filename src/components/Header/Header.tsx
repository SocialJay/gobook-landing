import Avatar from "boring-avatars";
import { useEffect, useState } from "react";

import LogoTicket from "@/assets/logo-ticket.svg";
import { Button } from "@/lib/components/Button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/lib/components/DropdownMenu";
import { Close, GobookName, SignOut, Settings } from "@/lib/icon";

type UserProfile = {
  id: string;
  firstName: string;
  profileImage: string | null;
  email: string;
};

export default function Header({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_GOBOOK_API_URL}/api/user/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (res.ok) {
            const data = await res.json();
            setUser(data.user);
          }
        } catch (err) {
          console.error("Failed to fetch user", err);
        }
      }
    }
    fetchUser();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    setOpen(false);
  };

  const loginRedirectUrl = `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/customer/auth/signin?redirect_url=${encodeURIComponent(`${window.location.origin}/auth/callback`)}`;
  const settingsUrl = `${import.meta.env.VITE_GOBOOK_FRONTEND_URL}/customer/settings?redirect_url=${encodeURIComponent(`${window.location.origin}/auth/callback`)}`;

  return (
    <div className="mx-auto w-full py-2 max-sm:px-4 md:max-w-[671px] lg:max-w-[864px] xl:max-w-[1200px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <a
            href="https://gobook.lk"
            className="flex items-center gap-2 focus:outline-none cursor-pointer"
            aria-label="Go to gobook.lk"
          >
            <img src={LogoTicket} alt="Gobook Logo" className="h-[24px]" />
            <GobookName />
          </a>
        </div>
        <div className="flex gap-2">
          {children}
          {!user ? (
            <Button
              hierarchy="secondary"
              onClick={() => window.location.replace(loginRedirectUrl)}
            >
              Login
            </Button>
          ) : (
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="Customer profile"
                  className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-[#171717]"
                >
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt="profile"
                      className="rounded-circle h-6 w-6 cursor-pointer object-cover"
                    />
                  ) : (
                    <Avatar
                      size={24}
                      variant="beam"
                      name={user.email || user.firstName || "Customer"}
                    />
                  )}
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="bottom"
                align="end"
                sideOffset={5}
                className="W-[264px] w-[280px] bg-[#171717] shadow-[0px_4px_6px_-1px_#000000] backdrop-blur-[6px] border border-[#262626]"
              >
                <div className="flex items-center justify-between gap-2 px-2 pt-1 pb-2">
                  <div className="flex items-center justify-start gap-2">
                    <div className="h-6 w-6 overflow-hidden rounded-full bg-[#171717]">
                      {user.profileImage ? (
                        <img
                          src={user.profileImage}
                          alt="profile"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Avatar
                          size={24}
                          variant="beam"
                          name={user.email || user.firstName || "Customer"}
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="web-subheadline text-[#FFFFFF]">
                        {user.firstName}
                      </div>
                      <div className="web-caption text-[#A3A3A3]">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <Button
                    hierarchy="label"
                    size="small"
                    onClick={() => setOpen(false)}
                  >
                    <Close />
                  </Button>
                </div>
                <div className="flex flex-col">
                  <DropdownMenuItem
                    onSelect={() => {
                      setOpen(false);
                      window.location.href = settingsUrl;
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Settings />
                      <span className="web-callout">Account Settings</span>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem onSelect={handleLogOut}>
                    <SignOut />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
}
