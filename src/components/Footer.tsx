import { useLang } from "@/hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="sap-shell relative z-10 py-5 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="text-[12px] text-white/80 font-semibold">
          Luiz Fernando Gonçalves da Silva
          <span className="text-white/50 font-normal ml-2">— SAP MM / S/4HANA Sourcing &amp; Procurement | {t("footer_certified")}</span>
        </div>
        <div className="text-[11px] text-white/60">
          {t("footer_location")} · {t("available")}
        </div>
      </div>
    </footer>
  );
}
