import { Route, Routes } from "react-router-dom";

import Error from "./Error.tsx";
import Home from "./Home.tsx";
import Item from "./Item.tsx";
import Layout from "./Layout/Layout.tsx";
import List from "./List.tsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />

        <Route element={<Layout />}>
          <Route path="/champions" element={<List />} />
          <Route path="/champions/:slug" element={<Item />} />
          <Route path="/roles" element={<List />} />
          <Route path="/roles/:slug" element={<List />} />
          <Route path="/types" element={<List />} />
          <Route path="/types/:slug" element={<List />} />
        </Route>
      </Routes>
    </>
  );
}
