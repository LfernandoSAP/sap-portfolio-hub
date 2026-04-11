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
    <section id="skills" className="relative z-10">
      <div className="section-container">
        <div className="section-label">{t("section_skills")}</div>
        <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight mb-10 text-foreground">
          {t("skills_heading")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-base p-5"
            >
              <div className="text-xs tracking-widest uppercase text-primary font-medium mb-3">
                {group.isKey ? t(group.title) : group.title}
              </div>
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="text-sm text-text-secondary py-1 border-b border-border last:border-b-0"
                >
                  {item.isKey ? t(item.label) : item.label}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
