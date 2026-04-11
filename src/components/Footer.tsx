import { useLang } from "@/hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative z-10 text-center py-8 border-t border-border">
      <span className="text-xs text-text-tertiary">
        Luiz Fernando Gonçalves da Silva — SAP MM Consultant
      </span>
      <br />
      <span className="text-xs text-text-tertiary">
        São Paulo, Brazil · {t("footer_remote")}
      </span>
    </footer>
  );
}
