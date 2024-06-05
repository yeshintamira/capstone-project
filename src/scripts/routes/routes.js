import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Budayas from '../views/pages/budaya';
// import other page modules

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/budaya': Budayas,
  // add other routes here
};

export default routes;
