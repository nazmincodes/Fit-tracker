import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex justify-between py-3 navbar bg-black text-white px-6 ">

      {/* Logo */}
      <div className="flex items-center gap-4">
      <div>
        <Image src="/assets/logo.png" alt="Logo" width={30} height={30} />
      </div>
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          FITLOG
        </Link>
      </div>
      </div>

      {/* Main Links */}
      <div className="navbar-center">
        <div className="flex gap-8">
          <Link
            href="/"
            className="font-medium text-[#ccff00] border-0 bg-[#383a32]  px-4 rounded-2xl  hover:text-[#5e673a] "
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="font-medium hover:text-[#ccff00]"
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
            className=" px-4 py-2 text-sm font-bold text-white"
          >
            Plan <span className="bg-[#ccff00] text-black px-2 py-1 rounded-full">0</span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
          >
            Saved <span className="bg-[#ccff00] text-black px-2 py-1 rounded-full">0</span>
          </Link>

        </div>
      </div>

    </div>
  );
}