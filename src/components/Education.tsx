import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { GraduationCap } from "lucide-react";

const items = [
  { key: "edu1", school: "UniFECAF", period: "2025 – 2026", inProgress: true },
  { key: "edu2", school: "Anhanguera", period: "2026", inProgress: true },
  { key: "edu3", school: "Anhanguera", period: "2026 – 2027", inProgress: true },
  { key: "edu4", school: "Universidade Paulista (UNIP)", period: "2010 – 2013", inProgress: false },
];

export default function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="relative z-10">
      <div className="section-container">
        <div className="section-label">{t("section_edu")}</div>
        <h2 className="font-heading text-[clamp(1.4rem,2.5vw,1.875rem)] font-bold tracking-tight mb-8 text-foreground">
          {t("edu_heading")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="card-base p-5 flex gap-4"
            >
              <div className="w-10 h-10 shrink-0 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="font-heading text-[14px] font-bold text-foreground leading-snug">{t(item.key)}</div>
                <div className="text-xs text-text-secondary mt-1">
                  {item.school} · {item.period}
                </div>
                {item.inProgress && (
                  <span className="inline-flex mt-2 status-info px-2 py-0.5 rounded-sm text-[11px] font-semibold">
                    {t("edu_in_progress")}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
