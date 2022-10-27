import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader';
import { Navigation } from './Navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      </main>
    </div>
  );
};
