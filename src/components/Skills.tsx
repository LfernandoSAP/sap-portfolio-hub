import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";

interface SkillGroup {
  title: string;
  isKey?: boolean;
  items: { label: string; isKey?: boolean }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "SAP Core",
    items: [
      { label: "S/4HANA MM" },
      { label: "SAP MDG" },
      { label: "SAP BTP" },
      { label: "Procure-to-Pay (P2P)" },
      { label: "Clean Core" },
    ],
  },
  {
    title: "SAP Processes",
    items: [
      { label: "Purchase Order" },
      { label: "Goods Receipt" },
      { label: "Invoice Verification" },
      { label: "Data Migration" },
      { label: "Rollout & Hypercare" },
    ],
  },
  {
    title: "Development",
    items: [
      { label: "Python / FastAPI" },
      { label: "React / Vite" },
      { label: "PostgreSQL" },
      { label: "REST API / JWT" },
      { label: "SQLAlchemy" },
    ],
  },
  {
    title: "skill_group_pm",
    isKey: true,
    items: [
      { label: "skill_leadership", isKey: true },
      { label: "Budget Control" },
      { label: "skill_biz", isKey: true },
      { label: "RBAC / Audit Trail" },
      { label: "skill_logistics", isKey: true },
    ],
  },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="relative z-10 bg-background">
      <div className="section-container">
        <div className="section-label">{t("section_skills")}</div>
        <h2 className="font-heading text-[clamp(1.4rem,2.5vw,1.875rem)] font-bold tracking-tight mb-8 text-foreground">
          {t("skills_heading")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="card-base p-4"
            >
              <div className="text-[11px] tracking-widest uppercase text-primary font-bold mb-3 pb-2 border-b border-border">
                {group.isKey ? t(group.title) : group.title}
              </div>
              <div className="flex flex-col">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="text-[13px] text-foreground/80 py-1.5 flex items-center gap-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                    {item.isKey ? t(item.label) : item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
