import { useLang } from "@/hooks/useLang";
import type { Lang } from "@/lib/i18n";

const langs: Lang[] = ["pt", "en", "de", "es"];

export default function Navbar() {
  const { lang, setLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="font-heading font-extrabold text-base tracking-wide uppercase text-primary">
        LF<span className="text-text-secondary font-normal">·</span>SAP
      </div>
      <div className="flex items-center gap-2">
        {langs.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide uppercase transition-all border border-transparent
              ${lang === l
                ? "bg-primary/10 text-primary border-primary"
                : "text-text-secondary hover:bg-primary/5 hover:text-primary border-border"
              }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}
