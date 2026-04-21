import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Download, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="relative z-10 bg-card-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-base p-10 text-center relative overflow-hidden border-t-4 border-t-primary"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-foreground">
            {t("contact_title")}
          </h2>
          <p className="text-text-secondary text-sm mb-7 max-w-[500px] mx-auto">
            {t("contact_sub")}
          </p>

          <div className="flex gap-2 justify-center flex-wrap">
            <a
              href="mailto:lfernandosap@gmail.com"
              className="inline-flex items-center gap-2 px-5 h-9 rounded-sm bg-primary text-primary-foreground font-semibold text-[13px] hover:bg-primary/90 transition shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              {t("contact_email")}
            </a>
            <a
              href="https://linkedin.com/in/luiz-fernando-gonçalves-da-silva-7719a3337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-9 rounded-sm border border-primary text-primary font-semibold text-[13px] hover:bg-primary/5 transition"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href="/Luiz_Fernando_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 h-9 rounded-sm border border-border text-foreground font-semibold text-[13px] hover:bg-secondary transition"
            >
              <Download className="w-3.5 h-3.5" />
              {t("download_cv")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
