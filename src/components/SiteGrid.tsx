import { sites } from "@/data/sites";
import { SiteCard } from "./SiteCard";

export const SiteGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sites.map((site) => (
        <SiteCard key={site.slug} site={site} />
      ))}
    </div>
  );
};
