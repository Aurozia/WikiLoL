import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const championList = [
    { id: "1", name: "Aurelion Sol", url: "aurelionsol" },
    { id: "2", name: "Blitzcrank", url: "aurelionsol" },
    { id: "3", name: "Fiddlesticks", url: "fiddlesticks" },
    { id: "4", name: "Miss Fortune", url: "missfortune" },
    { id: "5", name: "Mordekaiser", url: "mordekaiser" },
    { id: "6", name: "Nunu et Willump", url: "nunuetwillump" },
    { id: "7", name: "Twisted Fate", url: "twistedfate" },
  ];

  const roleList = [
    { id: "1", name: "Top", url: "top" },
    { id: "2", name: "Jungle", url: "jungle" },
    { id: "3", name: "Mid", url: "mid" },
    { id: "4", name: "ADC", url: "adc" },
    { id: "5", name: "Support", url: "support" },
  ];

  const typeList = [
    { id: "1", name: "Assassin", url: "assassin" },
    { id: "2", name: "Combattant", url: "combattant" },
    { id: "3", name: "Mage", url: "mage" },
    { id: "4", name: "Support", url: "support" },
    { id: "5", name: "Tank", url: "tank" },
    { id: "6", name: "Tireur", url: "tireur" },
  ];

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
              {championList.map((champion) => (
                <li key={champion.id}>
                  <Link
                    to={`/${champion.url}`}
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
              {roleList.map((role) => (
                <li key={role.id}>
                  <Link
                    to={`/${role.url}`}
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
              {typeList.map((type) => (
                <li key={type.id}>
                  <Link
                    to={`/${type.url}`}
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
