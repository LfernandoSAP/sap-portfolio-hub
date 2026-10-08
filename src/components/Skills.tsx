import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";

interface SkillGroup {
  titleKey?: string;
  title?: string;
  itemsKey?: string;
  items?: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "SAP Core",
    items: ["S/4HANA MM", "SAP MDG", "SAP BTP", "Procure-to-Pay (P2P)", "SAP Fiori", "Clean Core"],
  },
  { titleKey: "sk_g2_title", itemsKey: "sk_g2_items" },
  {
    titleKey: "sk_g3_title",
    items: ["Python / FastAPI", "React / Vite", "PostgreSQL", "REST API / JWT", "SQLAlchemy"],
  },
  { titleKey: "sk_g4_title", itemsKey: "sk_g4_items" },
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
                {group.titleKey ? t(group.titleKey) : group.title}
              </div>
              <div className="flex flex-col">
                {(group.itemsKey ? t(group.itemsKey).split("|") : group.items ?? []).map((item, i) => (
                  <div
                    key={i}
                    className="text-[13px] text-foreground/80 py-1.5 flex items-center gap-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                    {item}
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
