import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { championData, roleData, typeData } from "../../data";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
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

  useEffect(() => {
    if (openMenu) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [openMenu]);

  function onOpen() {
    document.getElementById("menu")?.classList.add("w-[100%]");
  }

  function onClose() {
    document.getElementById("menu")?.classList.remove("w-[100%]");
  }

  return (
    <header className="h-[72px] flex justify-between items-center p-4 sticky top-0 bg-primary z-50 shadow-[rgba(9,20,40,0.7)_0px_10px_10px_0px]">
      <Link to={"/"}>
        <h1 className="font-medium text-3xl hover:text-hover active:border-0 active:outline-none active:ring-0 focus:outline focus:outline-offset-[3px] focus:outline-text focus:ring-0 rounded-sm">
          WikiLoL
        </h1>
      </Link>
      <nav className="max-md:hidden flex items-center text-base">
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
                    to={`/champions/${champion.slug}`}
                    className="block text-primary hover:bg-primary/90 hover:text-text p-2 rounded-sm active:border-0 active:outline-none active:ring-0 focus:outline-2 focus:outline-offset-[3px] focus:outline-tertiary focus:ring-0"
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
                    to={`/roles/${role.slug}`}
                    className="block text-primary hover:bg-primary/90 hover:text-text p-2 rounded-sm active:border-0 active:outline-none active:ring-0 focus:outline-2 focus:outline-offset-[3px] focus:outline-tertiary focus:ring-0"
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
                    to={`/types/${type.slug}`}
                    className="block text-primary hover:bg-primary/90 hover:text-text p-2 rounded-sm active:border-0 active:outline-none active:ring-0 focus:outline-2 focus:outline-offset-[3px] focus:outline-tertiary focus:ring-0"
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
      <nav className="md:hidden">
        <div
          className="relative w-full h-full flex flex-col items-start gap-[5px] cursor-pointer"
          onClick={() => {
            setOpenMenu((prev) => !prev);
            if (openMenu) {
              onClose();
            } else {
              onOpen();
            }
          }}
        >
          <div
            className={`${
              openMenu ? "-rotate-45 absolute" : "rotate-0"
            } transition w-5 h-0.5 bg-text rounded-md`}
          ></div>
          <div
            className={`${
              openMenu ? "opacity-0" : "opacity-100"
            } transition-opacity w-5 h-0.5 bg-text rounded-md`}
          ></div>
          <div
            className={`${
              openMenu ? "rotate-45 absolute" : "rotate-0"
            } transition w-5 h-0.5 bg-text rounded-md`}
          ></div>
        </div>
      </nav>
      <div
        id="menu"
        className="md:hidden fixed bg-primary w-0 top-[72px] left-0 flex justify-center items-center text-xl origin-left duration-500"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <nav className="flex flex-col gap-10 p-4 text-center">
          <Link
            to="/champions"
            className={`${
              openMenu ? "block" : "hidden"
            } transition py-2 px-4 rounded-sm duration-500 hover:drop-shadow-[5px_5px_0px_rgba(3,151,171,0.25)]`}
            onClick={() => {
              setOpenMenu(false);
              onClose();
            }}
          >
            Champions
          </Link>
          <Link
            to="/roles"
            className={`${
              openMenu ? "block" : "hidden"
            } transition py-2 px-4 rounded-sm duration-500 hover:drop-shadow-[5px_5px_0px_rgba(3,151,171,0.25)]`}
            onClick={() => {
              setOpenMenu(false);
              onClose();
            }}
          >
            Rôles
          </Link>
          <Link
            to="/types"
            className={`${
              openMenu ? "block" : "hidden"
            } transition py-2 px-4 rounded-sm duration-500 hover:drop-shadow-[5px_5px_0px_rgba(3,151,171,0.25)]`}
            onClick={() => {
              setOpenMenu(false);
              onClose();
            }}
          >
            Types
          </Link>
        </nav>
      </div>
    </header>
  );
}
