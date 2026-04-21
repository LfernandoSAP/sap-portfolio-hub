import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Download, Mail, Linkedin, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "22+", key: "stat_years" },
  { value: "4", key: "stat_certs" },
  { value: "600+", key: "stat_users" },
  { value: "8", key: "stat_modules" },
];

export default function Hero() {
  const { t } = useLang();

  const heroParagraphs = t("hero_sub")
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <section
      id="hero"
      className="relative z-10 pt-20 pb-12 bg-gradient-to-b from-[hsl(213,100%,97%)] via-background to-background"
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        {/* Breadcrumb / Object Page header — Fiori style */}
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-4">
          <span>Home</span>
          <span>›</span>
          <span>Consultants</span>
          <span>›</span>
          <span className="text-foreground font-semibold">Luiz Fernando</span>
        </div>

        {/* Object Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 status-success px-2.5 py-1 rounded-sm text-xs font-semibold mb-5 w-fit"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          {t("available")}
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-foreground mb-3"
            >
              Luiz Fernando
              <span className="block text-primary font-semibold text-[clamp(1.2rem,2.5vw,1.75rem)] mt-1">
                {t("hero_title")}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 space-y-3"
            >
              {heroParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-[15px] leading-relaxed ${
                    index === 0
                      ? "text-primary font-semibold text-[16px]"
                      : "text-text-secondary"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-2 flex-wrap"
            >
              <a
                href="https://linkedin.com/in/luiz-fernando-gonçalves-da-silva-7719a3337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 h-9 rounded-sm bg-primary text-primary-foreground font-semibold text-[13px] hover:bg-primary/90 transition shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a
                href="mailto:lfernandosap@gmail.com"
                className="inline-flex items-center gap-2 px-4 h-9 rounded-sm border border-primary text-primary font-semibold text-[13px] hover:bg-primary/5 transition"
              >
                <Mail className="w-3.5 h-3.5" />
                {t("contact_cta")}
              </a>
              <a
                href="/sap-portfolio-hub/Luiz_Fernando_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-4 h-9 rounded-sm border border-border text-foreground font-semibold text-[13px] hover:bg-secondary transition"
              >
                <Download className="w-3.5 h-3.5" />
                {t("download_cv")}
              </a>
            </motion.div>
          </div>
        </div>

        {/* KPI Tiles — Fiori Launchpad style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10"
        >
          {stats.map((s) => (
            <div
              key={s.key}
              className="card-base p-4 hover:-translate-y-0.5 cursor-default"
            >
              <div className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-1">
                {t(s.key)}
              </div>
              <div className="font-heading text-3xl font-bold text-primary leading-none">
                {s.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
