import { Route, Routes } from "react-router-dom";

import ChampionItem from "./ChampionItem";
import ChampionList from "./ChampionList";
import Layout from "./Layout/Layout.tsx";
// import RoleList from "./RoleList";
// import TypeList from "./TypeList";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChampionList />} />
          <Route path="/champion/:slug" element={<ChampionItem />} />
          {/* <Route path="/role/:slug" element={<roleData />} /> */}
          {/* <Route path="/type/:slug" element={<typeData />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
}
