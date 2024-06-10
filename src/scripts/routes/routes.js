import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Budayas from '../views/pages/budaya';
import About from '../views/pages/about';
import Donate from '../views/pages/donate';
// import other page modules

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/budaya': Budayas,
  '/about': About,
  '/donate': Donate,
  // add other routes here
};

export default routes;
