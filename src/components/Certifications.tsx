import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Award, Cloud, Landmark, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "SAP Certified – SAP S/4HANA Cloud Private Edition – Sourcing and Procurement",
    code: "C_TS452_2410 · C_TS452_2022",
    noteKey: "cert1_note",
    year: "2025",
    url: "https://www.credly.com/badges/28f807f5-ed76-41ec-859d-06ddb9de0ed7/public_url",
    Icon: Award,
  },
  {
    name: "SAP Certified – SAP Master Data Governance",
    code: "C_MDG_1909",
    year: "2025",
    url: "https://www.credly.com/badges/7718d976-7065-4959-8807-cb8fa48f8866/public_url",
    Icon: Landmark,
  },
  {
    name: "SAP Certified – Solution Architect – SAP BTP",
    code: "P_BTPA_2511",
    year: "2025",
    url: "https://www.credly.com/badges/89de8400-eab0-46de-84d3-7cfde54ce8e9/public_url",
    Icon: Cloud,
  },
];

export default function Certifications() {
  const { t } = useLang();

  return (
    <section id="certifications" className="relative z-10 bg-card-secondary">
      <div className="section-container">
        <div className="section-label">{t("section_cert")}</div>
        <h2 className="font-heading text-[clamp(1.4rem,2.5vw,1.875rem)] font-bold tracking-tight mb-8 text-foreground">
          {t("cert_heading")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card-base p-5 hover:-translate-y-0.5 flex flex-col"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <cert.Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-heading text-[14px] font-bold text-foreground mb-1 leading-snug">
                {cert.name}
              </div>
              <div className="text-xs text-primary font-mono font-semibold mb-1">{cert.code}</div>
              {cert.noteKey && (
                <div className="text-xs text-text-secondary">{t(cert.noteKey)}</div>
              )}
              <div className="text-[11px] text-text-secondary/70 mt-1">{cert.year}</div>
              <div className="mt-auto pt-3 flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1 status-success px-2 py-0.5 rounded-sm text-[11px] font-semibold">
                  Certified
                </span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  {t("cert_view")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
