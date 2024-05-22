import { championData } from "../data.tsx";
import ChampionCard from "./Card.tsx";

export default function ChampionList() {
  return (
    <>
      <h2 className="font-medium text-xl text-center mb-10">
        Liste des champions
      </h2>
      <ul className="flex flex-wrap -m-2">
        {championData.map((champion) => (
          <li key={champion.id} className={"w-1/4 p-2"}>
            <ChampionCard data={champion} />
          </li>
        ))}
      </ul>
    </>
  );
}
