type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className = '', compact = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative isolate flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-red-400/40 bg-gradient-to-br from-red-500 via-red-600 to-[#1d0909] shadow-[0_0_28px_rgba(239,68,68,0.32)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.3),_transparent_35%)]" />
        <svg
          viewBox="0 0 64 64"
          className="relative z-10 h-6 w-6"
          aria-label="Waqas Ahmed brand mark"
          role="img"
        >
          <path
            d="M10 45L18 18L27 35L32 23L37 35L46 18L54 45"
            fill="none"
            stroke="white"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10 45H54" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {!compact && (
        <div className="leading-none tracking-[0.18em] text-white">
          <div className="text-[0.68rem] font-semibold text-gray-200">WAQAS</div>
          <div className="mt-1 text-[0.55rem] font-medium text-red-400">.dev</div>
        </div>
      )}
    </div>
  );
}
