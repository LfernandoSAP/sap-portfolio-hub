import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Camera } from "lucide-react";
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
    images: [], // User will add real screenshots here
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
    <section id="experience" className="relative z-10">
      <div className="section-container">
        <div className="section-label">{t("section_exp")}</div>
        <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight mb-10 text-foreground">
          {t("exp_heading")}
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-base p-7 relative overflow-hidden group"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                <div className="font-heading text-lg font-bold text-foreground">{t(exp.titleKey)}</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGalleryOpen(idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-primary bg-primary/8 border border-primary/20 hover:bg-primary/15 transition-all"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    {t("view_gallery")}
                  </button>
                  <span className="text-xs text-primary bg-primary/8 border border-border px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period} – {t("present")}
                  </span>
                </div>
              </div>

              <div className="text-sm text-text-secondary mb-4">{t(exp.companyKey)}</div>

              <ul className="flex flex-col gap-1.5">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-text-secondary pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-primary before:font-bold">
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
                <div className="mt-4 p-3 bg-accent-blue/5 border border-accent-blue/20 rounded-lg text-xs text-text-secondary italic">
                  {t(exp.noteKey)}
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
