import { Routes, Route, Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import NotFound from "@/pages/NotFound";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
