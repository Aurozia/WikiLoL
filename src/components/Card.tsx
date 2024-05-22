import { Link } from "react-router-dom";

import { Champion, Role, Type } from "../types";

interface Props {
  data: Champion | Role | Type;
}

export default function ChampionCard({ data }: Props) {
  return (
    <div
      className="w-full h-[100px] relative rounded-sm"
      style={{
        backgroundImage: `url(${data.picture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link
        to={data.slug}
        className="absolute left-2 bottom-2 rounded-sm focus:outline focus:outline-offset-2 focus:outline-text focus:ring-0"
      >
        <p className="bg-text/50 text-primary hover:bg-primary/50 hover:text-text rounded-sm py-0.5 px-2">
          {data.name}
        </p>
      </Link>
    </div>
  );
}
