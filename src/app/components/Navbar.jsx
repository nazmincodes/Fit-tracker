"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center py-3 navbar bg-black text-white px-6">

      {/* Logo */}
      <div className="flex items-center gap-4">
        <div>
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>

        <div className="navbar-start">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            FITLOG
          </Link>
        </div>
      </div>

      {/* Main Links */}
      <div className="navbar-center">
        <div className="flex gap-8">

          <Link
            href="/"
            className={`font-medium px-4 py-1 rounded-2xl transition-colors ${
              pathname === "/"
                ? "text-[#ccff00] bg-[#383a32]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`font-medium px-4 py-1 rounded-2xl transition-colors ${
              pathname === "/my-plan"
                ? "text-[#ccff00] bg-[#383a32]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>

        </div>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        <div className="flex items-center gap-3">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="px-4 py-2 text-sm font-bold text-white"
          >
            Plan{" "}
            <span className="rounded-full bg-[#ccff00] px-2 py-1 text-black">
              {plan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="px-2 py-2 text-sm font-bold text-white"
          >
            Saved{" "}
            <span className="rounded-full border border-[#ccff00] px-2 py-1 text-[#ccff00]">
              {saved.length}
            </span>
          </Link>

        </div>
      </div>

    </div>
  );
}