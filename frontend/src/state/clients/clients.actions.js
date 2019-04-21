import {
  GET_QUICK_CLIENT_LIST_REQUEST,
  GET_QUICK_CLIENT_LIST_SUCCCESS,
  GET_QUICK_CLIENT_LIST_FAIL
} from './clients.constants';
import { clients as clientsService } from 'services';

export function getClientsAction() {
  return async dispatch => {
    dispatch({ type: GET_QUICK_CLIENT_LIST_REQUEST, payload: null });

    const _result = await clientsService.getQuickClientList();

    if (!_result.success) {
      return dispatch({ type: GET_QUICK_CLIENT_LIST_FAIL, payload: null });
    }

    dispatch({ type: GET_QUICK_CLIENT_LIST_SUCCCESS, payload: _result.payload });
  };
}