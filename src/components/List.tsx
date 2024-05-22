import { useLocation, useParams } from "react-router";
import { championData, roleData, typeData } from "../data.tsx";
import Card from "./Card.tsx";

export default function List() {
  const location = useLocation();
  const { slug } = useParams();

  const filteredChampionsByRoleList = championData.filter(
    (champion) => champion.role?.slug === slug
  );

  return (
    <>
      <h2 className="font-medium text-xl text-center mb-10">
        Liste des{" "}
        {location.pathname.includes("champions")
          ? "champions"
          : location.pathname.includes("roles")
          ? "rôles"
          : "types"}
      </h2>
      <ul className="flex flex-wrap -m-2">
        {(location.pathname.includes("champions")
          ? championData
          : location.pathname === "/roles"
          ? roleData
          : location.pathname.includes("/roles/")
          ? filteredChampionsByRoleList
          : typeData
        ).map((data) => (
          <li
            key={data.id}
            className={`${
              location.pathname !== "/roles" && location.pathname !== "/types"
                ? "w-1/4"
                : "w-1/3"
            } p-2`}
          >
            <Card data={data} />
          </li>
        ))}
      </ul>
    </>
  );
}
