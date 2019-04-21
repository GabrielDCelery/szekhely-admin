import { userDefaultState } from './user';
import { routesDefaultState } from './routes';

const combinedDefaultState = {
  user: userDefaultState,
  routes: routesDefaultState
};

export default combinedDefaultState;