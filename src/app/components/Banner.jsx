import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="pt-15 w-full bg-[#0a0a07] py-2 text-white">

      {/* One Card */}
      <div className="mx-3 rounded-md border border-[#292c34] bg-[#111318] py-20 md:px-10 md:py-20">

        <div className="flex min-h-[250] items-center">

          {/* Left Content */}
          <div className="w-1/2">

            <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-4 max-w-md text-xs leading-5 text-[#8b8d92] md:text-sm">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#ccff00] px-5 py-2 text-[10px] font-bold tracking-wide text-black transition hover:bg-white"
            >
              BROWSE WORKOUTS <span>→</span>
            </Link>

          </div>

          {/* Right Banner Image */}
          <div className="flex w-1/2 items-center justify-center">

            <Image
              src="/assets/banner.png"
              alt="Workout"
              width={300}
              height={300}
              className="max-w-[280px] object-contain"
            />

          </div>

        </div>
      </div>

    </section>
  );
}


