import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Camera, Calendar, Building2 } from "lucide-react";
import GalleryModal from "./GalleryModal";

interface ExpData {
  titleKey: string;
  companyKey: string;
  periodKey: string;
  statusKey?: string;
  bullets: string[];
  projects?: string[];
  techStack?: string[];
  noteKey?: string;
  images: string[];
}

const experiences: ExpData[] = [
  {
    titleKey: "exp_pm_title",
    companyKey: "exp_pm_company",
    periodKey: "exp_pm_period",
    bullets: ["exp_pm_b1", "exp_pm_b2", "exp_pm_b3", "exp_pm_b4"],
    projects: ["exp_pm_p1", "exp_pm_p2", "exp_pm_p3", "exp_pm_p4"],
    images: [],
  },
  {
    titleKey: "exp_erp_title",
    companyKey: "exp_erp_company",
    periodKey: "exp_erp_period",
    statusKey: "exp_erp_status",
    bullets: ["exp_erp_b1", "exp_erp_b2", "exp_erp_b3", "exp_erp_b4"],
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "React", "Vite", "MUI", "REST API", "JWT"],
    noteKey: "exp_erp_note",
    images: [],
  },
  {
    titleKey: "exp_sap_title",
    companyKey: "exp_sap_company",
    periodKey: "exp_sap_period",
    bullets: ["exp_sap_b1", "exp_sap_b2", "exp_sap_b3", "exp_sap_b4"],
    images: [],
  },
];

export default function Experience() {
  const { t } = useLang();
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

  return (
    <section id="experience" className="relative z-10 bg-background">
      <div className="section-container">
        <div className="section-label">{t("section_exp")}</div>
        <h2 className="font-heading text-[clamp(1.4rem,2.5vw,1.875rem)] font-bold tracking-tight mb-8 text-foreground">
          {t("exp_heading")}
        </h2>
        <div className="flex flex-col gap-3">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card-base p-6 relative group"
            >
              {/* Top header row — Fiori Object Card */}
              <div className="flex justify-between items-start gap-4 flex-wrap mb-3 pb-3 border-b border-border">
                <div className="flex-1 min-w-0">
                  <div className="font-heading text-[17px] font-bold text-foreground leading-snug mb-1">
                    {t(exp.titleKey)}
                  </div>
                  <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-xs text-text-secondary">
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {t(exp.companyKey)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {t(exp.periodKey)}
                    </span>
                    {exp.statusKey && (
                      <span className="inline-flex items-center status-success px-1.5 py-0.5 rounded-sm text-[11px] font-semibold">
                        {t(exp.statusKey)}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setGalleryOpen(idx)}
                  className="inline-flex items-center gap-1.5 px-3 h-8 rounded-sm text-xs font-semibold text-primary border border-primary/40 hover:bg-primary/5 transition"
                >
                  <Camera className="w-3.5 h-3.5" />
                  {t("view_gallery")}
                </button>
              </div>

              <ul className="flex flex-col gap-1.5">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[13.5px] text-foreground/85 pl-4 relative leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold"
                  >
                    {t(b)}
                  </li>
                ))}
              </ul>

              {exp.projects && (
                <div className="mt-4">
                  <div className="text-[11px] tracking-widest uppercase text-primary font-bold mb-2">
                    {t("exp_projects_label")}
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {exp.projects.map((p) => (
                      <li
                        key={p}
                        className="text-[13.5px] text-foreground/85 pl-4 relative leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-primary"
                      >
                        <strong className="text-foreground">{t(`${p}_name`)}</strong> {t(p)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.techStack && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tag-pill">{tech}</span>
                  ))}
                </div>
              )}

              {exp.noteKey && (
                <div className="mt-4 p-3 bg-accent border-l-4 border-primary rounded-sm text-xs text-foreground/80">
                  <strong className="text-primary">ℹ </strong>{t(exp.noteKey)}
                </div>
              )}

              <GalleryModal
                open={galleryOpen === idx}
                onOpenChange={(open) => setGalleryOpen(open ? idx : null)}
                title={t(exp.titleKey)}
                images={exp.images}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
