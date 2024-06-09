import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Budayas from '../views/pages/budaya';
import About from '../views/pages/about';
// import other page modules

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/budaya': Budayas,
  '/about': About,
  // add other routes here
};

export default routes;
