import { useLocation, useParams } from "react-router";
import { championData, roleData, typeData } from "../data.tsx";
import Card from "./Card.tsx";

export default function List() {
  const location = useLocation();
  const { slug } = useParams();

  const filteredChampionsByRoleList = championData.filter(
    (champion) => champion.role?.slug === slug
  );

  const filteredChampionsByTypeList = championData.filter(
    (champion) => champion.type?.slug === slug
  );

  return (
    <>
      <h2 className="font-medium text-xl text-center mt-5 mb-10">
        Liste des{" "}
        {location.pathname === "/roles" ? (
          "rôles"
        ) : location.pathname.includes("/roles/") ? (
          <>
            champions avec le rôle{" "}
            <span className="underline underline-offset-[3px]">{slug}</span>
          </>
        ) : location.pathname === "/types" ? (
          "types"
        ) : location.pathname.includes("/types/") ? (
          <>
            champions avec le type{" "}
            <span className="underline underline-offset-[3px]">{slug}</span>
          </>
        ) : (
          "champions"
        )}
      </h2>
      <ul className="flex flex-wrap md:-m-2">
        {(location.pathname === "/roles"
          ? roleData
          : location.pathname.includes("/roles/")
          ? filteredChampionsByRoleList
          : location.pathname === "/types"
          ? typeData
          : location.pathname.includes("/types/")
          ? filteredChampionsByTypeList
          : championData
        ).map((data) => (
          <li
            key={data.id}
            className={
              location.pathname !== "/roles" && location.pathname !== "/types"
                ? "w-1/2 xs:w-1/3 md:w-1/4 p-2"
                : "w-1/2 sm:w-1/3 p-4"
            }
          >
            <Card data={data} />
          </li>
        ))}
      </ul>
    </>
  );
}
