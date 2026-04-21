import { PotMark } from "@/components/ui/PotMark";

export function Footer() {
  return (
    <footer className="pt-16 pb-12 border-t border-rule mt-20">
      <div className="max-w-[1320px] mx-auto px-8 max-[1199px]:px-10 max-[767px]:px-6">
        <div className="flex justify-between gap-6 font-sans text-sm text-stone flex-wrap">
          <span>Sugo AI &middot; Houston, TX</span>
          <a className="link-inline" href="mailto:marc@sugoai.com">
            marc@sugoai.com
          </a>
          <span>&copy; 2026</span>
        </div>
        <div className="flex items-center justify-center h-24 mt-12">
          <PotMark />
        </div>
      </div>
    </footer>
  );
}
