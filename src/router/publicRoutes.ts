import IRoute from '../@type/route';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const publicRoutes: IRoute[] = [
  { path: '/', element: HomePage, public: true },
  { path: '/login', element: LoginPage, public: true },
];

export default publicRoutes;
