import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary font-rubik text-text overflow-y-hidden">
      <main className="max-w-[800px] px-4 mx-auto min-h-screen flex flex-col justify-center items-center gap-10 text-center">
        <h1 className="font-medium text-3xl">WikiLoL</h1>
        <p>Bienvenue sur le site dédié à l'univers de League of Legends !</p>
        <p className="-mt-7">
          Cliquez sur l'un des trois boutons pour découvrir la liste des
          champions, <br /> explorer les différents rôles ou plonger dans les
          types de cet univers fascinant.
        </p>
        <nav className="flex flex-col gap-4">
          <Link
            to={"/champions"}
            className="bg-tertiary py-2 px-4 rounded-sm hover:bg-text hover:text-primary active:border-0 active:outline-none active:ring-0 focus:outline focus:outline-offset-2 focus:outline-tertiary focus:ring-0"
          >
            Liste des champions
          </Link>
          <Link
            to={"/roles"}
            className="bg-tertiary py-2 px-4 rounded-sm hover:bg-text hover:text-primary active:border-0 active:outline-none active:ring-0 focus:outline focus:outline-offset-2 focus:outline-tertiary focus:ring-0"
          >
            Liste des rôles
          </Link>
          <Link
            to={"/types"}
            className="bg-tertiary py-2 px-4 rounded-sm hover:bg-text hover:text-primary active:border-0 active:outline-none active:ring-0 focus:outline focus:outline-offset-2 focus:outline-tertiary focus:ring-0"
          >
            Liste des types
          </Link>
        </nav>
      </main>
    </div>
  );
}
