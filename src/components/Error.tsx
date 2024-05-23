import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary font-rubik text-text">
      <main className="max-w-[800px] py-10 px-4 mx-auto min-h-screen flex flex-col justify-center items-center gap-10 text-center">
        <h1 className="font-medium text-3xl">
          Il n'y a pas de champions par ici...
        </h1>
        <Link
          to={"/"}
          className="bg-tertiary py-2 px-4 rounded-sm hover:bg-text hover:text-primary active:border-0 active:outline-none active:ring-0 focus:outline focus:outline-offset-[3px] focus:outline-tertiary focus:ring-0"
        >
          Retour à la page d'accueil
        </Link>
      </main>
    </div>
  );
}
