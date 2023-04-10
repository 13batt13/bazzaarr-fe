import { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
const Product = lazy(() => import("pages/product"));
const Profile = lazy(() => import("pages/profile"));
const Favorites = lazy(() => import("pages/favorites"));
const NotFound = lazy(() => import("pages/notFound"));

export default function PagesRouting() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="product/*" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
