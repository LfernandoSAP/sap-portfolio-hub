import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLang } from "@/hooks/useLang";
import { X } from "lucide-react";

interface GalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  images: string[];
}

export default function GalleryModal({ open, onOpenChange, title, images }: GalleryModalProps) {
  const { t } = useLang();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 flex flex-row items-center justify-between">
          <DialogTitle className="font-heading font-bold text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6 grid gap-4">
          {images.length > 0 ? (
            images.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-border bg-secondary">
                <img src={img} alt={`${title} screenshot ${i + 1}`} className="w-full h-auto" />
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-text-secondary text-sm">
              📸 Screenshots em breve / Screenshots coming soon
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
