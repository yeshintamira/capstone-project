import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
// import other page modules

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  // add other routes here
};

export default routes;
