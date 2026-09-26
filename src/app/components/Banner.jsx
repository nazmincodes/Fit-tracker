import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-[#171716] py-2 text-white">
      
      {/* Banner Card */}
      <div className="w-full rounded-md border border-[#292c34] bg-[#111318] px-6 py-8 md:px-10 md:py-10">
        
        <div className="flex min-h-[300px] items-center justify-between gap-8">

          {/* Left Content */}
          <div className="w-1/2">
            <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-xl text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-4 max-w-md text-xs leading-5 text-[#8b8d92] md:text-sm">
             FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
             into today's plan, and watch the week's work add up.
            </p>

            <a
              href="#library"
              className="mt-6 inline-block rounded-sm bg-[#ccff00] px-5 py-2 text-[10px] font-bold tracking-wide text-black transition hover:bg-white"
            >
              BROWSE WORKOUTS
            </a>
          </div>

          {/* Right Image */}
          <div className="flex w-1/2 items-center justify-center">
            <Image
              src="/assets/banner.png"
              alt="Workout"
              width={300}
              height={300}
            />
          </div>

        </div>
      </div>
    </section>
  );
}