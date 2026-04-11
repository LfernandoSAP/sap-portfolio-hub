import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Download } from "lucide-react";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card-secondary border border-border rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="font-heading text-3xl font-extrabold mb-3 text-foreground relative z-10">{t("contact_title")}</h2>
          <p className="text-text-secondary text-sm mb-8 max-w-[500px] mx-auto relative z-10">{t("contact_sub")}</p>

          <div className="flex gap-4 justify-center flex-wrap relative z-10">
            <a
              href="mailto:lfernandosap@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg gradient-bg text-primary-foreground font-medium text-sm hover:opacity-85 hover:-translate-y-0.5 transition-all"
            >
              {t("contact_email")}
            </a>
            <a
              href="https://linkedin.com/in/luiz-fernando-gonçalves-da-silva-7719a3337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-text-secondary font-medium text-sm hover:bg-primary/5 hover:text-foreground hover:border-primary transition-all"
            >
              LinkedIn →
            </a>
            <a
              href="/Luiz_Fernando_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-text-secondary font-medium text-sm hover:bg-primary/5 hover:text-foreground hover:border-primary transition-all"
            >
              <Download className="w-4 h-4" />
              {t("download_cv")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
