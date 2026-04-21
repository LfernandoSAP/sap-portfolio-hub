import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Award, Database, Cloud } from "lucide-react";

const certs = [
  { nameKey: "cert1_name", sub: "SAP S/4HANA Cloud Private Edition", Icon: Award },
  { nameKey: "cert2_name", sub: "SAP Master Data Governance", Icon: Database },
  { nameKey: "cert3_name", sub: "SAP Business Technology Platform", Icon: Cloud },
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
              className="card-base p-5 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <cert.Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-heading text-[14px] font-bold text-foreground mb-1 leading-snug">
                {t(cert.nameKey)}
              </div>
              <div className="text-xs text-text-secondary">{cert.sub}</div>
              <div className="mt-3 inline-flex items-center gap-1 status-success px-2 py-0.5 rounded-sm text-[11px] font-semibold">
                Certified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
