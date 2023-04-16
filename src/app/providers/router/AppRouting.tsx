import { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Spinner } from "shared/ui/spinner/Spinner";

const Home = lazy(() => import("pages/home"));
const Product = lazy(() => import("pages/product"));
const Profile = lazy(() => import("pages/profile"));
const Favorites = lazy(() => import("pages/favorites"));
const NotFound = lazy(() => import("pages/notFound"));

export function AppRouting() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="product/:id" element={<Product />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
