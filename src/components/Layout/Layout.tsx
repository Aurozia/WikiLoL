import { Outlet } from "react-router";

import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

export default function Layout() {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary font-rubik text-text">
      <div className="max-w-[800px] min-h-screen flex flex-col md:mx-auto">
        <Header />
        <main className="flex-1 px-4 transition duration-500">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
