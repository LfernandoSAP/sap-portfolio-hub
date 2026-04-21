import { useLang } from "@/hooks/useLang";
import type { Lang } from "@/lib/i18n";
import { Grid3x3, Search, Bell, User } from "lucide-react";

const langs: Lang[] = ["pt", "en", "de", "es"];

export default function Navbar() {
  const { lang, setLang } = useLang();

  return (
    <nav className="sap-shell fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-12">
      {/* Left: SAP logo style + product title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 cursor-pointer transition">
          <Grid3x3 className="w-4 h-4 text-white/80" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-heading font-bold text-white text-[15px] tracking-tight">SAP</span>
          <span className="text-white/60 text-[13px]">Portfolio · Luiz Fernando</span>
        </div>
      </div>

      {/* Right: actions + language */}
      <div className="flex items-center gap-1">
        <button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-sm hover:bg-white/10 text-white/80 transition">
          <Search className="w-4 h-4" />
        </button>
        <button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-sm hover:bg-white/10 text-white/80 transition">
          <Bell className="w-4 h-4" />
        </button>
        <div className="w-px h-5 bg-white/15 mx-1 hidden sm:block" />
        <div className="flex items-center gap-0.5">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2.5 py-1 rounded-sm text-[11px] font-semibold tracking-wider uppercase transition
                ${lang === l
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="flex items-center justify-center w-9 h-9 rounded-sm hover:bg-white/10 text-white/80 transition ml-1">
          <User className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
