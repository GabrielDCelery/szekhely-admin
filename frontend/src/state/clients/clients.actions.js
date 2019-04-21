import {
  GET_QUICK_CLIENT_LIST_REQUEST,
  GET_QUICK_CLIENT_LIST_SUCCCESS,
  GET_QUICK_CLIENT_LIST_FAIL
} from './clients.constants';
import { clientsService } from 'services';

export function getClientsAction() {
  return async dispatch => {
    dispatch({ type: GET_QUICK_CLIENT_LIST_REQUEST, payload: null });

    const { success, payload } = await clientsService.getClients();

    if (!success) {
      return dispatch({ type: GET_QUICK_CLIENT_LIST_FAIL, payload: null });
    }

    dispatch({ type: GET_QUICK_CLIENT_LIST_SUCCCESS, payload: payload });
  };
}