import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Package, Database, Cloud, ShoppingCart, Boxes, Workflow, FileBarChart, Truck } from "lucide-react";

const modules = [
  { code: "MM", name: "Materials Management", Icon: Package, tone: "from-sky-500 to-blue-600" },
  { code: "MDG", name: "Master Data Governance", Icon: Database, tone: "from-indigo-500 to-violet-600" },
  { code: "BTP", name: "Business Tech Platform", Icon: Cloud, tone: "from-cyan-500 to-sky-600" },
  { code: "P2P", name: "Procure to Pay", Icon: ShoppingCart, tone: "from-emerald-500 to-teal-600" },
  { code: "IM", name: "Inventory Management", Icon: Boxes, tone: "from-amber-500 to-orange-600" },
  { code: "WF", name: "Workflow & BPM", Icon: Workflow, tone: "from-fuchsia-500 to-pink-600" },
  { code: "RPT", name: "Reporting & Analytics", Icon: FileBarChart, tone: "from-rose-500 to-red-600" },
  { code: "SCM", name: "Supply Chain", Icon: Truck, tone: "from-lime-500 to-green-600" },
];

export default function SapModules() {
  const { t } = useLang();

  return (
    <section id="modules" className="relative z-10">
      <div className="section-container">
        <div className="section-label">{t("section_modules")}</div>
        <h2 className="font-heading text-[clamp(1.4rem,2.5vw,1.875rem)] font-bold tracking-tight mb-8 text-foreground">
          {t("modules_heading")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {modules.map((m, idx) => (
            <motion.div
              key={m.code}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`group relative overflow-hidden rounded-sm bg-gradient-to-br ${m.tone} p-4 aspect-[4/3] flex flex-col justify-between text-white cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <m.Icon className="w-6 h-6 opacity-90" strokeWidth={1.75} />
                <span className="text-[10px] font-bold tracking-wider bg-white/20 backdrop-blur px-1.5 py-0.5 rounded-sm">
                  {m.code}
                </span>
              </div>
              <div>
                <div className="font-heading text-[13px] font-bold leading-tight">{m.name}</div>
                <div className="text-[10px] text-white/75 mt-0.5">SAP S/4HANA</div>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
