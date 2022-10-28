import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader';
import { Navigation } from './Navigation/Navigation';
import Particles from './Particles';
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
      <Particles id="tsparticles" />
    </div>
  );
};
