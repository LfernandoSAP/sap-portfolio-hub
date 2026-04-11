import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Download } from "lucide-react";

const stats = [
  { value: "20+", key: "stat_years" },
  { value: "3", key: "stat_certs" },
  { value: "600+", key: "stat_users" },
  { value: "8", key: "stat_modules" },
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-center max-w-[900px] mx-auto px-6 pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-primary/5 text-xs text-primary tracking-widest uppercase font-medium mb-8 w-fit"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
        {t("available")}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-heading font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-6"
      >
        Luiz Fernando
        <br />
        <span className="gradient-text">{t("hero_title")}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg text-text-secondary max-w-[600px] mb-10 font-light"
      >
        {t("hero_sub")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex gap-4 flex-wrap"
      >
        <a
          href="https://linkedin.com/in/luiz-fernando-gonçalves-da-silva-7719a3337"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg gradient-bg text-primary-foreground font-medium text-sm hover:opacity-85 hover:-translate-y-0.5 transition-all"
        >
          LinkedIn →
        </a>
        <a
          href="mailto:lfernandosap@gmail.com"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-text-secondary font-medium text-sm hover:bg-primary/5 hover:text-foreground hover:border-primary transition-all"
        >
          {t("contact_cta")}
        </a>
        <a
          href="/Luiz_Fernando_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-text-secondary font-medium text-sm hover:bg-primary/5 hover:text-foreground hover:border-primary transition-all"
        >
          <Download className="w-4 h-4" />
          {t("download_cv")}
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex gap-10 mt-16 pt-10 border-t border-border flex-wrap"
      >
        {stats.map((s) => (
          <div key={s.key}>
            <div className="font-heading text-3xl font-extrabold text-primary leading-none">{s.value}</div>
            <div className="text-xs text-text-secondary mt-1 tracking-wide">{t(s.key)}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
