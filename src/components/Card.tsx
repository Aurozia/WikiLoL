import { Link } from "react-router-dom";

import { Champion, Role, Type } from "../types";

interface Props {
  data: Champion | Role | Type;
}

export default function ChampionCard({ data }: Props) {
  return (
    <div
      className={`w-full h-[100px] rounded-sm ${
        data.picture.includes("champions")
          ? "relative"
          : "flex justify-center items-end"
      }`}
      style={{
        backgroundImage: `url(${data.picture})`,
        backgroundSize: data.picture.includes("champions") ? "cover" : "60px",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link
        to={
          (location.pathname === "/roles"
            ? "/roles/"
            : location.pathname === "/types"
            ? "/types/"
            : "/champions/") + data.slug
        }
        className={`${
          data.picture.includes("champions") ? "absolute left-2 bottom-2" : ""
        } rounded-sm active:border-0 active:outline-none active:ring-0 focus:outline focus:outline-offset-[3px] focus:outline-text focus:ring-0`}
      >
        <p
          className={`bg-text/50 text-primary ${
            data.picture.includes("champions")
              ? "hover:bg-primary/50"
              : "hover:bg-tertiary/50"
          }  hover:text-text rounded-sm py-0.5 px-2`}
        >
          {data.name}
        </p>
      </Link>
    </div>
  );
}
