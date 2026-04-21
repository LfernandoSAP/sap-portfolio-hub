import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Camera, Calendar, Building2 } from "lucide-react";
import GalleryModal from "./GalleryModal";

interface ExpData {
  titleKey: string;
  companyKey: string;
  period: string;
  bullets: string[];
  techStack?: string[];
  noteKey?: string;
  images: string[];
}

const experiences: ExpData[] = [
  {
    titleKey: "exp1_title",
    companyKey: "exp1_company",
    period: "2025",
    bullets: ["exp1_b1", "exp1_b2", "exp1_b3", "exp1_b4", "exp1_b5", "exp1_b6", "exp1_b7"],
    techStack: ["Python", "FastAPI", "PostgreSQL", "React", "SQLAlchemy", "Vite", "MUI", "JWT", "REST API"],
    noteKey: "exp1_note",
    images: [],
  },
  {
    titleKey: "exp2_title",
    companyKey: "exp2_company",
    period: "2003",
    bullets: ["exp2_b1", "exp2_b2", "exp2_b3", "exp2_b4", "exp2_b5"],
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
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {t(exp.companyKey)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period} – {t("present")}
                    </span>
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
