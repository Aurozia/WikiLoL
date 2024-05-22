import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { championData, roleData, typeData } from "../../data";

export default function Header() {
  const [openChampionList, setOpenChampionList] = useState(false);
  const [openRoleList, setOpenRoleList] = useState(false);
  const [openTypeList, setOpenTypeList] = useState(false);
  const [lastClicked, setLastClicked] = useState<
    "champion" | "role" | "type" | null
  >(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target && !target.closest(".dropdown")) {
        setOpenChampionList(false);
        setOpenRoleList(false);
        setOpenTypeList(false);
        setLastClicked(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (lastClicked === "champion") {
      setOpenRoleList(false);
      setOpenTypeList(false);
    } else if (lastClicked === "role") {
      setOpenChampionList(false);
      setOpenTypeList(false);
    } else if (lastClicked === "type") {
      setOpenChampionList(false);
      setOpenRoleList(false);
    }
  }, [lastClicked]);

  return (
    <header className="flex justify-between items-center py-4">
      <Link to={"/"}>
        <h1 className="font-medium text-3xl hover:text-hover">WikiLoL</h1>
      </Link>
      <nav className="flex items-center text-base">
        <section className="dropdown">
          <button
            type="button"
            id="dropdownChampionListButton"
            data-dropdown-toggle="dropdownChampionList"
            className={`${
              openChampionList ? "bg-tertiary" : ""
            } w-[160px] rounded-sm px-4 py-2 text-center`}
            onClick={() => {
              setOpenChampionList((prevState) => !prevState);
              setLastClicked("champion");
            }}
          >
            Champions
          </button>

          <div
            id="dropdownChampionList"
            className={`${
              openChampionList ? "" : "hidden"
            } z-10 w-[160px] absolute max-h-[500px] bg-white p-2 my-4 text-base rounded-sm overflow-y-auto`}
          >
            <ul aria-labelledby="dropdownChampionListButton">
              {championData.map((champion) => (
                <li key={champion.id}>
                  <Link
                    to={`/${champion.slug}`}
                    className="block text-primary hover:bg-primary/90 hover:text-text p-2 rounded-sm"
                    onClick={() => setOpenChampionList(false)}
                  >
                    {champion.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dropdown">
          <button
            type="button"
            id="dropdownRoleListButton"
            data-dropdown-toggle="dropdownRoleList"
            className={`${
              openRoleList ? "bg-tertiary" : ""
            } w-[160px] rounded-sm px-4 py-2 text-center`}
            onClick={() => {
              setOpenRoleList((prevState) => !prevState);
              setLastClicked("role");
            }}
          >
            Rôles
          </button>

          <div
            id="dropdownRoleList"
            className={`${
              openRoleList ? "" : "hidden"
            } z-10 w-[160px] absolute max-h-[500px] bg-white p-2 my-4 text-base rounded-sm overflow-y-auto`}
          >
            <ul aria-labelledby="dropdownRoleListButton">
              {roleData.map((role) => (
                <li key={role.id}>
                  <Link
                    to={`/${role.slug}`}
                    className="block text-primary hover:bg-primary/90 hover:text-text p-2 rounded-sm"
                    onClick={() => setOpenRoleList(false)}
                  >
                    {role.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dropdown">
          <button
            type="button"
            id="dropdownTypeListButton"
            data-dropdown-toggle="dropdownTypeList"
            className={`${
              openTypeList ? "bg-tertiary" : ""
            } w-[160px] rounded-sm px-4 py-2 text-center`}
            onClick={() => {
              setOpenTypeList((prevState) => !prevState);
              setLastClicked("type");
            }}
          >
            Types
          </button>

          <div
            id="dropdownTypeList"
            className={`${
              openTypeList ? "" : "hidden"
            } z-10 w-[160px] absolute max-h-[500px] bg-white p-2 my-4 text-base rounded-sm overflow-y-auto`}
          >
            <ul aria-labelledby="dropdownTypeListButton">
              {typeData.map((type) => (
                <li key={type.id}>
                  <Link
                    to={`/${type.slug}`}
                    className="block text-primary hover:bg-primary/90 hover:text-text p-2 rounded-sm"
                    onClick={() => setOpenTypeList(false)}
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
}
