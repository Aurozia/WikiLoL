import { Outlet } from "react-router";

import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

export default function Layout() {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary font-rubik text-text overflow-y-hidden">
      <div className="max-w-[800px] px-4 min-h-screen flex flex-col mx-auto">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
