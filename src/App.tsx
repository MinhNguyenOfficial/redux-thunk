import { Route, Routes } from 'react-router-dom';
import routes from './router';
import { Fragment } from 'react/jsx-runtime';
import NotFoundPage from './pages/not-found';
import AuthLayout from './layouts/auth';

function App() {
  return (
    <Routes>
      {routes.map((route) => {
        const Element = route.element;
        const Layout = route.layout ? route.layout : Fragment;
        const Authentication = route.public ? Fragment : AuthLayout;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Authentication>
                <Layout>
                  <Element />
                </Layout>
              </Authentication>
            }
          />
        );
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
