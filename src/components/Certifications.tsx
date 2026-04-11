import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";

const certs = [
  { nameKey: "cert1_name", sub: "SAP S/4HANA Cloud Private Edition", icon: "🎓" },
  { nameKey: "cert2_name", sub: "SAP Master Data Governance", icon: "🏛️" },
  { nameKey: "cert3_name", sub: "SAP Business Technology Platform", icon: "☁️" },
];

export default function Certifications() {
  const { t } = useLang();

  return (
    <section id="certifications" className="relative z-10">
      <div className="section-container">
        <div className="section-label">{t("section_cert")}</div>
        <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight mb-10 text-foreground">
          {t("cert_heading")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-base p-6 hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-lg gradient-bg/20 border border-accent-blue/30 flex items-center justify-center mb-4 text-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20">
                {cert.icon}
              </div>
              <div className="font-heading text-sm font-bold text-foreground mb-1">{t(cert.nameKey)}</div>
              <div className="text-xs text-primary font-medium font-mono">{cert.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
