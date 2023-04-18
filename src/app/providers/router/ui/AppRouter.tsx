import { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Spinner } from 'shared/ui/spinner/Spinner';

export function AppRouter() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}
