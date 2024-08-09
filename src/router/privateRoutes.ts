import IRoute from '../@type/route';
import AdminPage from '../pages/admin';
import DashboardPage from '../pages/dashboard';
import { ROUTE_URL } from './constants';

const privateRoutes: IRoute[] = [
  { path: ROUTE_URL.ADMIN, element: AdminPage },
  { path: ROUTE_URL.DASHBOARD, element: DashboardPage },
];

export default privateRoutes;
