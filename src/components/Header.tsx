import type { FC } from "react";
import { PageHeading } from "./PageHeading";
import { useRouter } from "next/router";
import Link from "next/link";
import { RouterMapType, Routes } from "@/types";

const routerMap: RouterMapType = {
  "/": { label: "Visualisation", href: "/visualisation" },
  "/visualisation": { label: "Table view", href: "/" },
};

export const Header: FC = () => {
  const router = useRouter();

  // This is NOT scalable or even particularly neat...
  // but works ok for just a couple of routes
  const { label, href } = routerMap[router.pathname as Routes];

  return (
    <header className="bg-slate-300 h-24 flex gap-2 items-center justify-between absolute top-0 w-full px-4">
      <PageHeading>Ground Control Dashboard</PageHeading>
      <Link
        href={href}
        className="text-xs md:text-base text-center px-4 py-2 rounded-md font-semibold bg-white my-2 hover:bg-gray-200"
      >
        Go to {label}
      </Link>
    </header>
  );
};
