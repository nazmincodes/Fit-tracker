export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#171716] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="text-[#ccff00]">⚡</span>
          FITLOG
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}