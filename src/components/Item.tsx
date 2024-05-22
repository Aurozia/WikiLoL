import { Link, useParams } from "react-router-dom";
import { championData } from "../data.tsx";

export default function ChampionItem() {
  const { slug } = useParams();

  const champion = championData.find((champion) => champion.slug === slug);

  if (!champion) {
    return <div>Champion non trouvé...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <img
        className="w-full rounded-sm pointer-events-none"
        src={`${champion.picture}`}
        alt={`League of Legends Champion ${champion.name}`}
      />
      <div className="bg-text/30 rounded-sm p-4 space-y-4">
        <div className="flex justify-between items-start">
          <section className="space-y-1">
            <h3>
              {champion.name},
              <span className="ml-4 text-sm text-hover">{champion.alias}</span>
            </h3>

            <p>Date de sortie : {champion.release_date}</p>
          </section>

          <section className="flex items-center gap-10">
            <Link to={`/roles/${champion.role?.slug}`}>
              <article className="flex flex-col items-center gap-0.5">
                <img
                  className="w-[25px]"
                  src={`${champion.role?.picture}`}
                  alt={`Role ${champion.role?.name}`}
                />
                <p>{champion.role?.name}</p>
              </article>
            </Link>
            <Link to={`/types/${champion.type?.slug}`}>
              <article className="flex flex-col items-center gap-0.5">
                <img
                  className="w-[25px]"
                  src={`${champion.type?.picture}`}
                  alt={`Type ${champion.type?.name}`}
                />
                <p>{champion.type?.name}</p>
              </article>
            </Link>
          </section>
        </div>
        <p className="text-justify">{champion.description}</p>
      </div>
    </div>
  );
}
